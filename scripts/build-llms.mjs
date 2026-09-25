#!/usr/bin/env node
// Fills the props/stories tokens in docs/COMPONENTS.md (hand-edited) from
// dist/export.d.ts, and writes:
//   llms/llms.txt, llms/llms-full.txt — identical bytes, published to gh-pages
//   dist/llms.txt                     — ships in the npm package
// Last step of `yarn build`; `yarn generate:llms` reruns it alone.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
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

// Released iff this commit changed the version; anything unreadable is "unreleased".
const parentVersion = (() => {
  try {
    return JSON.parse(gitOut(["show", "HEAD~1:package.json"])).version ?? null;
  } catch {
    return null;
  }
})();

const documents =
  parentVersion !== null && parentVersion !== version
    ? `v${version}`
    : `unreleased, after v${version}`;

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

// YAML, not a markdown table: prop types contain `|`.
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
      // `props:Label=LookupKey` shows Label, resolves LookupKey's props.
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

// Also fires on a truncated dist/export.d.ts: it parses, so extract-props under-reports.
if (unresolved.length > 0) {
  console.error(
    `build-llms: unresolved token(s) in docs/COMPONENTS.md — no matching key in the props/stories maps:\n  ${unresolved.join(
      "\n  "
    )}`
  );
  process.exit(1);
}

// In the props map, referenced by no token:
//   gaps     — real export, named nowhere in docs/COMPONENTS.md
//   propless — named in prose, no props block (fine)
//   phantom  — a `*Props` type with no value export
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

// Appended so a new export shows up until a maintainer writes it a section above.
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

// Version at the top too: a reader fetching the llms.txt URL may stop before the footer.
const TITLE = /^(# .*\n)/;
if (!TITLE.test(manifest)) {
  console.error(
    "build-llms: docs/COMPONENTS.md must open with a '# ' title, so the version banner has somewhere to go."
  );
  process.exit(1);
}

const render = ({ banner, label }) => {
  const stamped = manifest.replace(
    TITLE,
    (title) => `${title}\n**VERSION:** ${banner}\n`
  );

  return `${stamped}${otherExports}

---

## Package and install

- Install with \`yarn add @telicent-oss/ds\`
- npm: ${NPM}
- Live examples (Storybook): ${PAGES}/
- Source and issues: ${GITHUB}

This reference documents @telicent-oss/ds ${label}.
`;
};

// Built from any branch, so it can be ahead of every release - redirect the reader.
const siteCopy = render({
  label: documents,
  banner: `This file documents @telicent-oss/ds ${documents}. If that is not the version installed in the project you are working on, do not build against it: read \`node_modules/@telicent-oss/ds/dist/llms.txt\` instead, which ships with the package and always matches what is installed.`,
});

// Must not redirect: the file it would point at is itself.
const packagedCopy = render({
  label: `v${version}`,
  banner: `This file documents @telicent-oss/ds v${version}. It shipped inside that package, so it matches the version installed in your project. If that package was built locally rather than installed from npm, the code may be newer than v${version}.`,
});

// ~10k tokens, so no index hop. llms-full.txt is the same bytes under the other
// name agents fetch by convention (Cursor, Windsurf, Copilot, Cline, Aider).
writeFileSync(resolve(outDir, "llms.txt"), siteCopy);
writeFileSync(resolve(outDir, "llms-full.txt"), siteCopy);

mkdirSync(resolve(root, "dist"), { recursive: true });
writeFileSync(resolve(root, "dist/llms.txt"), packagedCopy);

console.log(
  `build-llms: wrote llms/llms.txt + llms/llms-full.txt (${documents}) and dist/llms.txt (v${version})`
);
