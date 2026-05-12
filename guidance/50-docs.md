# 50 — Docs and tests

Is the component visible to consumers via Storybook + unit test?

## Hard rules

There are no CRITICAL rules at this axis — docs and tests gate review, not push.

## High-severity issues (HIGH)

- No Storybook story at all for a Framework-tier component.
- No unit test of the public API.

## Moderate issues (MODERATE)

- Storybook covers happy-path only; no `error` / `disabled` / variant stories.
- Test asserts implementation detail (specific class names, internal call ordering) instead of public behaviour.

## Low issues (LOW)

- Missing tsdoc on public props.
- Story has no Figma link / no description.

## Score

- 9–10: full Storybook coverage per variant + unit tests covering the documented API + tsdoc on public props.
- 6–8: stories present but partial; tests cover public API.
- 3–5: stories or tests missing.
- 1–2: both stories and tests missing.
- `n/a`: file is not a component.
