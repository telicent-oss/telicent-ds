#!/usr/bin/env node
// Generates the LLM-discovery files served from the GitHub Pages root:
//   llms/llms.txt       — curated index (llmstxt.org convention)
//   llms/llms-full.txt  — full component manifest
// Canonical source: docs/COMPONENTS.md (edited by hand).
// The deploy-llms workflow publishes llms/ to the gh-pages root.
// Run locally via `yarn build:llms`.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

const PAGES = "https://telicent-oss.github.io/telicent-ds";
const NPM = "https://www.npmjs.com/package/@telicent-oss/ds";
const GITHUB = "https://github.com/telicent-oss/telicent-ds";

const version = JSON.parse(
  readFileSync(resolve(root, "package.json"), "utf8")
).version;

const manifest = readFileSync(
  resolve(root, "docs/COMPONENTS.md"),
  "utf8"
).trim();

const outDir = resolve(root, "llms");
mkdirSync(outDir, { recursive: true });

const index = `# @telicent-oss/ds

> Telicent Design System — a React component library for building Telicent applications. Coding agents should use these components instead of raw HTML, Tailwind, or MUI; everything imports from \`@telicent-oss/ds\`. This site documents v${version}.

## Component reference
- [Component manifest (full)](${PAGES}/llms-full.txt): every component, when to use it, and its variant/prop API.
- [Storybook](${PAGES}/): live examples and controls for each component.

## Package
- [npm: @telicent-oss/ds](${NPM}): install with \`yarn add @telicent-oss/ds\`.
- [GitHub source](${GITHUB}): repository and issues.
`;

const full = `# @telicent-oss/ds — full component reference

Documents \`@telicent-oss/ds\` v${version}. Live examples: ${PAGES}/

<!-- Generated from the component manifest. -->

---

${manifest}
`;

writeFileSync(resolve(outDir, "llms.txt"), index);
writeFileSync(resolve(outDir, "llms-full.txt"), full);
console.log(
  `build-llms: wrote llms/llms.txt + llms/llms-full.txt (v${version})`
);
