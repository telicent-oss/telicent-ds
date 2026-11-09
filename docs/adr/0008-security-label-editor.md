---
status: proposed
date: 2026-11-09
---

# Ship one security label editor, driven by the user's label schema

Two apps build IDH security labels from the-management's per-user schema
(`GET /v1/labels/schemas`): graph labels the data it writes, and the entity
editor gives each audience a label. Each has its own copy of the schema parser
and its own form, and search is adding the same fetch. `SecurityLabelEditor`,
`extractIdhOptions` and `defaultIdhLabel` replace the copies.

## Decisions

1. **The user's schema is the only source of options.** `extractIdhOptions`
   returns null when the schema allows no valid label. There is no fallback
   label, so an app without a schema offers no labelling.
2. **Closed lists.** Nothing outside the schema can be entered. The user's own
   nationality and organisation (the schema's `contains`) cannot be removed, so
   they can read what they label.
3. **Locked values live on `Autocomplete`.** `lockedValues` removes the delete
   button from a chip and puts the value back on clear-all. Other forms can use it.
4. **The parser ships, the fetch does not.** Apps fetch with their own auth
   and cache. The parser is a pure function of the schema.
5. **Generic over the label.** Fields the editor does not edit, such as graph's
   `scheme`, are kept on change.
6. **IDH only.** EDH is added when an app writes EDH labels.

## Consequences

- Graph deletes `SecurityLabelEditor` and `labelSchemasAdapter`. Its accordion
  and summary line stay in the app.
- The entity editor deletes its parser copy and its own form fields.
- The entity editor's rules for audiences derived from other audiences stay in
  the app. It passes narrowed options and its own `hints`.

## Considered alternatives

- **Keep per-app copies.** Rejected because the parser is already copied twice, and search is next.
- **A fetch hook in the design system.** Rejected because each app owns its API base URL and query cache.
