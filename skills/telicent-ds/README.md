# telicent-ds skill

Agent and human guidance for building UI with [`@telicent-oss/ds`](https://www.npmjs.com/package/@telicent-oss/ds), Telicent's MUI-based React component library.

The design system ships a versioned manifest (`llms.txt`) describing every exported component, its props, and its `variant`s. This skill points an agent at the manifest for the installed version and keeps generated UI inside the documented API instead of inventing components from stale memory.

## Files

- `SKILL.md` — the operational skill: frontmatter, fetch steps, rules. Agents load this.
- `AGENTS.md` — discovery entry for agents following the `AGENTS.md` convention.
- `metadata.json` — machine-readable version range and manifest URLs.
- `README.md` — this overview.

## Not shipped in the package

This directory is repo-only. `package.json` sets `files: ["dist"]`, so the published
`@telicent-oss/ds` tarball contains `dist/`, `README.md`, `LICENSE` and `package.json` and
nothing else — installing the design system never writes a skill into a consumer's project.
Loading the skill is a separate, explicit opt-in: `npx skills add telicent-oss/telicent-ds`.

## Manifest

- Per major: `https://telicent-oss.github.io/telicent-ds/v<major>/llms.txt`
- Latest: `https://telicent-oss.github.io/telicent-ds/llms.txt`

## Versioning

Version-adaptive: it reads the installed `@telicent-oss/ds` major and fetches that major's manifest, falling back to the latest when a per-major manifest is unavailable.
