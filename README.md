# Telugu Bible Radio

The homepage uses the TBR brand identity from the AIAgents
`.agents\skills\tbr-brand\SKILL.md` skill. Theme tokens live in `src\index.css`:
red `#A30008` for subheadings, buttons, and ordinary links; navy `#1D2659` for
headings and brand backgrounds; green `#0B8237` for navigation links.

All text uses Source Serif 4 with Georgia and serif fallbacks. Noto Serif Telugu
is an additional glyph fallback for Telugu text. Google Fonts supplies both web
fonts; if unavailable, browser fallbacks remain usable. The existing
`src\assets\TBR.png` logo is preserved without alteration.

Run `npm run dev` for local development and `npm run build` for a production build.

Run `npm test` for unit tests. Tests use Vitest with jsdom and load DOM matchers
through `@testing-library/jest-dom/vitest` in `src\setupTests.ts`. The production
build also type-checks the test files.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

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
Output format:

- One short summary comment
- Inline comments only for real issues, each with severity: High / Medium / Low
