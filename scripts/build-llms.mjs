#!/usr/bin/env node
// Generates the LLM-discovery file served from the GitHub Pages root:
//   llms/llms.txt — the full @telicent-oss/ds component manifest, self-contained.
// Canonical source: docs/COMPONENTS.md (edited by hand). An agent that fetches
// /llms.txt gets the entire component reference in one request.
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

const llms = `${manifest}

---

## Package and install

- Install with \`yarn add @telicent-oss/ds\`
- npm: ${NPM}
- Live examples (Storybook): ${PAGES}/
- Source and issues: ${GITHUB}

This reference documents @telicent-oss/ds v${version}.
`;

writeFileSync(resolve(outDir, "llms.txt"), llms);
console.log(`build-llms: wrote llms/llms.txt (v${version})`);
