---
status: accepted
date: 2026-08-26
---

# Wrap notistack's SnackbarProvider and own the `snackbar()` verb from the DS

`@telicent-oss/ds` ships a wrapped `SnackbarProvider` that composes `notistack`'s provider with the DS's standard configuration and a private DS-owned content component, plus a `snackbar()` function that accepts a DS-owned `type` union (`success | error | warning | info`) and delegates to `notistack` internally. Consuming apps import `snackbar`, `SnackbarProvider`, and the callsite helpers (`useSnackbar`, `closeSnackbar`, types) from `@telicent-oss/ds` — never directly from `notistack`.

`notistack` sits in `dependencies` (not `peerDependencies`). Apps install `@telicent-oss/ds` and get the snackbar system as part of the DS runtime.

## Why the DS owns this

Two drivers, both active in the app fleet at the time of writing:

**1. The composition IS the DS spec, currently living in app code.**
Five of the six Telicent apps hand-composed `UIThemeProvider` around `notistack`'s `SnackbarProvider` with the same anchor origin (`top-right`), the same `maxSnack` (`3`), and the same custom `ClickDismiss` content component. That is not consumer configuration — it is a shared DS spec, replicated by convention in each app's `main.tsx`.

**2. The per-app `ClickDismiss` implementations had already diverged.**
The templates authored across the apps were not identical. Treating them as the same understated the problem: this is exactly the drift the DS exists to prevent, and it had already happened. Absorbing the wrapped provider into the DS both deletes ~30 lines of composition boilerplate per app and — more importantly — ends the divergence at source.

A third factor, provider ordering: theme must sit outside snackbar so the DS-owned content component can read the palette. Today each app is trusted to nest correctly. Moving both providers under DS ownership moves the invariant inside the package that defines it.

## Decisions

**1. Content component is private, not exported.**
Apps consume `SnackbarProvider` and call `snackbar()` — they never touch the template. Exporting the template would invite apps to re-compose their own provider and reintroduce the drift this ADR exists to end. If a real escape-hatch use case emerges, we add the export then.

**2. Dismiss is an explicit X button, composed into the Alert's `action` slot.**
Replaces the previous "click anywhere on the toast body" behaviour across every type. The X carries `aria-label="Dismiss notification"` and composes with any `action` passed at `snackbar()` time (the `action` renders left of the X). Explicit affordances are more discoverable and accessibility-cleaner than whole-toast click targets.

**3. Uniform auto-hide, 7 seconds.**
All types auto-hide after `autoHideDuration` (default `7000` ms). Chosen over notistack's own `5000` because the DS X provides explicit dismissal — a longer default reads comfortably without stranding forgotten toasts. `notistack` v3 does not support per-variant `persist` at the provider level (`persist` is a per-call option), so per-severity persistence is opt-in per `snackbar()` invocation.

**4. `preventDuplicate: true` is a provider-level DS default.**
Pollers, retry loops, and event handlers commonly emit identical enqueue calls; the DS's opinion is that identical toasts should be suppressed unless a callsite explicitly opts out via `snackbar({ preventDuplicate: false, ... })`.

**5. Curated severity palette.**
DS themes previously inherited MUI's defaults unchanged, which produced two problems in filled Alert rendering:

- `getContrastText` used MUI's default `contrastThreshold` of 3.0 (WCAG AA *large* text), permitting white text at contrast ratios that fail AA normal (4.5:1). Info and warning in light mode were shipping ~3.85:1 and ~3.35:1 — user-visible AA fails against ADR-0001.
- Dark-mode success rendered as bright green with dark text, inconsistent with error's white-on-red visual identity and different from what the fleet had been shipping via ad-hoc component-level hacks.

The DS's severity palette now sets `contrastThreshold: 4.5` on both base palettes, and overrides `success.main` (green[800] `#2e7d32`) and `error.main` (red[700] `#d32f2f`) in the dark palette so `getContrastText` naturally resolves to white — no `MuiAlert` styleOverride required. Palette values are set once in `basePalette.ts`; per-theme overrides remain available for themes that need different severity colours ([[feedback-palette-over-component-overrides]]).

**6. Snackbar content is capped at 320px maxWidth.**
Long messages wrap rather than stretch across the viewport. Matches the previous per-app convention (graph's `NotificationTemplate` had used the same value); prevents `err.message` from producing viewport-wide toasts.

**7. DS owns the enqueue vocabulary via `snackbar({ type, message, ...opts })`.**
Callsites use the DS-owned verb; `notistack`'s `enqueueSnackbar` is not re-exported.

- `type` is a DS-owned union: `"success" | "error" | "warning" | "info"`. Notistack's fifth `"default"` variant is deliberately excluded — every DS snackbar must declare an intent so nothing ships silently rendered as info.
- `snackbar()` delegates to `notistack.enqueueSnackbar` internally, translating `type` → `variant` and forwarding all other options unchanged.
- `SnackbarProvider`'s `Components` map registers the DS Snackbar for `success`/`error`/`warning`/`info` only. If a callsite bypasses `snackbar()` and calls notistack directly with `variant: "default"`, notistack falls back to its unstyled built-in — an honest signal that a `type` is required.

Curated re-exports from `notistack` remain for the vocabulary-neutral helpers apps still need: `useSnackbar`, `closeSnackbar`, and the types `SnackbarKey` and `SnackbarAction`. Anything else stays notistack-side.

## Consequences

- The DS gains an opinionated toast primitive. `@telicent-oss/ds` continues its GOV UK-style "curated, not passthrough" positioning ([[ds-philosophy-no-mui-passthrough]]) — this is wrapped-with-defaults, not a bare re-export of the whole notistack surface.
- Five apps lose ~30 lines each of composition boilerplate; per-app `ClickDismiss` implementations are gone. Existing dismiss UX changes from click-anywhere to X-only across the fleet — deliberate product-level change, flagged in the release notes.
- `notistack` moves to `dependencies`. Apps install `@telicent-oss/ds` and receive the snackbar system as part of the DS runtime — no separate install ask.
- Filled Alert's rendering changes across the DS themes: info and warning in light mode flip from white-on-bright to dark-on-bright (previously failing AA normal, now passing); dark-mode success renders white text on a darker green; dark-mode error preserves red-with-white-text identity via the `error.main` override.
- The silent `default → info` promotion is impossible at the type level; every snackbar declares an explicit intent.
- The DS test-utils should wrap in the new provider on next touch (small one-time follow-up).

## Considered alternatives

**Template-only export** — ship `ClickDismiss` (or equivalent) from the DS; apps continue to author their own `SnackbarProvider` composition. Rejected: leaves the composition — anchor origin, `maxSnack`, `Components` mapping, provider ordering — in app code. The per-app drift this ADR exists to end would continue. Template-only saves ~5 lines per app; whole-thing saves ~30, and it's the ~25 lines that carry the drift risk.

**Ship catalog's success-colour hack verbatim into the DS Snackbar** — port `sx={{ backgroundColor: '#2e7d32', color: '#fff', ... }}` for the `success` variant directly. Rejected: canonising a workaround at the component layer instead of fixing the underlying palette. See [[feedback-palette-over-component-overrides]]. The palette-layer fix in decision 5 achieves the same visual result without the workaround.

**Public content component** — export the DS Snackbar template alongside the provider so apps can compose their own `SnackbarProvider` differently. Rejected as speculative surface. Available as a follow-up if a concrete escape-hatch use case emerges.

**Blanket re-export of the whole `notistack` API from the DS** — expose every symbol notistack ships. Rejected: same reason blanket MUI re-export is rejected ([[ds-philosophy-no-mui-passthrough]]). The curated set in decision 7 is what apps actually need.

**Thin `enqueueSnackbar` re-export instead of a DS-owned `snackbar()`** — pass notistack's verb through unchanged so callsites speak notistack's vocabulary. Rejected: forces the DS to carry two vocabularies (`variant` at the callsite, `severity` inside the content component), requires a `variantToSeverity` translation, and allows notistack's ambiguous `"default"` variant to reach a toast silently as `info`. Owning the verb costs ~15 lines and eliminates all three problems.

**`notistack` as a `peerDependency` (optional)** — force apps to install it themselves. Rejected: the DS owns the API, so making consumers declare notistack in their `package.json` is a leaky abstraction. As a regular `dependency` (still externalised at build time), the package manager auto-installs and apps never learn notistack exists.

## Follow-up work

- **`DSProvider`** — compose `UIThemeProvider` + this wrapped `SnackbarProvider` into a single DS mount. Depends on this ADR shipping first. Separate proposal when the work is picked up.
- **`sideEffects: false` in DS's `package.json`** — enable reliable tree-shaking so apps that never call `snackbar()` don't ship notistack in their bundle. Currently every DS consumer pays the notistack bundle cost (~15kb gzipped) regardless. Tracked as a broader DS-hardening pass, not gated by this ADR.
