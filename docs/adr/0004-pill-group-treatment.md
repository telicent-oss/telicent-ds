---
status: accepted
date: 2026-10-07
---

# The pill-group treatment ships as a theme override, applied by a shared class

`Tabs` gains a `pill` prop and a new `ToggleButtonGroup` export carries the same
one. Both resolve to one class, `TelicentPillGroup`, which the theme styles.
Apps stop hand-rolling the `sx` block.

## Why the DS owns this

**1. Two of one app's screens hand-rolled the same block.** `apps/search`
carried near-identical `sx` in `EntityTabs.tsx` and `MapViewToggle.tsx` — the
same well, the same pill, the same ripple suppression — reached by four rounds
of trial and error against a running app, because neither had a Storybook to
iterate in. The second consumer would have done it differently.

**2. One of the fixes needed `!important`.** `MuiToggleButtonGroup` squares its
first and last children at a specificity `sx` cannot beat. A theme override
outranks it; no app should need `!important` to round a corner.

**3. MUI's selected state is translucent.** A selected `ToggleButton` is
`alpha(colour, action.selectedOpacity)`, which on a dark surface reads as
disabled rather than selected.

## Decisions

**1. A class, not a theme `variant`.** MUI v5's `variants` support does not
cover `MuiTabs` (`tabs-overrides.ts`), and MUI's `Tabs` already owns `variant`
for `standard | scrollable | fullWidth`. The components take a `pill` boolean
and apply `PILL_GROUP_CLASS`; the overrides key on it.

**2. `styleOverrides`, not the palette, and not `sx`.** The colours are already
correct palette tokens. What the palette cannot carry is shape — radius,
spacing, height — and the opacity of a selected state.
`palette.action.selectedOpacity` could express the third, but that value is
right everywhere else: menu rows and list items should stay translucent when
selected. A solid fill is this component's opinion, not the theme's.

**3. The pill is a skin, not a second component.** `Tabs` keeps its tablist
role, roving tabindex and ADR-0003 derived ids in both appearances. A separate
`PillTabs` would be the drift ADR-0002 exists to prevent.

**4. `ToggleButtonGroup` requires an accessible name.** Like `Tabs`, the type is
a union permitting exactly one of `aria-label` / `aria-labelledby`. MUI leaves
both optional; an unnamed group of buttons leaves a screen-reader user to infer
what the set controls (ADR-0001).

**5. `PILL_HEIGHT` lives in `tokens`.** Both overrides read it, so the two
groups cannot end up different heights in the same toolbar.

## Consequences

- An app wanting the treatment on a MUI component the DS has not ported still
  hand-rolls it. The class is DS-internal, not a public styling hook.
- `exclusive` groups still emit `null` when the active button is clicked again.
  The DS does not guard it — no selection is legitimate for some groups — so
  the story documents it instead. A future `enforceSelection` prop could own it
  if more consumers hit it.
- `ToggleButton` is unchanged and still usable standalone.

## Considered alternatives

**A `PillTabs` component.** Rejected: two tab components, two sets of
accessibility wiring to keep in step.

**`sx` exported from the DS as a style object.** Rejected: `sx` in a wrapper is
not a theming rung, and a hardcoded colour there is the workaround ADR-0002
rejected. It also could not beat the grouped-children specificity.

**Raising `action.selectedOpacity` to 1.** Rejected: correct for this component,
wrong for every menu row and list item in the system.
