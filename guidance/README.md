# ds-police guidance

This directory drives the ds-police scoring agent. Every markdown file here is concatenated into the system context that the scoring agent reads. The hash of the directory is recorded in every sidecar so changes here invalidate prior scores.

## Files

| File | What it covers |
|------|----------------|
| `00-framework-fit.md` | Does the component belong in the design system at all? |
| `10-api-surface.md` | MUI prop conventions, prop aliasing bans, base-prop narrowing |
| `20-composability.md` | `forwardRef`, `sx`, `slots` / `slotProps`, rest spread |
| `30-theming.md` | theme-derived values; bans on hard-coded palette / spacing |
| `40-types.md` | TypeScript precision; no `any` |
| `50-docs.md` | Storybook + unit-test expectations |
| `60-necessity.md` | Pass-through wrappers; theme-config alternatives |
| `weights.yml` | Section weights and blocking thresholds |

## Severity definitions

`CRITICAL` — instant-kill. Must never ship. MUI prop aliasing, narrowed base prop surface, missing `forwardRef`, business logic in a presentational component, hard-coded palette-derivable colour.

`HIGH` — serious but not instant-kill. Bespoke `xxxProps` where `slotProps` is canonical, inline `style={}` for themeable values, single-caller component misplaced in Framework tier.

`MODERATE` — should fix. Partial Storybook coverage, minor type imprecision, sub-metric omission.

`LOW` — nit. Missing tsdoc, inconsistent naming within file.

## Editing

Any change to a `*.md` file or `weights.yml` bumps the recorded guidance/weights hash. Next `ds-police score` (or `score --guidance-dirty`) will re-evaluate every enrolled file against the new rules.
