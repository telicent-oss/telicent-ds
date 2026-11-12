---
status: accepted
date: 2026-10-14
---

# Port MUI's Drawer and Badge, and give the Drawer name to the controlled one

`Drawer` becomes a controlled side sheet: MUI's `Drawer` under the DS theme,
with a `width` prop. `Badge` joins Data display as MUI's `Badge` with the DS's
shape and colour. The map inset's ref-driven panel, which held the `Drawer`
name, is renamed `InsetDrawer` and deprecated in the same release.

## Why the DS owns this

Apps were importing both from `@mui/material`. Telicent Search's Refine panel
hand-rolled the drawer's width and viewport cap in `PaperProps.sx`, and its
filter button hand-rolled the badge's pill, ring, colour and `aria-hidden` in
an `sx` block. Each app that needs either would copy those blocks and drift.

The existing DS `Drawer` could not serve: it omits `open` and `onClose` and is
driven through a `DrawerController` ref. A controlled form inside it, whose
draft must be discarded on every dismissal, would need an effect syncing state
into the ref and a callback syncing back, and its correctness would rest on
that sync.

## Decisions

1. **`Drawer` is controlled.** It passes MUI's `open` and `onClose` through
   untouched. Escape, a backdrop click and the caller's close button all reach
   `onClose`, so dismissal has one path.
2. **`Drawer` takes a `width` prop**, applied to the paper ahead of the
   caller's own `PaperProps.sx`. A temporary (modal) drawer's paper is capped
   at `maxWidth: 100vw` in `drawer-overrides.ts`, keyed on `ownerState.variant`
   so persistent drawers keep their own layout. MUI's paper is already a flex
   column, so a fixed header and footer around a scrolling body need nothing
   from the DS.
3. **The `Drawer` name moves.** The map inset's panel becomes `InsetDrawer`
   (`InsetDrawerProps`), marked `@deprecated` at once and kept for existing
   consumers until a later major. `useDrawer` and `DrawerController` keep their
   names, also deprecated, because nothing else claims them. This is a
   **breaking change**: an import of `Drawer` or `DrawerProps` now gets the
   controlled component.
4. **`Badge` defaults to `color="primary"`.** Its text colour comes from
   `primary.contrastText` through `getContrastText`, so no colour is set on the
   component.
5. **`Badge` is hidden from assistive technology by default.** The wrapper sets
   `slotProps.badge["aria-hidden"]` to `true` and merges the caller's
   `slotProps.badge`, object or function, after it. The count belongs in the
   accessible name of the badge's host ("Refine, 2 filters applied"). A badge
   with no labelled host can opt back in.
6. **The badge's shape is a theme override.** `badge-overrides.ts` sets the
   standard badge's 20px pill, 11px bold type, a 2px ring in
   `background.default`, and `pointer-events: none` so clicks reach the host.
   The palette carries colour, not shape, so this is rung 4.
7. **Badge placement stays at the callsite.** Where the badge sits depends on
   its host's shape, so an offset such as "3px inside a square button's
   corner" is the app's `sx`, not a DS rule.

## Consequences

- The release is a major (5.0.0). A consumer importing `Drawer` for the map
  inset must switch to `InsetDrawer`.
- Apps drop their `PaperProps.sx` width and viewport cap, and their badge `sx`
  block apart from placement.
- Any app rendering MUI's `Badge` or a temporary `Drawer` under
  `UIThemeProvider` picks up the new shape and the viewport cap, imported from
  the DS or not.

## Considered alternatives

- **A new name, such as `SideSheet`.** Additive and non-breaking, but it leaves
  the obvious name on a deprecated, special-purpose component, and every new
  consumer would reach for the wrong one first.
- **A controlled mode on the existing `Drawer`.** It is the inset's left-hand,
  persistent, tab-button panel. A right-hand modal sheet would fight every one
  of its defaults.
- **Leaving the badge announced.** MUI's default reads the bare count, so a
  screen reader hears "2" with no context next to the button's own name.
