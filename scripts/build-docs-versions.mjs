#!/usr/bin/env node
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const packageJsonPath = resolve(scriptDir, "..", "package.json");
const outPath = resolve(
  scriptDir,
  "..",
  "src",
  "docs",
  "generated",
  "mui-versions.json",
);

const PACKAGES = [
  { pkg: "@mui/material", purpose: "MUI Material — core components." },
  {
    pkg: "@mui/lab",
    purpose: "MUI Lab — experimental components used by DS internals.",
  },
  {
    pkg: "@mui/x-date-pickers",
    purpose: "Backs the DS's DatePicker and DateTimePicker.",
  },
  { pkg: "@emotion/react", purpose: "MUI's styling engine." },
  {
    pkg: "@emotion/styled",
    purpose: "Emotion's styled-components API, companion to @emotion/react.",
  },
];

const pkg = JSON.parse(await readFile(packageJsonPath, "utf-8"));
const deps = { ...pkg.dependencies, ...pkg.peerDependencies };

const rows = PACKAGES.map(({ pkg, purpose }) => ({
  pkg,
  range: deps[pkg] ?? "(not declared)",
  purpose,
}));

await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, `${JSON.stringify(rows, null, 2)}\n`);
console.log(`Wrote ${outPath} (${rows.length} entries).`);
