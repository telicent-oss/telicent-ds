# Accessibility

`@telicent-oss/ds` targets **WCAG 2.2 AA**. This document describes what that commitment means in practice, how a11y is tested, and where the known gaps are.

See also [ADR-0001](./adr/0001-wcag-2.2-aa.md) for the full rationale behind the target level.

## What we conform to

- **WCAG 2.2 AA** for every published component.
- Rule set: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`, plus axe's `best-practice` tag.

## What we don't target

- **AAA is not a system-wide target.** Individual AAA criteria are adopted opportunistically where cheap (e.g. strong focus indicators approximating 2.4.13). Others are intentionally out of scope — most notably 1.4.6 Enhanced Contrast (7:1) conflicts with the brand palette. See ADR-0001 for detail.

## How a11y is tested

`@storybook/addon-a11y` is installed and configured globally. When you open any story in Storybook, the **Accessibility** panel runs axe-core against the rendered component and reports violations with severity, rule id, and remediation guidance.

**There is no CI gate.** Violations are advisory. It is each contributor's responsibility to:

- Check the a11y panel when authoring a new story or modifying an existing one.
- Fix critical/serious violations before merging where reasonable.
- If a violation is intentional (e.g. an isolated component missing a landmark that only makes sense in application context), opt out at the story level:

  ```ts
  export const MyStory: Story = {
    parameters: {
      // Reason for opt-out — required.
      a11y: { test: 'off' },
    },
  };
  ```

  A comment explaining *why* is required; it will be looked at during PR review.

Storybook's noise rules for isolated components (`landmark-one-main`, `region`, `html-has-lang`, `document-title`, `page-has-heading-one`, `landmark-no-duplicate-main`) are disabled globally in `.storybook/preview.tsx` — they are not meaningful for a story rendering.

## Triage cadence

- **One-off audit after each significant release** — walk the a11y panel across all stories, ticket findings, decide fix-now vs deferred vs won't-fix.
- **PR review discipline** — reviewers open the a11y panel for stories touched by a PR; new violations must be either fixed or explicitly justified in the PR description.

## Known gaps

Kept honest so consumers with strict a11y requirements can make informed choices.

| Component / area | Issue | Status |
|---|---|---|
| `MapToggleButtonPresentational` | Contains a `<button>` nested inside another `<button>` (invalid HTML) and an unlabelled inner `IconButton`. | Deferred — see TODO comment in the file. |
| Colour contrast in themes | Not automatically checked in the Storybook a11y panel's default rules for every theme × mode combination. Consumers targeting AAA (7:1) should verify their chosen theme/mode manually. | Ongoing — Chromatic provides partial visual coverage. |
| Focus obscuration (WCAG 2.2 SC 2.4.11) | Automated a11y tooling cannot detect focus being visually obscured by other layered content. | Manual verification during PR review for `Drawer`, `Menu`, `Modal`-style components. |
| Dragging alternatives (WCAG 2.2 SC 2.5.7) | Components using `react-rnd` (e.g. `FloatingPanel`) must provide a non-drag path. | Manual verification when introducing draggable behaviour. |

## Reporting a11y bugs

File an issue in the repo with:
- Component and story name.
- Rule id from the a11y panel (e.g. `button-name`).
- Impact level (critical / serious / moderate / minor).
- Screenshot of the a11y panel or copy of the report.

## Escalation path (future)

The current advisory-only setup is deliberately a starting point. Escalation is additive:

1. **Add a CI report artifact.** Install `@storybook/addon-vitest`, run stories through the Vitest runner as part of CI, publish the a11y report as an artifact per PR. Non-blocking.
2. **Flip to blocking CI.** Change `parameters.a11y.test` from advisory to `'error'`. New violations fail the build.

No decision has been made on when — or whether — to take these steps.

### Prior attempt at Step 1 — deferred (TELFE-1593)

An attempt was made in TELFE-1593 to install `@storybook/addon-vitest` and run stories through Vitest's browser-mode Playwright runner. It was reverted because the DS's transitive dependency tree isn't Vitest-browser-mode-safe. Summary for future work:

**Root cause.** `ol@10.8.0` (OpenLayers) and `maplibre-gl@3.6.2` are listed as direct `dependencies` in `package.json`. `ol` transitively pulls in `geotiff` → `web-worker`. All three packages ship `exports` maps with separate Node / browser / ESM entries and rely on the build tool to negotiate conditions. Vitest's Rolldown-based dep optimizer does *not* set the `browser` condition automatically, so these packages resolve to their Node entries and fail in Chromium with:

- `process is not defined` from `ol_source.js`
- `process.cwd is not a function` from `web-worker/src/node/index.js`
- CJS/ESM interop errors from `@mui/system/colorManipulator.js` when resolve conditions were manipulated

**Why standard fixes didn't stick.**

- Adding a `process.env` shim just moved the failure to the next Node-ism.
- Forcing `resolve.conditions: ["browser", ...]` broke MUI's CJS/ESM interop.
- Vitest's `test.exclude` (file-path filter) doesn't help — the dep optimizer scans every file matching the Storybook `stories` glob, regardless of what runs.
- The `storybookTest` plugin's `tags.skip` doesn't help either — tags are read *after* the story file is imported, and importing a Map story is what triggers the crash.
- `optimizeDeps.exclude` for the offending packages advanced past OL but exposed the next layer (maplibre-gl default-export mismatch).

**What would make automated Vitest coverage viable.** Any of:

1. **Split the DS.** Move `ol`, `maplibre-gl`, `geotiff`, `web-worker`, `mapbox-gl`, `react-map-gl`, `ol-mapbox-style` out of the main package's direct `dependencies`. Options: peer-dependencies (consumers install if using Map), an optional-dep flag, or a separate `@telicent-oss/ds-map` sub-package. Would also cut ~44 MB of transitive weight for consumers who don't use Map (a bundle-size win independent of a11y).
2. **Maintain a Vitest-specific Storybook config directory.** A separate `.storybook-vitest/main.ts` with a narrower `stories` glob that excludes Map / InsetInMap. Kept in sync with the main config manually. Fragile.
3. **Fix the offending packages' resolution.** Layered `optimizeDeps.exclude` + package-specific aliases + shims. Possible but each new dep is a fresh archaeology dig.

Option 1 is the right long-term fix. It's a bigger piece of work but pays off in multiple ways (bundle size, install footprint, testability, dependency-boundary discipline). Recommend that as the follow-up ticket rather than options 2 or 3.

**What did land in TELFE-1593.** `@storybook/addon-a11y` (visual panel only), 2.2 AA config, WCAG policy in [ADR-0001](./adr/0001-wcag-2.2-aa.md), and six `aria-label` fixes in existing primitives. See PR description for the full change set.
