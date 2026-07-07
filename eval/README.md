# llms.txt outcome eval

The unit tests in `scripts/__tests__` prove the generator extracts props and
stories correctly. They do not prove the thing that matters: that a coding agent
given the generated `llms-full.txt` writes **DS-correct** code. This eval does.

## What it measures

A handful of realistic "build X with the DS" tasks (`tasks.mjs`), each handed to
an agent in two conditions:

- **with-doc** — the agent's only context is the generated `llms-full.txt`.
- **no-doc** — the agent has no doc, only its own knowledge of a MUI-based lib.

Each answer is scored on two axes by `score.mjs`:

- **compiles** — typechecked against the real DS types (`dist/export.d.ts`, via
  the `paths` map in `tsconfig.eval.json`). Zero errors means it imports real
  exports and passes valid props. This is what catches hallucinated components
  and props.
- **usage** — DS-specific checks (the `variant` union, `errorText`, the composed
  `AppBar`) that a generic-MUI answer fails even when it compiles.

The checks are chosen so the correct answer differs from plain MUI: a with-doc
vs no-doc gap measures the **doc's** value, not the model's React fluency.

## Running it

The candidate-generation step needs a model, so this is an on-demand eval, not a
CI gate. `candidates/` and `results/` are gitignored.

1. `yarn build && yarn generate:llms` — produce `llms/llms-full.txt`.
2. For each task in `tasks.mjs`, ask a coding agent to write the file. Give the
   with-doc agent only `llms/llms-full.txt`; give the no-doc agent nothing. Save
   each answer to `eval/candidates/<taskId>.<condition>.tsx`
   (e.g. `appbar.withdoc.tsx`, `appbar.nodoc.tsx`).
3. `node eval/score.mjs` — prints per-candidate compile/usage and a summary by
   condition.

To inspect raw type errors by hand: `npx tsc -p eval/tsconfig.eval.json`.

## Latest run (2026-06-18, one sampling — model output varies)

4 tasks (Button, TextField, Select, AppBar), Claude agents:

| condition | compiles | usage |
|-----------|----------|-------|
| no-doc    | 2/4      | 4/12  |
| with-doc  | 3/4      | 10/12 |

The doc raised compile rate and roughly doubled idiomatic usage. Concrete misses
the doc prevented: no-doc AppBar invented five non-existent components
(`AppHeaderBar`, `TelicentLogo`, `MenuButton`, `UserAccountMenu`, `AppName`);
no-doc Select used `<MenuItem>` children plus a fake `SelectChangeEvent` export.

AppBar also exposed a doc gap and its fix. With the props-only doc, the agent
missed the required `startChild`/`AppSwitch` composition (usage 4/6, one type
error). Adding the blessed-method composition to the `AppBar` section of
`docs/COMPONENTS.md` took the same task to compiles-clean, usage 6/6 — the
props/stories layers cannot express "compose it this way"; only hand-written
prose can. That is the case for keeping the prose layer maintained.
