# 00 — Framework fit

Does this component belong in the shared design system at all, or is it product/app/feature code that escaped into a shared library?

## Framework-grade signals

- Generic UI name (`Button`, `TextField`, `Dialog`, `Menu`).
- Wraps exactly one MUI component or composes a small number with clear, justified composition.
- No knowledge of any specific Telicent app, product, or business concept.
- Reusable in any consuming app without modification.
- Has at least one realistic alternate consumer in mind.

## Bespoke / candidate signals (NOT Framework)

- Name encodes a feature: `AppSwitch`, `UserProfile`, `AppChrome`, `CopyToClipboard`.
- Embeds a brand asset, product logo, version string, or beta badge.
- Owns a React Context that only one app will ever mount.
- Wraps several unrelated MUI components plus app state.
- Performs business logic in render (Zod, fetching, URL construction, clipboard).
- Has only one known caller across the whole org.

## Severity mapping

- `CRITICAL` — render-time business validation (Zod, schema parsing); side-effects in a presentational component (clipboard, fetch, URL open).
- `HIGH` — single-caller bespoke component shipped in the Framework barrel; product/app branding embedded in a generic-named component.
- `MODERATE` — composition wraps several MUI components without a clear name for the composite primitive.
- `LOW` — name is generic but the implementation is tied to one product flow.

## Score

- 9–10: clear DS primitive, clean abstraction, multiple plausible consumers.
- 6–8: DS-shaped but with one app-specific assumption.
- 3–5: at least one of the bespoke signals above is present.
- 1–2: this is product code, not a DS primitive.
- `n/a`: only when the file is not actually a component (e.g. a constants file).
