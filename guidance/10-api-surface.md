# 10 — API surface

Does the component honour MUI prop conventions?

## Hard rules (CRITICAL)

- Never alias a standard MUI prop. Renaming `variant` → `style`, `color` → `tone`, `size` → `density` is an instant-kill.
- Never narrow the base MUI prop surface via `Omit<XProps, "variant" | "color">` or by failing to spread rest props onto the root.
- Always extend the underlying MUI props type — `type Props = MUIXProps & { ... }`.

## High-severity issues (HIGH)

- Custom `xxxProps` / `xxxClassName` props instead of MUI's canonical `slotProps` / `slots`.
- Locking a MUI variant or color when there is no behavioural reason — that belongs in `theme.components.MuiX.variants` or `defaultProps`.
- Re-inventing prop names that MUI already standardises (`disabled`, `onClick`, `id`).

## Moderate issues (MODERATE)

- Adding optional helper props (e.g. `errorText` aliasing `helperText` while `error=true`) without making them additive — the MUI prop must still work.
- Inconsistent prop casing relative to MUI conventions.

## Low issues (LOW)

- Tsdoc missing on a non-obvious prop.
- Documented prop name does not match the actual prop.

## Score

- 9–10: full MUI prop surface preserved; new props are purely additive and follow MUI naming.
- 6–8: minor naming drift or one missing slot equivalent.
- 3–5: at least one HIGH issue.
- 1–2: a CRITICAL aliasing or narrowing.
- `n/a`: the file does not export a component at all.
