# telicent-ds skill

Agent and human guidance for building UI with [`@telicent-oss/ds`](https://www.npmjs.com/package/@telicent-oss/ds), Telicent's MUI-based React component library.

The design system ships a versioned manifest (`llms.txt`) describing every exported component, its props, and its `variant`s. The manifest ships inside the package, so it always matches the installed version. This skill points an agent at it and keeps generated UI inside the documented API instead of inventing components from stale memory. Releases up to and including 4.0.0 predate the manifest; on those, the skill uses the installed type declarations, which carry component and prop names but no variants, recipes or theming.

## Files

- `SKILL.md` — the operational skill: frontmatter, fetch steps, rules. Agents load this.
- `AGENTS.md` — discovery entry for agents following the `AGENTS.md` convention.
- `metadata.json` — skill version, abstract and manifest URL, for other tooling.
- `README.md` — this overview.

## Not shipped in the package

This directory is repo-only. `package.json` sets `files: ["dist"]`, so the published
`@telicent-oss/ds` tarball contains `dist/`, `README.md`, `LICENSE` and `package.json` and
nothing else — installing the design system never writes a skill into a consumer's project.
Loading the skill is a separate, explicit opt-in: `npx skills add telicent-oss/telicent-ds`.
