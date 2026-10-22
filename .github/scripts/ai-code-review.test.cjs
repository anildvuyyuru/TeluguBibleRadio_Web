const { test } = require('node:test');
const assert = require('node:assert/strict');
const review = require('./ai-code-review.cjs');

const repository = 'owner/repo';
const bot = { login: 'copilot-pull-request-reviewer[bot]', type: 'Bot' };

function fixture({ run = {}, pr = {}, current, reviews = [], pending = [],
  associated = [{ number: 1 }] } = {}) {
  const pull = {
    number: 1,
    state: 'open',
    draft: false,
    head: { ref: 'feature/source', sha: 'head-sha', repo: { full_name: repository } },
    base: { ref: 'develop', sha: 'base-sha', repo: { full_name: repository } },
    merge_commit_sha: 'merge-sha',
    ...pr,
  };
  const calls = [];
  const logs = [];
  let reads = 0;
  const github = {
    rest: {
      repos: { listPullRequestsAssociatedWithCommit: 'associated' },
      pulls: {
        get: async () => ({ data: reads++ === 0 ? pull : (current || pull) }),
        listRequestedReviewers: async () => ({ data: { users: pending } }),
        listReviews: 'reviews',
        requestReviewers: async (params) => calls.push(params),
      },
    },
    paginate: async (method) => {
      calls.push(method);
      return method === 'associated' ? associated : reviews;
    },
  };
  const summary = {
    addHeading: () => summary,
    addCodeBlock: (text) => { summary.text = text; return summary; },
    write: async () => { summary.written = true; },
  };
  const context = {
    repo: { owner: 'owner', repo: 'repo' },
    payload: { workflow_run: {
      name: 'CI - Build, Test',
      status: 'completed',
      conclusion: 'success',
      event: 'push',
      head_sha: 'head-sha',
      head_branch: 'feature/source',
      head_repository: { full_name: repository },
      pull_requests: [],
      ...run,
    } },
  };
  return {
    calls, logs, summary, pull,
    execute: () => review({ github, context, core: { info: (text) => logs.push(text), summary } }),
    requests: () => calls.filter((call) => typeof call === 'object'),
  };
}

test('main is excluded based on the target, not the feature source branch', async () => {
  const f = fixture({ pr: { base: { ref: 'main', repo: { full_name: repository } } } });
  await f.execute();
  assert.deepEqual(f.requests(), []);
  assert.match(f.logs.join('\n'), /target branch is main/);
  assert.ok(f.summary.written);
});

for (const branch of ['develop', 'feature/integration', 'Main']) {
  test(`successful CI allows target ${branch}`, async () => {
    const f = fixture({ pr: {
      base: { ref: branch, sha: 'base-sha', repo: { full_name: repository } },
    } });
    await f.execute();
    assert.deepEqual(f.requests(), [{
      owner: 'owner', repo: 'repo', pull_number: 1, reviewers: [bot.login],
    }]);
  });
}

for (const branch of ['main', 'develop', 'feature/integration']) {
  for (const conclusion of ['failure', 'cancelled', 'skipped', 'timed_out', null]) {
    test(`${conclusion} CI never requests review for ${branch}`, async () => {
      const f = fixture({
        run: { conclusion },
        pr: { base: { ref: branch, repo: { full_name: repository } } },
      });
      await f.execute();
      assert.deepEqual(f.calls, []);
      assert.ok(f.summary.written);
    });
  }
}

for (const run of [
  { name: 'Unrelated CI' },
  { status: 'in_progress' },
  { event: 'workflow_dispatch' },
  { head_sha: 'old-sha' },
  { head_branch: 'other-branch' },
  { head_repository: { full_name: 'other/repo' } },
]) {
  test(`rejects unrelated or stale CI: ${JSON.stringify(run)}`, async () => {
    const f = fixture({ run });
    await f.execute();
    assert.deepEqual(f.requests(), []);
  });
}

test('PR CI on the current merge commit is accepted', async () => {
  const f = fixture({ run: { event: 'pull_request', head_sha: 'merge-sha' } });
  await f.execute();
  assert.equal(f.requests().length, 1);
});

test('a push run cannot claim the PR merge commit', async () => {
  const f = fixture({ run: { head_sha: 'merge-sha' } });
  await f.execute();
  assert.deepEqual(f.requests(), []);
});

for (const pr of [
  { state: 'closed' },
  { draft: true },
  { base: { ref: 'develop', repo: { full_name: 'other/repo' } } },
  { base: {} },
  { head: { repo: null } },
]) {
  test(`skips ineligible PR: ${JSON.stringify(pr)}`, async () => {
    const f = fixture({ pr });
    await f.execute();
    assert.deepEqual(f.requests(), []);
  });
}

test('no associated PR is a logged no-op', async () => {
  const f = fixture({ associated: [] });
  await f.execute();
  assert.deepEqual(f.requests(), []);
  assert.match(f.summary.text, /no PRs associated/);
});

test('PRs supplied by the CI event are used and deduplicated', async () => {
  const f = fixture({ run: { pull_requests: [{ number: 1 }, { number: 1 }] } });
  await f.execute();
  assert.equal(f.requests().length, 1);
});

test('pending review suppresses duplicate requests', async () => {
  const f = fixture({ pending: [bot] });
  await f.execute();
  assert.deepEqual(f.requests(), []);
});

test('completed Copilot review suppresses reruns for the same head', async () => {
  const f = fixture({ reviews: [{ user: bot, commit_id: 'head-sha', state: 'COMMENTED' }] });
  await f.execute();
  assert.deepEqual(f.requests(), []);
});

test('reviews on older commits or by humans do not suppress new Copilot reviews', async () => {
  const f = fixture({ reviews: [
    { user: bot, commit_id: 'old-sha', state: 'COMMENTED' },
    { user: { login: 'person', type: 'User' }, commit_id: 'head-sha', state: 'COMMENTED' },
  ] });
  await f.execute();
  assert.equal(f.requests().length, 1);
});

for (const change of ['main', 'head', 'base', 'closed']) {
  test(`rechecks before requesting when PR changes: ${change}`, async () => {
    const f = fixture();
    const current = structuredClone(f.pull);
    if (change === 'main') current.base.ref = 'main';
    if (change === 'head') current.head.sha = 'new-sha';
    if (change === 'base') current.base.sha = 'new-base-sha';
    if (change === 'closed') current.state = 'closed';
    const changed = fixture({ current });
    await changed.execute();
    assert.deepEqual(changed.requests(), []);
  });
}
