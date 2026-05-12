# ds-police

Design-system component scoring CLI. Enrol files, run a sub-agent against guidance, get a per-file verdict. Pre-push hook blocks regressions.

Spec: `specs/333-ds-police/`.

---

## What it does

For each enrolled component file, ds-police asks a Claude sub-agent to score it across seven axes against locally-authored guidance (`guidance/*.md`). Results land in `<File>.tsx.ds-score.md` next to the source. Pre-push hook re-scores anything stale and exits non-zero on `BLOCK` or `FAILED`.

Seven axes:

| Axis            | Question                                                |
| --------------- | ------------------------------------------------------- |
| `framework_fit` | Does this belong in the framework tier?                 |
| `api_surface`   | Does the public API match MUI conventions?              |
| `composability` | Does it forward refs / spread rest / accept slots?      |
| `theming`       | Does it use the theme correctly?                        |
| `types`         | Are the TypeScript types precise (no `any`, generics)?  |
| `docs`          | Storybook + tests covering the public API?              |
| `necessity`     | Should this exist as a component at all?                |

Findings carry a CVSS-style severity prefix: `CRITICAL`, `HIGH`, `MODERATE`, `LOW`.

The four MUI-axis scores (`api_surface`, `composability`, `theming`, `types`) feed a weighted mean — the `mui_consistency` number on the sidecar.

Verdict is computed locally from severity + numeric thresholds in `guidance/weights.yml`:

- **BLOCK** — severity ≥ threshold (default `HIGH`) or mui_consistency < threshold (default `6.0`)
- **WARN** — any finding present but below thresholds
- **PASS** — no findings, all axes clean
- **FAILED** — agent timed out / errored / returned malformed JSON

The push gate is governed by `gate.mode` in `weights.yml` — see [Gate modes](#gate-modes).

---

## Install

Already wired in this repo. The shim at `scripts/ds-police` runs `tsx + index.mts`.

Requires:

- Node ≥ 20
- `claude` CLI on PATH (Claude Code) — used as a sub-agent
- `fzf` (optional; falls back to `@inquirer/prompts` checkbox)

Install deps once:

```bash
yarn install
```

---

## Commands

### `add` — enrol files

```bash
./scripts/ds-police add <paths...> [--all]
```

Creates an empty `<File>.ds-score.md` sidecar next to each chosen `.ts` / `.tsx` file. Empty sidecars get scored on the next `score` run.

- File path → enrols that file.
- Folder path → walks `**/*.{ts,tsx}` and shows an fzf multi-select.
- Glob (`src/**/*.tsx`) → enrols every match without a menu.
- `--all` → skip the menu, enrol everything.

Already-enrolled files appear marked `[enrolled]` and are skipped.

```bash
./scripts/ds-police add src/v1/components/buttons
./scripts/ds-police add src/v1/components/Modal/Modal.tsx
./scripts/ds-police add 'src/v1/**/*.tsx' --all
```

### `score` — re-score stale sidecars

```bash
./scripts/ds-police score [--guidance-dirty] [--dry-run]
```

Walks every `**/*.ds-score.md`, decides what's stale, then invokes the agent **one file at a time** (sequential `await` loop — never parallel).

A sidecar is stale if any of:

- File is empty (newly enrolled).
- Source content hash changed (`source_sha`).
- Guidance content hash changed (`guidance_sha`).
- Weights config hash changed (`weights_sha`).
- Last run wrote `status: failed`.

Flags:

- `--guidance-dirty` — only re-score when guidance/weights changed; ignore source-only drift. Use after editing `guidance/*.md` to refresh existing scores cheaply.
- `--dry-run` — list what would be scored without invoking the agent.

Exit codes:

- `0` — all stale files scored cleanly, no `BLOCK` / `FAILED`.
- `1` — at least one `BLOCK` or `FAILED`.
- `2` — orchestration error (couldn't load guidance, etc.).

### `status` — tabulate enrolled files

```bash
./scripts/ds-police status
```

Prints a table of every enrolled file with its current verdict, severity, mui_consistency, and freshness flags (`fresh` / `stale` / `-`) for source / guidance / weights.

---

## Pre-push hook

`./scripts/ds-police score` is wired into `.husky/pre-push`, after `tsc --noEmit` and the test run. Push is blocked on non-zero exit. What counts as non-zero depends on the gate mode (see below).

## Gate modes

Set `gate.mode` in `guidance/weights.yml`. Two modes:

### `ratchet` (default, integration period)

Block only on **regressions** vs the committed baseline. The baseline lives at `.ds-police-baseline.json` (committed, reviewed in PRs):

```json
{
  "blocked": 4,
  "failed": 0,
  "updated_at": "2026-04-25T10:59:18.123Z"
}
```

Outcomes per run:

| Situation                                    | Action                                  | Exit |
| -------------------------------------------- | --------------------------------------- | ---- |
| No baseline file                             | Write baseline at current counts        | `0`  |
| `blocked` or `failed` increased              | **Regression — push blocked.** No write | `1`  |
| `blocked` or `failed` decreased (no axis up) | Ratchet baseline down                   | `0`  |
| Counts equal                                 | Stable, no write                        | `0`  |

Rule: a run that improves on either axis without worsening the other ratchets the baseline down. Anything else is either stable (no-op) or a regression (blocked).

### `strict` (post-cleanup)

Block whenever any sidecar holds `BLOCK` or `FAILED`. Baseline file is ignored. Use once the team has cleared the backlog.

```yaml
# guidance/weights.yml
gate:
  mode: strict
```

### Counting

Both modes tally from on-disk sidecar state, not from this run's freshly-scored sidecars. A repo with 5 stale `BLOCK` sidecars on disk and zero stale-this-run still counts 5 blocked.

---

## Sidecar format

YAML body in `<File>.tsx.ds-score.md`:

```yaml
file: src/v1/components/Modal/Modal.tsx
source_sha: <sha256>
guidance_sha: <sha256>
weights_sha: <sha256>
framework_fit:
  score: 8/10
  findings:
    - severity: MODERATE
      message: "prop bag flattens discriminated union"
      line: 42
      rule_id: framework-fit/discriminated-union
api_surface:
  score: 9/10
  findings: []
composability: { score: 9/10, findings: [] }
theming:       { score: 8/10, findings: [] }
types:
  score: 7/10
  findings:
    - { severity: LOW, message: "missing readonly on items prop" }
docs:
  score: 6/10
  findings:
    - { severity: HIGH, message: "no Storybook story", rule_id: docs/story-coverage }
necessity:     { score: 9/10, findings: [] }
overall:
  severity: HIGH
  mui_consistency: 8.18
  verdict: BLOCK
```

Failed runs append:

```yaml
status: failed
error: "agent timed out after 60000ms"
```

Prior content is preserved on agent failure — only the failure markers are written to that one sidecar; siblings continue.

---

## Guidance & weights

```
guidance/
  weights.yml
  README.md            # severity definitions
  00-framework-fit.md  # one file per axis
  10-api-surface.md
  20-composability.md
  30-theming.md
  40-types.md
  50-docs.md
  60-necessity.md
```

Each axis file lists hard rules (CRITICAL), high/moderate/low issues, and the score rubric. The agent reads the lot as a single concatenated prompt prefix.

`weights.yml` shape:

```yaml
sections:
  api_surface:   1.0
  composability: 1.0
  theming:       1.0
  types:         0.5
thresholds:
  severity: HIGH    # CRITICAL | HIGH | MODERATE | LOW
  numeric:  6.0     # 0..10, mui_consistency floor
gate:
  mode: ratchet     # ratchet | strict (see Gate modes)
```

If the file is missing, defaults are used (and sha is hashed off the YAML stringification). `gate.mode` defaults to `ratchet`.

---

## How it works

```
score:
  load guidance/*.md  → sha
  load weights.yml    → sha
  enumerate **/*.ds-score.md
  for each stale sidecar:           # sequential await loop
    build prompt:                   # cache-friendly
      [SYSTEM]
      [GUIDANCE]                    # fixed prefix
      [RESPONSE SCHEMA]
      [TASK]
      [FILE] <path + fenced source> # variable suffix
    runClaude({ prompt })
    parseAgentResponse(stdout)      # extract fenced JSON, zod-validate
    computeOverall(...)             # severity max + weighted mean + verdict
    composeSidecar(...) → writeSidecar
  print summary, exit 0/1
```

### Cache strategy

`buildPrompt` puts everything fixed across a run (system rules, guidance, schema, task preamble) **before** the file-specific suffix. Claude Code's prompt cache keys on prefix; sibling invocations within ~5 min hit cache. Cache-hit ratio is logged per run.

### Determinism

Source / guidance / weights are hashed after byte normalisation: CRLF→LF, trim trailing line whitespace, single trailing newline, UTF-8. CRLF-only diffs don't trigger re-scoring.

### Sequential

`runScore` is a single `await` loop — never `Promise.all`. Integration tests verify the call counter on a fake binary is `1, 2, 3, ...`.

### Failure isolation

Agent timeout / non-zero exit / malformed JSON → `status: failed` written to **that** sidecar; siblings untouched; overall run exits non-zero.

---

## Environment

- `DS_POLICE_AGENT_BIN` — override `claude` binary path (used by tests).
- `DS_POLICE_AGENT_TIMEOUT_MS` — per-invocation timeout, default `60000`.

---

## Layout

```
scripts/
  ds-police                    # bash shim → tsx + index.mts
  ds-police-src/
    index.mts                  # commander dispatch (add / score / status)
    types.mts                  # zod schemas, severities, verdict, weights
    commands/
      add.mts                  # enrol files
      score.mts                # scan + agent loop
      status.mts               # tabulate
    core/
      hash.mts                 # deterministic content hashes
      sidecar.mts              # yaml IO, factories, glob, suffix conventions, tally
      guidance.mts             # ./guidance/** loader + sha
      weights.mts              # ./guidance/weights.yml + defaults
      staleness.mts            # source/guidance/weights drift detection
      aggregator.mts           # severity max + weighted mean + verdict
      baseline.mts             # .ds-police-baseline.json + ratchet decision
    agent/
      prompt.mts               # cache-friendly prompt assembly
      response.mts             # fenced-JSON extract + zod validate
      claude.mts               # execa('claude', '-p', ...) + cache-hit detection
    ui/
      fzf.mts                  # fzf multi-select; @inquirer/prompts fallback
      report.mts               # per-row + summary formatters
    vitest.config.mts
    README.md                  # this file

guidance/
  weights.yml
  00-framework-fit.md … 60-necessity.md
  README.md

tests/ds-police/
  unit/                        # 10 unit suites
  integration/                 # add, score, status with mocked claude
  fixtures/                    # components + canned agent responses
```

---

## Tests

```bash
yarn ds:test
```

Vitest config: `scripts/ds-police-src/vitest.config.mts`.
Tests: `tests/ds-police/{unit,integration}/**/*.test.mts`.
Mocked agent: `tests/ds-police/fixtures/claude-fake.mjs`, gated by `DS_POLICE_AGENT_BIN`.

Vitest runs in fork pool, `singleFork: true`, so integration tests that share a fake-binary counter file don't race.

---

## Typical workflow

```bash
# enrol new components
./scripts/ds-police add src/v1/components/buttons

# see what's enrolled
./scripts/ds-police status

# refresh scores (also runs on git push)
./scripts/ds-police score

# after editing guidance/*.md
./scripts/ds-police score --guidance-dirty
```
