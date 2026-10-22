# TeluguBibleRadio_Web
Repo for Telugu Bible Radio Website

## CI-gated Copilot code review

`.github/workflows/ai-code-review.yml` listens for completion of the workflow
named **CI - Build, Test**. Every completion starts the review workflow for
logging and monitoring; only a **successful** push or pull-request CI run can
request a review.

The workflow uses GitHub's native
[Copilot review-request API](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-code-review).
Copilot produces the review overview and inline findings; no external AI API key
or model dependency is needed.

### Eligibility and safeguards

- The PR must be open, ready for review, and target **any branch except `main`**,
  such as `develop` or `feature/integration`. This is the PR's **base** branch,
  not its source branch; a `feature/*` PR targeting `main` is excluded.
- CI must have succeeded for the PR's current head commit, or its current merge
  commit for a `pull_request` CI run. Stale CI runs cannot review newer code.
- PRs are discovered from both the CI payload and commit associations, including
  push-triggered CI runs with an empty PR list.
- Pending Copilot requests and completed Copilot reviews on the same head commit
  suppress duplicate requests on CI reruns.
- The workflow re-fetches the PR immediately before requesting a review, checking
  its target, head, base commit, and open/draft status again.
- Skips are written to the Actions logs and job summary, **not PR comments**.
- Only trusted default-branch workflow code is checked out; PR code is never
  executed by this privileged workflow. Checkout credentials are not persisted.

Copilot runs asynchronously after the guarded API request and publishes its own
comments. The workflow cannot recall a review already started: avoid retargeting
or pushing to a PR while Copilot is reviewing it. Manual Copilot requests and
other automatic-review rules are outside this workflow's control.

### Setup

1. Merge this workflow and its scripts into the repository's default branch.
   GitHub only triggers `workflow_run` listeners that exist there.
2. Ensure the CI workflow exists and has the exact name **CI - Build, Test**,
   with push or pull-request triggers covering the desired source/target
   branches. This change does not add or alter application CI.
3. Enable Copilot code review for the repository and ensure repository/account
   policy and billing allow bot-requested Copilot reviews. The workflow uses
   `GITHUB_TOKEN` with `contents: read` and `pull-requests: write`; no PAT is
   required. API authorization or availability errors fail the Actions step.
4. Disable independent automatic Copilot review rules if **all** automated
   reviews must obey this CI gate and the `main` exclusion.

Run the focused tests with Node.js 24 or later:
`node --test .github/scripts/ai-code-review.test.cjs`.
Tests mock GitHub APIs and never request a real review. The review workflow also
runs these tests before requesting reviews.

## Code Review Guidelines

Focus on correctness bugs and unhandled edge cases, security issues (injection,
secrets, authorization, unsafe deserialization), performance problems in hot
paths, and missing or weak tests for new logic.

Do not comment on formatting, style handled by the linter, or minor naming
preferences. Provide one short summary and inline comments **only for real
issues**, each with severity **High / Medium / Low**.
