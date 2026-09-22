# telicent-ds skill

Agent and human guidance for building UI with [`@telicent-oss/ds`](https://www.npmjs.com/package/@telicent-oss/ds), Telicent's MUI-based React component library.

The design system ships a versioned manifest (`llms.txt`) describing every exported component, its props, and its `variant`s. The manifest ships inside the package, so it always matches the installed version. This skill points an agent at it and keeps generated UI inside the documented API instead of inventing components from stale memory.

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

- Installed copy: `node_modules/@telicent-oss/ds/dist/llms.txt`, exact for the version in use
- Site copy: `https://telicent-oss.github.io/telicent-ds/llms.txt`, tracks `main` and names its version on the last line

## Versioning

Version-exact: it reads the manifest shipped in the installed package. Releases from before the manifest shipped fall back to the published site, which tracks main and can be ahead of the installed version.
