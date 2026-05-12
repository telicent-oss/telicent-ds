# `src/v1` design system assessment

Snapshot audit, 2026-04-24. Source of truth for the cleanup plan that produced `src/v1/CONTRIBUTING.md`, `src/v1/NEW_COMPONENT_CHECKLIST.md`, and `.claude/skills/design-system-gate/`.

## Headline

The design system conflates **framework primitives** with **bespoke app features**. Theme config is underused; too many "components" are just visual configuration dressed up as components. MUI-conformance is inconsistent: some components are exemplary, others lock props, hard-code hex, skip `forwardRef`, or carry business logic. Fixable, but needs a hard separation of tiers and a conformance gate.

## Worst offenders

1. `src/v1/components/data-display/AppSwitch/AppSwitch.tsx` — app-specific menu; uses Zod for schema validation in render; opens external URLs.
2. `src/v1/components/surfaces/FloatingPanel/*` — entire bespoke floating-panel subsystem with React Context. Application infrastructure, not a primitive.
3. `src/v1/components/feedback/Dialog/Dialog.tsx` — hard-coded `#1e1e1e`; ignores palette; no `forwardRef`.
4. `src/v1/components/layout/AppChrome.tsx` — full-page app layout masquerading as a primitive.
5. `src/v1/components/buttons/Button/PrimaryButton.tsx`, `SecondaryButton.tsx` — lock `variant` / `color`. Belongs in theme variants, not as components.
6. `src/v1/components/buttons/Button/IconButton.tsx`, `surfaces/Paper`, `feedback/Spinner`, `feedback/LinearProgress`, `feedback/Skeleton`, `layout/FlexBox`, `data-display/List*` — zero-value pass-throughs. Delete.
7. `src/v1/components/buttons/CopyToClipboard/CopyToClipboard.tsx` — clipboard API + animation state. Bespoke feature.
8. `src/v1/components/inputs/SearchBox/*` — three overlapping search variants (SearchBox, MiniSearchBox, MiniSearchAutocomplete). Consolidate to one primitive; move product-specific wrappers to apps.
9. `src/v1/components/inputs/EditableTextField/EditableTextField.tsx` — in-place editor state machine. Bespoke.
10. Icon folders (`data-display/Icons/*`, `data-display/FontAwesomeIcons/*`) — brand / product icons; do not belong in a generic DS.

## Components worth preserving (use as templates)

- `src/v1/components/inputs/TextField/TextField.tsx`
- `src/v1/components/inputs/Autocomplete/Autocomplete.tsx`
- `src/v1/components/inputs/Select/Select.tsx`
- `src/v1/components/data-display/Text/Text.tsx`
- `src/v1/components/inputs/Checkbox/Checkbox.tsx`

## Theme / config gaps

- Hard-coded hex (`#1e1e1e`, `#2A2A2A`, `#6D6D6D`) inside components instead of `theme.palette.*`.
- `PrimaryButton` / `SecondaryButton` / `Chip` defaults belong as MUI `variants` / `defaultProps` under `src/v1/theme/style-overrides/`.
- MenuItem and Autocomplete styles are inlined in consumer components (AppSwitch, DropdownButton) instead of consolidating in `component-overrides.ts`.
- `src/v1/tokens/` contains only `breakpoints.ts` — no central spacing / radius / size tokens documented.

## Export surface

`src/export.ts` is a flat barrel of everything. Consumers cannot distinguish Framework from Candidate. Plan: keep public barrel Framework-only; Candidates import via deep path.

## Plan (phased, non-destructive)

### Phase 0 — governance (this commit)
- Added `src/v1/CONTRIBUTING.md` (tier definitions, decision ladder, MUI-conformance rules).
- Added `src/v1/NEW_COMPONENT_CHECKLIST.md` (PR checklist).
- Added `.claude/skills/design-system-gate/SKILL.md` (Claude auto-triggers on v1 edits).

### Phase 1 — reclassify (no deletions)
- Create `src/v1/_candidates/` directory.
- Move app-specific components in (AppSwitch, AppChrome, AppBar, UserProfile, FixedPanel, FloatingPanel, CopyToClipboard, EditableTextField, ErrorFallback, brand Icons).
- Each candidate gets a README with owner + graduation criteria.
- Candidates remain deep-importable during the transition; removed from public barrel.

### Phase 2 — theme migration
- Convert `PrimaryButton` / `SecondaryButton` into MUI `variants` in theme; delete wrappers.
- Replace hard-coded hex in `Dialog`, AppSwitch, SearchBox with palette references.
- Add spacing / radius / size tokens to `src/v1/tokens/`.

### Phase 3 — delete zero-value wrappers
- Remove `IconButton`, `Paper`, `Spinner`, `LinearProgress`, `Skeleton`, `FlexBox`, `FlexGrid`, `List*` wrappers. Consumers import from MUI directly.

### Phase 4 — conformance retrofit
- Audit remaining Framework components against the MUI-conformance checklist.
- Add `forwardRef`, `sx` merging, rest-prop spreading, `slots` / `slotProps` where missing.

Each phase is a separate PR.
