# 20 — Composability

Can consumers extend the component without forking it?

## Hard rules (CRITICAL)

- The root MUI element must be `forwardRef`'d. A missing `forwardRef` on a Framework-tier component is an instant-kill.
- Rest props must be spread onto the root MUI element (`<MUIX {...rest} ref={ref} />`), so `aria-*`, `data-*`, event handlers, `id`, `className` flow through.
- `sx` must be accepted and merged using MUI's array form so consumer styles do not blow internal styles away.

## High-severity issues (HIGH)

- Internal customisation exposed via bespoke `xxxClassName` / `xxxProps` instead of MUI's `slots` / `slotProps`.
- Hard-coded `className` on the root that consumers cannot override.
- `ref` accepted but dropped before reaching the root.

## Moderate issues (MODERATE)

- A composite that exposes only a subset of slots when the underlying MUI components support more.
- Internal style merge that overrides consumer `sx` instead of layering under it.

## Low issues (LOW)

- `as` / polymorphic rendering not forwarded to the underlying MUI when the underlying MUI supports it.

## Score

- 9–10: forwardRef, sx merged, rest spread, slots exposed.
- 6–8: forwardRef and rest spread present, but slots are bespoke.
- 3–5: missing rest spread, or sx not merged.
- 1–2: missing forwardRef.
- `n/a`: file is not a component.
