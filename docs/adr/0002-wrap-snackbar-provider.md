---
status: accepted
date: 2026-08-26
---

# Wrap notistack's SnackbarProvider and re-export the callsite verbs from the DS

`@telicent-oss/ds` ships a wrapped `SnackbarProvider` that composes `notistack`'s provider with the DS's standard configuration and a private DS-owned content component, and re-exports the callsite verbs (`enqueueSnackbar`, `closeSnackbar`, `useSnackbar` and the types apps use) so consuming apps import everything snackbar-adjacent from `@telicent-oss/ds` — never directly from `notistack`.

`notistack` sits in `peerDependencies` (optional). Apps that don't use snackbars install neither and pay nothing.

## Why the DS owns this

Two drivers, both active in the app fleet at the time of writing:

**1. The composition IS the DS spec, currently living in app code.**
Five of the six Telicent apps hand-composed `UIThemeProvider` around `notistack`'s `SnackbarProvider` with the same anchor origin (`top-right`), the same `maxSnack` (`3`), and the same custom `ClickDismiss` content component. That is not consumer configuration — it is a shared DS spec, replicated by convention in each app's `main.tsx`.

**2. The per-app `ClickDismiss` implementations had already diverged.**
The templates authored across the apps were not identical. Treating them as the same understated the problem: this is exactly the drift the DS exists to prevent, and it had already happened. Absorbing the wrapped provider into the DS both deletes ~30 lines of composition boilerplate per app and — more importantly — ends the divergence at source.

A third factor, provider ordering: theme must sit outside snackbar so the DS-owned content component can read the palette. Today each app is trusted to nest correctly. Moving both providers under DS ownership moves the invariant inside the package that defines it.

## Decisions

**1. Content component is private, not exported.**
Apps consume `SnackbarProvider` and call `enqueueSnackbar` — they never touch the template. Exporting the template would invite apps to re-compose their own provider and reintroduce the drift this ADR exists to end. If a real escape-hatch use case emerges, we add the export then.

**2. Dismiss is an explicit X button, composed into the Alert's `action` slot.**
Replaces the previous "click anywhere on the toast body" behaviour across every variant. The X carries `aria-label="Dismiss notification"` and composes with any callsite-supplied `action` (callsite action renders left of the X). Explicit affordances are more discoverable and accessibility-cleaner than whole-toast click targets.

**3. Uniform auto-hide, 7 seconds.**
All variants auto-hide after `autoHideDuration` (default `7000` ms). Chosen over notistack's own `5000` because the DS X provides explicit dismissal — a longer default reads comfortably without stranding forgotten toasts. `notistack` v3 does not support per-variant `persist` at the provider level (`persist` is a per-`enqueueSnackbar`-call option), so per-severity persistence is opt-in per call.

**4. `preventDuplicate: true` is a provider-level DS default.**
Pollers, retry loops, and event handlers commonly emit identical enqueue calls; the DS's opinion is that identical toasts should be suppressed unless a callsite explicitly opts out via `enqueueSnackbar({ preventDuplicate: false })`.

**5. Curated severity palette.**
DS themes previously inherited MUI's defaults unchanged, which produced two problems in filled Alert rendering:

- `getContrastText` used MUI's default `contrastThreshold` of 3.0 (WCAG AA *large* text), permitting white text at contrast ratios that fail AA normal (4.5:1). Info and warning in light mode were shipping ~3.85:1 and ~3.35:1 — user-visible AA fails against ADR-0001.
- Dark-mode success rendered as bright green with dark text, inconsistent with error's white-on-red visual identity and different from what the fleet had been shipping via ad-hoc component-level hacks.

The DS's severity palette now sets `contrastThreshold: 4.5` on both base palettes, and overrides `success.main` (green[800] `#2e7d32`) and `error.main` (red[700] `#d32f2f`) in the dark palette so `getContrastText` naturally resolves to white — no `MuiAlert` styleOverride required. Palette values are set once in `basePalette.ts`; per-theme overrides remain available for themes that need different severity colours ([[feedback-palette-over-component-overrides]]).

**6. Snackbar content is capped at 320px maxWidth.**
Long messages wrap rather than stretch across the viewport. Matches the previous per-app convention (graph's `NotificationTemplate` had used the same value); prevents `err.message` from producing viewport-wide toasts.

**7. Curated notistack re-exports from `@telicent-oss/ds`.**
Prod apps import everything snackbar-adjacent — provider, verbs, types — from `@telicent-oss/ds`. Never from `notistack` directly. This is the same shape as the MUI curated-growth direction the DS is moving toward: not a blanket re-export of the underlying library, but a deliberate list of what apps actually need.

Re-exported today: `SnackbarProvider` (wrapped), `enqueueSnackbar`, `closeSnackbar`, `useSnackbar`, plus types `SnackbarKey`, `SnackbarAction`, `SnackbarOptions` (aliasing notistack's `OptionsObject`), `SnackbarVariant` (aliasing `VariantType`). Anything outside this list stays notistack-side. `import { enqueueSnackbar } from "notistack"` still resolves for genuine escape-hatch scenarios (Storybook, tests, one-off custom composition).

## Consequences

- The DS gains an opinionated toast primitive. `@telicent-oss/ds` continues its GOV UK-style "curated, not passthrough" positioning ([[ds-philosophy-no-mui-passthrough]]) — this is wrapped-with-defaults, not a bare re-export of the whole notistack surface.
- Five apps lose ~30 lines each of composition boilerplate; per-app `ClickDismiss` implementations are gone. Existing dismiss UX changes from click-anywhere to X-only across the fleet — deliberate product-level change, flagged in the release notes.
- `notistack` is now a peerDependency (optional). Apps must install it themselves in `package.json`; pnpm surfaces missing peers as install-time warnings. Apps that don't use snackbars install neither and pay nothing.
- Filled Alert's rendering changes across the DS themes: info and warning in light mode flip from white-on-bright to dark-on-bright (previously failing AA normal, now passing); dark-mode success renders white text on a darker green; dark-mode error preserves red-with-white-text identity via the `error.main` override.
- The DS test-utils should wrap in the new provider on next touch (small one-time follow-up).

## Considered alternatives

**Template-only export** — ship `ClickDismiss` (or equivalent) from the DS; apps continue to author their own `SnackbarProvider` composition. Rejected: leaves the composition — anchor origin, `maxSnack`, `Components` mapping, provider ordering — in app code. The per-app drift this ADR exists to end would continue. Template-only saves ~5 lines per app; whole-thing saves ~30, and it's the ~25 lines that carry the drift risk.

**Ship catalog's success-colour hack verbatim into the DS Snackbar** — port `sx={{ backgroundColor: '#2e7d32', color: '#fff', ... }}` for the `success` variant directly. Rejected: canonising a workaround at the component layer instead of fixing the underlying palette. See [[feedback-palette-over-component-overrides]]. The palette-layer fix in decision 5 achieves the same visual result without the workaround.

**Public content component** — export the DS Snackbar template alongside the provider so apps can compose their own `SnackbarProvider` differently. Rejected as speculative surface. Available as a follow-up if a concrete escape-hatch use case emerges.

**Blanket re-export of the whole `notistack` API from the DS** — expose every symbol notistack ships. Rejected: same reason blanket MUI re-export is rejected ([[ds-philosophy-no-mui-passthrough]]). The curated set in decision 7 is what apps actually need.

**Keep `enqueueSnackbar` imports on `notistack` directly** — DS only exports the provider; callsites import verbs from `notistack`. Rejected once the direction of prod apps importing everything from `@telicent-oss/ds` (the same shape being applied to MUI) was locked in. Consistency across the DS's public boundary matters.

## Follow-up work

- **`DSProvider`** — compose `UIThemeProvider` + this wrapped `SnackbarProvider` into a single DS mount. Depends on this ADR shipping first. Separate proposal when the work is picked up.
- **`AppInfoPopover` / DS's `test-utils` wrap** — small hygiene items tracked separately.
