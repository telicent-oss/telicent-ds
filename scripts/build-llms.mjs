#!/usr/bin/env node
// Generates the LLM-discovery files served from the GitHub Pages root:
//   llms/llms.txt      — the full @telicent-oss/ds component manifest, self-contained.
//   llms/llms-full.txt — identical bytes, under the name some agents fetch by convention.
// Canonical source: docs/COMPONENTS.md (edited by hand). The manifest is small
// (~10k tokens), so both files carry it whole; an agent gets the entire
// component reference in one request whichever name it fetches.
// The deploy-llms workflow publishes llms/ to the gh-pages root.
// Run locally via `yarn build:llms`.
// Requires dist/export.d.ts (run `yarn build` first) — extract-props reads it.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolveDocumentsLabel } from "./llms-version-label.mjs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { loadProps } from "./extract-props.mjs";
import { loadStories } from "./extract-stories.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

const PAGES = "https://telicent-oss.github.io/telicent-ds";
const NPM = "https://www.npmjs.com/package/@telicent-oss/ds";
const GITHUB = "https://github.com/telicent-oss/telicent-ds";

const version = JSON.parse(
  readFileSync(resolve(root, "package.json"), "utf8")
).version;

const gitOut = (args) => {
  try {
    return execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
};

const documents = resolveDocumentsLabel({
  version,
  git: gitOut,
  ref: process.env.GITHUB_REF_NAME,
});

const rawManifest = readFileSync(
  resolve(root, "docs/COMPONENTS.md"),
  "utf8"
).trim();

let getPropsByComponent;
let getValueExportNames;
try {
  ({ getPropsByComponent, getValueExportNames } = loadProps());
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
const { getStoriesByTitle } = loadStories();

const propsByComponent = getPropsByComponent();
const storiesByTitle = getStoriesByTitle();

// YAML, not a markdown table: prop types contain `|` (unions), which collides
// with table separators. A fenced block keyed by component also self-labels
// each prop set, so stacked blocks under one bullet stay distinguishable.
const yamlKey = (k) => (/^[A-Za-z_$][\w$]*$/.test(k) ? k : `'${k.replace(/'/g, "''")}'`);
const yamlStr = (s) => `'${s.replace(/'/g, "''")}'`;

const renderPropsBlock = (label, lookupKey) => {
  const props = propsByComponent.get(lookupKey);
  if (!props || props.length === 0) {
    return `\`\`\`yaml\n${label}: {} # no own props; all inherited from the underlying MUI/DOM element\n\`\`\``;
  }
  const lines = ["```yaml", `${label}:`];
  for (const p of props) {
    lines.push(`  ${yamlKey(p.name)}: {type: ${yamlStr(p.type)}, required: ${p.required}}`);
  }
  lines.push("```");
  return lines.join("\n");
};

const renderStoriesBlock = (title) => {
  const c = storiesByTitle.get(title);
  const lines = [`Live: ${c.docsUrl}`, `Usage: ${c.sourceUrl}`];
  if (c.defaultArgs.length) lines.push(`Default args: ${c.defaultArgs.join(", ")}`);
  lines.push("", "Demonstrated states:");
  for (const s of c.stories) {
    const a = s.args.length ? ` — ${s.args.join(", ")}` : "";
    lines.push(`- ${s.name}${a}`);
  }
  return lines.join("\n");
};

const referencedComponents = new Set();
const unresolved = [];

const manifest = rawManifest.replace(
  /^<!-- (props|stories):(.+?) -->$/gm,
  (line, kind, key) => {
    if (kind === "props") {
      // `props:Label=LookupKey` shows Label but resolves LookupKey's props, for
      // components whose exported props type name differs from the import name.
      const eq = key.indexOf("=");
      const label = eq >= 0 ? key.slice(0, eq).trim() : key;
      const lookupKey = eq >= 0 ? key.slice(eq + 1).trim() : key;
      const props = propsByComponent.get(lookupKey);
      if (props === undefined) {
        unresolved.push(`props:${lookupKey}`);
        return line;
      }
      referencedComponents.add(lookupKey);
      return renderPropsBlock(label, lookupKey);
    }
    if (!storiesByTitle.has(key)) {
      unresolved.push(`stories:${key}`);
      return line;
    }
    return renderStoriesBlock(key);
  }
);

if (unresolved.length > 0) {
  console.error(
    `build-llms: unresolved token(s) in docs/COMPONENTS.md — no matching key in the props/stories maps:\n  ${unresolved.join(
      "\n  "
    )}`
  );
  process.exit(1);
}

// Components in the props map but referenced by no props token. Split three
// ways so real drift surfaces instead of hiding among noise:
//   gaps     — a real component export, not named anywhere in the manifest
//   propless — already named in the prose, just has no props block (fine)
//   phantom  — a `*Props` type with no value export, i.e. not a real component
const valueExports = getValueExportNames();
const namedInProse = (name) => new RegExp(`\\b${name}\\b`).test(rawManifest);

const gaps = [];
const propless = [];
const phantom = [];
for (const c of [...propsByComponent.keys()].filter((c) => !referencedComponents.has(c)).sort()) {
  if (!valueExports.has(c)) phantom.push(c);
  else if (namedInProse(c)) propless.push(c);
  else gaps.push(c);
}

// Undocumented real exports are auto-listed in an "Other exports" appendix
// (name + props) so the published reference stays complete by construction: a
// new export shows up here until a maintainer gives it a section above.
const otherExports = gaps.length
  ? `\n\n---\n\n## Other exports\n\nExported by \`@telicent-oss/ds\` but not yet given a section above. Auto-listed from the type surface (props only); a maintainer should fold these into the manifest.\n\n${gaps
      .map((c) => `* \`${c}\`:\n${renderPropsBlock(c, c)}`)
      .join("\n\n")}`
  : "";

if (gaps.length > 0) {
  console.warn(
    `build-llms: ${gaps.length} undocumented export(s) auto-listed under "Other exports":\n  ${gaps.join(
      ", "
    )}`
  );
}
if (propless.length > 0 || phantom.length > 0) {
  console.log(
    `build-llms: ignored ${propless.length} named-without-props + ${phantom.length} type-only (no value export)`
  );
}

const outDir = resolve(root, "llms");
mkdirSync(outDir, { recursive: true });

// The version goes at the TOP as well as the footer. This file is served at an
// llms.txt URL, a convention an agent may follow without ever loading the skill, and
// the header below tells it this is a complete reference. A reader that stops early
// must still see which version it holds. The wording has to hold for both copies:
// inside the package it always matches, so the instruction never fires; on the
// website it is usually ahead, so it does.
const versionBanner = `**VERSION:** This file documents @telicent-oss/ds ${documents}. If that is not the version installed in the project you are working on, do not build against it: read \`node_modules/@telicent-oss/ds/dist/llms.txt\` instead, which ships with the package and always matches what is installed.
`;

const withBanner = manifest.replace(
  /^(# .*\n)/,
  (title) => `${title}\n${versionBanner}`
);

// A silently missing banner is the whole failure this guards against: the file would
// still look complete while telling a reader nothing about which version it is.
if (withBanner === manifest) {
  console.error(
    "build-llms: docs/COMPONENTS.md must open with a '# ' title, so the version banner has somewhere to go."
  );
  process.exit(1);
}

const llmsFull = `${withBanner}${otherExports}

---

## Package and install

- Install with \`yarn add @telicent-oss/ds\`
- npm: ${NPM}
- Live examples (Storybook): ${PAGES}/
- Source and issues: ${GITHUB}

This reference documents @telicent-oss/ds ${documents}.
`;

// The manifest is ~10k tokens, small enough that an index pointing at a
// separate file would only add a fetch hop. So /llms.txt carries the manifest
// whole; /llms-full.txt is the same bytes under the name some tools fetch by
// convention (Cursor, Windsurf, Copilot, Cline, Aider).
writeFileSync(resolve(outDir, "llms.txt"), llmsFull);
writeFileSync(resolve(outDir, "llms-full.txt"), llmsFull);
console.log(`build-llms: wrote llms/llms.txt + llms/llms-full.txt (identical, ${documents})`);
