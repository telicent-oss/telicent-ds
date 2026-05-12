# 60 — Necessity

Should this component exist as a component at all?

## Hard rules (CRITICAL)

None — this axis penalises but does not block on its own.

## High-severity issues (HIGH)

- Pass-through wrapper around a single MUI component that adds nothing (`IconButton`, `Paper`, `Spinner`, `LinearProgress`, `Skeleton`, `FlexBox`). Consumers should import MUI directly.
- Wrapper exists solely to lock a `variant` / `color` default. That belongs in `theme.components.MuiX.variants` or `defaultProps`.
- Two or more sibling components do roughly the same thing (`SearchBox`, `MiniSearchBox`, `MiniSearchAutocomplete`).

## Moderate issues (MODERATE)

- Wrapper that exists mainly to rename a prop without adding behaviour.
- Wrapper that adds a `maxWidth` prop that consumers could just set via `sx`.

## Low issues (LOW)

- Component name shadows MUI's name and the only behavioural difference is one defaulted prop.

## Score

- 9–10: clearly necessary; adds real composition or API value MUI does not provide.
- 6–8: marginal; one or two MODERATE issues.
- 3–5: one HIGH redundancy issue.
- 1–2: pure pass-through with no API value.
- `n/a`: file is not a component.
