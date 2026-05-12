# 30 — Theming

Does the component pull values from the theme, or hard-code them?

## Hard rules (CRITICAL)

- No hard-coded palette-derivable colour. Hex literals (`#1e1e1e`, `#2A2A2A`), `rgb(...)` for palette colours, or named CSS colours bypass `theme.palette` and break light/dark themes.
- No inline `style={}` for themeable values (colour, spacing, border-radius, font size).
- No tailwind classes on a Framework-tier component (the DS does not promise tailwind).

## High-severity issues (HIGH)

- Raw `px` for spacing where `theme.spacing(N)` is the convention.
- Hard-coded border-radius where `theme.shape.borderRadius` is canonical.
- Font size / weight literals instead of `theme.typography.*`.

## Moderate issues (MODERATE)

- Repeated identical style block across components — should be in `theme.components.MuiX.styleOverrides`.
- Consumer-overridable colour expressed via prop instead of palette token.

## Low issues (LOW)

- Theme value used but no fallback for when consumer overrides palette structure.

## Score

- 9–10: every styleable value comes from theme.
- 6–8: one or two raw `px` / one missing palette reference.
- 3–5: HIGH issues present.
- 1–2: any CRITICAL issue.
- `n/a`: component has no styling at all (very rare; usually a sign the file is not a UI component).
