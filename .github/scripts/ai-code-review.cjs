const REVIEWER = 'copilot-pull-request-reviewer[bot]';
const isCopilot = (user) =>
  user?.type === 'Bot' && [REVIEWER, 'Copilot'].includes(user.login);

function skipReason(pr, run, repository) {
  if (pr.base?.ref === 'main') return 'target branch is main';
  if (!pr.base?.ref || pr.base.repo?.full_name !== repository) return 'invalid target repository';
  if (pr.state !== 'open' || pr.draft) return 'PR is closed or draft';
  if (!pr.head?.repo || pr.head.repo.full_name !== run.head_repository?.full_name ||
      pr.head.ref !== run.head_branch) return 'CI does not belong to this PR head';
  const testedHead = pr.head.sha === run.head_sha;
  const testedMerge = run.event === 'pull_request' && pr.merge_commit_sha === run.head_sha;
  if (!testedHead && !testedMerge) return 'CI commit is no longer current';
  return null;
}

module.exports = async function review({ github, context, core }) {
  const run = context.payload.workflow_run;
  const repository = `${context.repo.owner}/${context.repo.repo}`;
  const messages = [];
  const log = (message) => {
    core.info(message);
    messages.push(message);
  };

  try {
    if (run?.name !== 'CI - Build, Test' || run.status !== 'completed' ||
        run.conclusion !== 'success' || !['push', 'pull_request'].includes(run.event)) {
      log('Skipped: requires a successful completed CI - Build, Test push or pull_request run.');
      return;
    }

    const numbers = new Set((run.pull_requests || []).map((pr) => pr.number));
    // Push runs can have an empty pull_requests array, even when an open PR exists.
    const associated = await github.paginate(
      github.rest.repos.listPullRequestsAssociatedWithCommit,
      { ...context.repo, commit_sha: run.head_sha, per_page: 100 },
    );
    for (const pr of associated) numbers.add(pr.number);
    if (numbers.size === 0) log('Skipped: no PRs associated with the CI commit.');

    for (const pull_number of numbers) {
      const params = { ...context.repo, pull_number };
      const { data: pr } = await github.rest.pulls.get(params);
      const reason = skipReason(pr, run, repository);
      if (reason) {
        log(`#${pull_number}: skipped; ${reason}.`);
        continue;
      }

      const { data: pending } = await github.rest.pulls.listRequestedReviewers(params);
      if (pending.users.some(isCopilot)) {
        log(`#${pull_number}: skipped; a Copilot review is already pending.`);
        continue;
      }
      const reviews = await github.paginate(
        github.rest.pulls.listReviews, { ...params, per_page: 100 },
      );
      if (reviews.some((item) => isCopilot(item.user) &&
          item.commit_id === pr.head.sha && item.state !== 'PENDING')) {
        log(`#${pull_number}: skipped; Copilot already reviewed this commit.`);
        continue;
      }

      // Re-read immediately before the only write operation: retargets and new pushes must not bypass the gates.
      const { data: current } = await github.rest.pulls.get(params);
      const currentReason = skipReason(current, run, repository);
      if (currentReason || current.head.sha !== pr.head.sha ||
          current.base.ref !== pr.base.ref || current.base.sha !== pr.base.sha) {
        log(`#${pull_number}: skipped; ${currentReason || 'PR changed while checking eligibility'}.`);
        continue;
      }
      await github.rest.pulls.requestReviewers({ ...params, reviewers: [REVIEWER] });
      log(`#${pull_number}: requested Copilot review after successful CI.`);
    }
  } finally {
    await core.summary
      .addHeading('CI-gated Copilot code review')
      .addCodeBlock(messages.join('\n') || 'Review request failed; see the step logs.')
      .write();
  }
};
