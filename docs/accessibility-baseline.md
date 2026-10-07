# Accessibility baseline — 2026-10-07

A snapshot of the current axe-core failures across all Storybook stories,
produced by `yarn test:a11y`. Companion to [`accessibility.md`](./accessibility.md),
which carries the policy; this file is the punch list.

## How to regenerate

```sh
yarn storybook        # terminal 1
yarn test:a11y        # terminal 2 — writes a11y-report/index.html
open a11y-report/index.html
```

See `test-runner-jest.config.cjs` for the Jest reporter config and
`.storybook/preview.tsx` for the axe rule set (WCAG 2.2 AA +
`best-practice`, with story-isolation false-positives disabled).

## Baseline totals

| Category                              | Count |
|---------------------------------------|------:|
| Story files passing                   | 47    |
| Story files failing                   | 24    |
| Real axe violations                   | **34** |
| Story runtime crashes (not a11y)      | 11    |

Excludes `UserProfile` stories — those are fixed in [#564](https://github.com/telicent-oss/telicent-ds/pull/564) (TELFE-1721).

---

## Tier 1 — DS wrapper fixes, biggest leverage (16 of 34)

Fixing a small number of wrappers clears nearly half the a11y debt.

### `label` × 14

MUI's bare `<input type="checkbox">` has no accessible name. Covers:

- `LabeledSwitch` × 6 — `Basic`, `WithSubtext`, `WithHelperText`, `ErrorState`, `Disabled`, `LongContent`
- `Switch` × 4 — `Default`, `Disabled`, `NoLabel`, `ExampleWithOnChange`
- `Checkbox` × 3 — `Disabled`, `WithNoLabel`, `ExampleWithOnChange`
- `Tabs KeepMounted` × 1 — the panel's demo `<textarea>`

**Fix**: `Switch` and `Checkbox` wrappers should require a `label` prop (or `aria-label` as an escape hatch) and apply it to the underlying input. Likely clears 10+ with two wrapper changes.

### `aria-progressbar-name` × 2

- `LinearProgress Basic`
- `MiniSearchBox Loading` — uses an inner progress indicator

**Fix**: Same pattern we applied to `Spinner` — default `aria-label="Loading"` on the `LinearProgress` wrapper, spread props last so callsites can override.

---

## Tier 2 — Palette / theme contrast (11)

`color-contrast` × 11, across:

- `Popper AsTypeahead`
- `Tabs KeepMounted`
- `Drawer CustomWidth`
- `FlexGrid` × 3 — `BasicColumns`, `Rows`, `MainDetailLayout`
- `Alert LightModeThemingCheck`
- `FloatingPanel.DraggablePanel ResizeBaseline`
- `ErrorFallback CustomNameAndStyle`
- `Box AsSemanticElement`, `Box FlexRow`

**Approach**: walk each case, categorise by theme/mode vs sx choice. Likely 2–3 shared root causes once inspected. Some stories pass colour via `sx` and are independent of the DS palette work; others may trace back to the GraphOrange known trade-off documented in [`src/theme/colors/GraphOrange.ts`](../src/theme/colors/GraphOrange.ts).

---

## Tier 3 — Single-story / small fixes (7)

| Rule                           | Story                                 | Fix |
|--------------------------------|---------------------------------------|-----|
| `empty-heading` × 2            | `AppBar WithNoBrand`, `AppBar StandardHeader` | Guard the heading render on `appName` — same shape as the `fullName` guard in UserProfile |
| `aria-allowed-attr` × 1        | `Popper AsTypeahead`                  | `aria-controls` on the input while the listbox is closed. Make conditional on `open` |
| `heading-order` × 1            | `auth-flow LoginCurrentWindow`        | H2 before H1 |
| `scrollable-region-focusable` × 1 | `Table StickyHeader`               | Scroll container needs `tabIndex={0}` |
| `aria-input-field-name` × 1    | `Select WithNoLabel`                  | Expected failure (demos the no-label state). Opt out via `parameters: { a11y: { test: 'off' } }` + comment |
| `image-alt` × 1                | `FixedPanel Demo`                     | Add `alt` to the demo image |
| `button-name` × 1              | `Map ToggleMap`                       | Unlabelled icon button, add `aria-label` |
| `aria-required-parent` × 1     | `MenuItem Basic`                      | Rendered without a `role="menu"` parent in the story; wrap in menu context |

---

## Tier 4 — Not a11y, pre-existing story crashes (11)

These stories throw runtime errors before axe runs. Not actionable as a11y work — track separately.

- `Map/composites/BasicMapV2` × 4 — `allArgs`, `Empty`, `Template`, `FeatureEvents` — all throw `Cannot read properties of undefined (reading 'get')`
- `auth-flow LoginWithPopup` — "Execution context destroyed" (story navigates)
- `Toolbar Example`, `Theme/App Shell AppShell`, `Popper Default`, `Tabs Default`, `Checkbox Default`, `SearchBox Example play-test` — likely test-runner timing / interaction issues; worth re-running to confirm they're reproducible rather than flaky

---

## Recommended order

1. **Switch + LabeledSwitch + Checkbox** `label` wrappers → clears 13.
2. **`LinearProgress` default `aria-label`** → clears 2.
3. **`AppBar` empty-heading guard on `appName`** → clears 2.
4. **Tier 3 one-offs** — ~10–30 lines across 7 stories/components, bundle into one focused PR.
5. **Palette contrast review** — walk the 11 cases, categorise, decide fix-at-palette vs fix-at-story vs documented trade-off.
6. **Tier 4 story crashes** — separate from a11y work; `BasicMapV2` is a real bug worth filing.

**Expected outcome**: steps 1–3 close ~18 of 34 real violations with roughly 20–30 lines of DS code.

---

## Coverage gap

`test:a11y` only runs on components that have stories. From
[`src/story-coverage.test.ts`](../src/story-coverage.test.ts) there are **~22
real UI components without stories** (TreeView, SearchAutocomplete,
SearchAutocompleteDialog, AuthModal, Callback, AppChrome, and others).
Any a11y issues inside those components are invisible to this baseline.
Worth a follow-up to add stories for the interactive ones before counting
the baseline closed.
