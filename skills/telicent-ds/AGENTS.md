# @telicent-oss/ds — agent guide

Building or changing UI that uses `@telicent-oss/ds` (Telicent's MUI-based React component library)? The design system publishes a versioned, machine-readable manifest (`llms.txt`) — the single source of truth for component names, props, and `variant`s. Read it before writing JSX; do not rely on model memory, which drifts per release.

## When this applies

- Building, adding, or changing any Telicent app screen, page, form, dialog, or component.
- The task names `@telicent-oss/ds` or the Telicent design system.
- Editing a file that imports from `@telicent-oss/ds`.

## How to use it

Follow `SKILL.md` in this folder. It carries the exact steps — read `node_modules/@telicent-oss/ds/dist/llms.txt`, which ships in the package and matches the installed version, and fall back to the published site when that file is absent — and the rules for staying inside the documented API. `metadata.json` lists the manifest URLs for tooling.

Any agent that reads the `AGENTS.md` / `SKILL.md` conventions can consume this. The `SKILL.md` frontmatter additionally carries Claude Code tool scoping (`allowed-tools`); other agents ignore fields they don't recognise.
