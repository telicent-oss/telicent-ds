---
status: accepted
date: 2026-10-21
---

# Add EntityList: a navigational list of entities, built on DS primitives

`EntityList` joins Data display as a semantic, keyboard-accessible list where
each row is a native `<a href>` navigating to a detail page. It fills a gap
between `DataGrid` (grid pattern, cell-level data) and `Table` (small fixed
structured data) — a third shape for navigational entity lists such as users,
groups, clients, service accounts.

## Why the DS owns this

### The surface problem

Rows in entity-list views weren't keyboard-accessible. Pressing Enter on a
focused row did nothing; only mouse clicks opened the detail page.

### The real problem

MUI X `DataGrid` implements the **ARIA Grid pattern** — designed for
spreadsheet-like data: 2D cell navigation with arrow keys, cell-level
editing, column reordering. In that pattern, rows aren't semantically
activatable; interaction happens at the cell level.

The screens using it are **navigational entity lists** — a list of things,
each of which opens its own detail page. That's a different pattern (the
ARIA List pattern), used by Jira, GitHub, Linear and others for the same
shape of UI.

So the component was using the wrong semantic pattern for its data.
Keyboard inaccessibility was the symptom; semantic mismatch was the cause.
Each new a11y gap we patched on top of `DataGrid` would be another bolt-on
without addressing the pattern.

## Decisions

1. **ARIA list pattern, not grid.** The component renders as a `<section>`
   landmark containing a `<ul>` of `<a href>` rows. Screen readers announce
   "link, View Alice" rather than "row 3 of 24, cell 1 of 5". Sortability is
   expressed through the sort button's accessible name, not through
   `aria-sort` — which ARIA 1.2 limits to `columnheader`/`rowheader` roles,
   and this list has neither.
2. **Each row is a native `<a href>`.** Right-click copy link,
   cmd/ctrl-click open in new tab, shift-click open in new window, screen
   reader "link" announcement, deep-linking and SSR all work for free
   because the row is a real anchor. The rows are rendered as
   `ListItemButton component="a"`, which composes MUI's hover/focus
   semantics onto the native anchor.
3. **Click interception is explicit and router-agnostic.** The DS imports no
   router. Pass `onItemClick(item, href)` and plain left-clicks fire the
   callback (with `preventDefault`) so an SPA router can take over; omit it
   and clicks fall through to native full-page navigation. Modifier-click
   and non-primary buttons always fall through — the component tests for
   `metaKey`/`ctrlKey`/`shiftKey`/`altKey`/`button !== 0` and does not
   `preventDefault` in those cases. The whole SPA story is one callback
   wide, and `cmd-click opens a new tab` doesn't need any special code path.
4. **Sort state goes in the accessible name, via `visuallyHidden`.** The
   sort header is a `Button variant="base"` with a visually-hidden
   `", sorted ascending"` or `", sorted descending"` appended when the
   column is active. Spec-compliant without turning this into a grid.
5. **`defaultPageSize`, not `pageSize`.** The dropdown is user-controlled
   once the component mounts; the prop seeds initial state only. The name
   says so, so consumers don't assume the prop is reactive.
6. **Accessible name is required at the type level.** `EntityListProps`
   intersects a `LabellingProps` union that forces either `ariaLabel` or
   `ariaLabelledBy`. The `<section>` landmark is never unnamed, and the
   component carries no hidden "List" fallback.
7. **Built on DS primitives, not raw HTML.** Sort headers resolve to
   `Button variant="base"`; pagination to `IconButton`; page-size to the
   DS `Select` (with `SelectDisplayProps["aria-labelledby"]` so MUI's
   `SelectInput` doesn't swallow the external `<label>`); list structure
   to `List`/`ListItem`/`ListItemButton`. No `Box component="button" | "a"
   | "select" | "ul"` for anything the DS already owns.
8. **Display-only mode is implicit.** Omit `getItemHref` and rows render as
   inert `Box`es inside a `ListItem` — no chevron, no hover tint, no focus
   outline. For permission-gated views where the user can see rows but not
   act on them.
9. **Loading state renders skeleton rows, not a spinner or text.** The
   loading state draws `defaultPageSize` skeleton rows with one
   `Skeleton` per column, sized by the column's `flex`/`width` so layout
   doesn't jump when real data arrives. A visually-hidden `role="status"`
   carries the "Loading" announcement for screen readers; the skeleton
   list itself is `aria-hidden` so SR users don't hear a stream of empty
   rows.

## Consequences

- The DS now carries three distinct list-shaped components with clear
  guidance between them: `DataGrid` for tabular/analytical data,
  `EntityList` for navigational entity lists, `Table` for small fixed
  structured data. `COMPONENTS.md` steers consumers between them.
- `List/List.tsx` gains an incidental fix: `ListItemButton` is now
  re-exported from MUI directly rather than wrapped in `React.FC`, so the
  `OverridableComponent` typing survives and `<ListItemButton component="a"
  href={...}>` narrows anchor-event types for `onClick`. This also restores
  ref forwarding, which `React.FC` can't do.
- Accepted cost: `DataGrid`'s slightly more polished pagination chrome.
  `EntityList`'s pagination is built on DS primitives (`Select`,
  `IconButton`) and matches the shape of a navigational list.
- Non-breaking release: additive component, no existing public API
  changes.

## Considered alternatives

- **Patch `DataGrid`.** Bolt `onCellKeyDown` onto a wrapper so Enter opens
  the row. Fixes the keyboard symptom but keeps the semantic mismatch.
  Screen readers would still announce "row 3 of 24, cell 1 of 5" instead
  of "View Alice, link", and every subsequent a11y gap would need another
  bolt-on.
- **Replace the chevron with an `<IconButton>` inside `DataGrid`.**
  Half-right: a real button is correct, but it sits inside a grid shell
  the row isn't meant to activate. The keyboard model (arrow to the
  chevron cell, Tab into the button) is clumsy for something that should
  be trivial.
- **Extend `DataGrid` with a "simple" mode.** Would mean `DataGrid` grows
  a configuration branch that undoes its grid pattern — the opposite of
  what the component is for. Also: the `DataGrid` features consumers of
  this pattern would "lose" (filterable columns, cell editing, column
  reordering, server-side pagination) weren't being used anyway. It's a
  heavyweight spreadsheet component rendering 10–20 rows of entity data.
- **A grid pattern (`role="grid"` + `columnheader` + `gridcell`) built
  from scratch.** Would make `aria-sort` canonical, but turns every row
  announcement into spreadsheet speak and hides the "link" semantic that
  is the whole point. Three components with clear semantics beats three
  with overlapping ones.
- **A thin wrapper around MUI's `Table` and `TableSortLabel`.** `Table` is
  a grid-flavoured primitive — same ARIA issue, and its row model doesn't
  carry a navigation destination. Fitting an anchor row into it means
  reinventing the sort decorations anyway.
- **A sub-path export (`@telicent-oss/ds/entity-list`).** The DS does this
  for `DataGrid` and the date pickers because they drag heavy MUI X deps;
  `EntityList` has none — it's assembled from components already in the
  main bundle. Nothing to pay for by splitting it out.
- **Keep sortability out, point consumers at `DataGrid` for sort.**
  Cleanest architecturally, but the real use case is a sortable list of
  10s–100s of entities paginated from a server. Removing sort would push
  consumers back to the exact grid-pattern mismatch this component
  resolves. Sort stays, and the list-pattern a11y story (direction in the
  accessible name) carries the semantic.
