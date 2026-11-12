# @telicent-oss/ds — Curated Growth Proposal

## Context

Three positions on how DS should handle MUI:

1. **Block MUI everywhere**, including POCs and experiments.
2. **Re-export all of MUI through DS** — thin barrel, no curation.
3. **Curated growth** (this proposal) — production apps route through DS, DS grows deliberately from real app usage, POCs stay free.

## Proposal in one sentence

Add wrappers for the ~16 MUI components apps actually import today, gate production apps behind an ESLint rule that blocks direct `@mui/*` imports, and grow DS deliberately from real demand — leaving POCs unblocked during exploration.

## Why not the other two positions

### Blocking MUI everywhere (POCs included)

- Puts friction at the exploration step. POCs need to answer "does this idea work at all?" — negotiating DS wrappers isn't part of that question.
- POCs disproportionately hit DS's *gaps* (novel UI ideas need components DS hasn't yet wrapped). Blocking there trips over DS's own weakness.
- No graduated on-ramp. Every prototype becomes a DS-team dependency before it's clear whether the prototype is worth keeping.

The instinct that the org needs a bright line is right. The proposal keeps the bright line; it just draws it at *promotion to production* rather than at *first commit*.

### Re-exporting all of MUI

- Public surface goes from ~60 exports to ~200. Autocomplete stops being a curation signal; everything looks equally blessed.
- Version-locks every app to whatever MUI DS ships. No app can bump MUI ahead of DS.
- Contradicts DS's stated positioning as an opinionated library; turns it into an alias package.
- Doesn't reduce ongoing maintenance meaningfully. MUI upgrades still need vetting — the wrappers aren't the expensive part.

## The proposal in detail

### 1. Close the coverage gap

Audit of `graph`, `search`, `admin`, `query`, and `user-portal` on `main` — ~50 unique MUI symbols in use across ~88 prod files.

**Already covered by an existing DS export (15 symbols):**
`Alert`, `Box`, `Button`, `ButtonBase` (via `Button variant="base"`), `Container`, `Dialog`, `IconButton`, `ListItemButton` / `Icon` / `Text`, `Paper`, `Skeleton`, `Spinner` (was `CircularProgress`), `FlexBox` (was `Stack`), `TextField`. Apps can migrate to these with an import-path change today.

**Add to DS — high priority (used across 2+ apps):**
- `Table`, `TableBody`, `TableCell`, `TableHead`, `TableRow` — graph, admin, query
- `Tooltip` (plain, alongside existing `TooltipToggleButton`) — graph, search
- `Menu` + `MenuItem` — graph. `Menu` source already exists at `src/components/Navigation/Menu/Menu.tsx` but isn't publicly exported; needs a barrel export. `MenuItem` is new.
- `AlertTitle` — graph, search

**Add to DS — admin-specific:**
- `Accordion`, `AccordionDetails`, `AccordionSummary` — port catalogue's existing implementation
- `Radio`, `RadioGroup`
- `LocalizationProvider` + `AdapterDayjs` (companion to existing `DatePicker` / `DateTimePicker`)

**Add to DS — graph-specific:**
- `ToggleButton` (plain)
- `SvgIcon`
- `Popper` — already used internally by `MiniSearchAutocomplete`; just needs an export

**Type re-exports (cheap, high signal):**
`SxProps`, `SelectChangeEvent`, `BoxProps`, `dividerClasses`.

**Icon re-exports from `@telicent-oss/mui-icons-material`:**
`ChevronRight`, `ExpandMore`.

**Deliberately excluded — `@mui/x-data-grid`:**
admin is the only consumer; the surface is very large; wrapping now would be premature. admin gets a lint carve-out. Revisit if a second app adopts a data grid.

#### Per-app coverage

Cross-referencing the additions above against direct `@mui/*` usage on `main` today. Renames (e.g. `Stack`→`FlexBox`, `Typography`→`Text`) and the `Table*` shorthand (= `Table` / `TableBody` / `TableCell` / `TableHead` / `TableRow`) are collapsed to their DS names below; full detail is in the categorised lists above.

```
+--------------+-----------------------------------+-----------------------------------------------+--------------------------------+--------------------------------+
| App          | Already in DS                     | To add per this proposal                      | Not yet in plan                | Carved out / Deferred          |
+--------------+-----------------------------------+-----------------------------------------------+--------------------------------+--------------------------------+
| graph        | Alert, Box, Paper, Skeleton, Text | AlertTitle, Popper, SvgIcon, Table*,          | —                              | —                              |
|              |                                   | ToggleButton, Tooltip                         |                                |                                |
+--------------+-----------------------------------+-----------------------------------------------+--------------------------------+--------------------------------+
| search       | Alert, Box, ButtonBase, Container,| AlertTitle, MenuItem, Tooltip;                | FormControl, Popover, Select   | Deferred: theme provider       |
|              | Skeleton, FlexBox, Text           | types: BoxProps, SelectChangeEvent,           |                                |                                |
|              |                                   | SxProps, Theme, dividerClasses                |                                |                                |
+--------------+-----------------------------------+-----------------------------------------------+--------------------------------+--------------------------------+
| admin        | Dialog, FlexBox                   | Accordion, AccordionSummary,                  | FormControl, FormControlLabel, | Carved: @mui/x-data-grid.      |
|              |                                   | AccordionDetails, LocalizationProvider,       | FormHelperText, Switch,        | Deferred: theme provider       |
|              |                                   | AdapterDayjs, Radio, RadioGroup, Table*,      | SwitchProps                    |                                |
|              |                                   | Tooltip; types: SxProps, Theme                |                                |                                |
+--------------+-----------------------------------+-----------------------------------------------+--------------------------------+--------------------------------+
| query        | Box                               | Table*                                        | —                              | —                              |
+--------------+-----------------------------------+-----------------------------------------------+--------------------------------+--------------------------------+
| user-portal  | —                                 | —                                             | —                              | No direct @mui/* imports       |
+--------------+-----------------------------------+-----------------------------------------------+--------------------------------+--------------------------------+
```

### 2. Migrate apps

Codemod pass rewriting direct MUI imports to DS. Rough scale:

| App | Prod files touched |
|---|---:|
| graph | 39 |
| search | 24 |
| admin | 21 (with x-data-grid carve-out) |
| query | 3 |
| user-portal | 0 |

Approximately one focused day per app with a scripted codemod plus review.

### 3. Lint rule

`no-restricted-imports` at the workspace root, production apps only:

```js
{
  patterns: [
    { group: ['@mui/material', '@mui/material/*'],
      message: 'Import from @telicent-oss/ds instead.' },
    { group: ['@mui/icons-material', '@mui/icons-material/*'],
      message: 'Use DS icons or @telicent-oss/mui-icons-material.' }
  ]
}
```

Carve-out for `@mui/x-data-grid` in admin. Rule is not applied in POC directories/repos.

### 4. Ongoing rhythm

- App needs something DS doesn't have → temporarily inline in the app with an escape-hatch comment referencing a DS ticket.
- DS lands the wrapper in the next release; app removes the escape hatch.
- Rate-limit: one significant DS addition per release, so curation stays real.

## POC exception

POCs are excluded from the lint rule. They can import MUI freely. When a POC promotes to a production app, promotion checklist includes:

1. Identify direct MUI imports.
2. Replace with DS equivalents, or file DS wrapper tickets for anything genuinely new.
3. Turn the lint rule on.

This gives the org the bright line, enforced at the lifecycle stage where the decision actually matters.

## Non-goals

- Not proposing DS wrap all of MUI.
- Not proposing a DS major release — additions are additive, ship across minor versions.
- Not proposing thick opinionated wrappers in the first pass; thin pass-throughs are fine to start with.
- Not addressing the ThemeProvider dual-package issue in this doc — separate fix, tracked separately.

## Open questions for the meeting

1. **`@mui/x-data-grid`** — carve out in admin now and revisit later, or start wrapping? Recommendation: carve out.
2. **POC boundary** — how do we mark a repo/directory as POC? By path convention, by dedicated `eslint-disable` override file, by top-level tag in `package.json`?
3. **Wrapper depth** — thin pass-through (`Table = <MuiTable {...props} />`) or opinionated defaults from day one? Recommendation: thin first pass, iterate opinionation as patterns emerge.
4. **Timeline** — can we land the ~16 new components + codemod + lint in one sprint, or split?
5. **Ownership** — DS team lands the wrappers; who owns the codemod pass and lint rule rollout in each app repo?

## Evidence base

Full audit data available on request. Summary:

| Category | Count |
|---|---:|
| Unique MUI symbols in use across 5 apps | ~50 |
| Already covered by existing DS export | 15 |
| To add to DS | ~16 components + 5 types + 2 icons |
| Carved out (x-data-grid) | 3 types + 1 side-effect import |
| Prod files with direct `@mui/*` imports | ~88 |
