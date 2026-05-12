# 40 — Types

How precise is the TypeScript surface?

## Hard rules (CRITICAL)

- No `any`. (User memory: `feedback_no_any`.) `unknown` at boundaries is fine; `any` is not.
- Generics on the underlying MUI component must be preserved when wrapping (e.g. `Autocomplete<T>` must surface `T` to consumers, not collapse to `unknown`).

## High-severity issues (HIGH)

- Discriminated unions flattened into a single optional bag (loses type narrowing in consumers).
- `Omit` used to remove props that the wrapper still forwards — tells the type system a lie.
- Public props that should be required marked optional (or vice versa).

## Moderate issues (MODERATE)

- Loose types on internal helpers that leak into the public surface.
- Missing `readonly` on array props that are not mutated.

## Low issues (LOW)

- Minor type-name inconsistency with MUI conventions.

## Score

- 9–10: precise types, generics preserved, no `any`.
- 6–8: one moderate issue.
- 3–5: discriminated union flattened, or generic collapsed.
- 1–2: any `any`, or `Omit` lying about forwarding.
- `n/a`: pure JSX with no types.
