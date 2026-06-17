#!/usr/bin/env node
// Story-signal extractor prototype for @telicent-oss/ds.
// Walks every *.stories.tsx and, per component, records: the Storybook title,
// each story EXPORT NAME (the maintainer-curated set of real states —
// Primary, Disabled, Sizes, WithIcon...), the concrete `args` each story uses,
// and a deep link to the live Storybook page. No dependence on doc comments —
// the export names and args literals come from the AST.
//
// Story names recover the editorially-important props the type-only own-props
// filter drops: a `Sizes` story proves `size` is a real dimension even though
// `size` is inherited from MUI and absent from the own-props table.
import { writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve, join, relative, basename, sep } from "node:path";
import ts from "typescript";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const srcDir = resolve(root, "src");
const STORYBOOK = "https://telicent-oss.github.io/telicent-ds";
const GH_BLOB = "https://github.com/telicent-oss/telicent-ds/blob/main";

const storyFiles = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (entry.endsWith(".stories.tsx")) storyFiles.push(full);
  }
};
walk(srcDir);

// Storybook's id slug: lowercase, non-alphanumerics -> "-", trim repeats.
const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// Returns a terse, readable value or null to drop the arg (undefined, or code
// too complex to show as a value — render functions, JSX). Keeps the scalar
// signal (variant="primary", size=24) and skips truncated code fragments.
const literal = (node) => {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return JSON.stringify(node.text);
  if (ts.isNumericLiteral(node)) return node.text;
  if (node.kind === ts.SyntaxKind.TrueKeyword) return "true";
  if (node.kind === ts.SyntaxKind.FalseKeyword) return "false";
  if (node.kind === ts.SyntaxKind.NullKeyword) return "null";
  if (ts.isIdentifier(node)) return node.text === "undefined" ? null : node.text;
  if (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) return "fn";
  if (ts.isCallExpression(node)) return node.expression.getText() + "()";
  if (ts.isArrayLiteralExpression(node)) return "[…]";
  if (ts.isObjectLiteralExpression(node)) return "{…}";
  if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node) || ts.isJsxFragment(node)) return "<jsx>";
  if (ts.isPropertyAccessExpression(node)) return node.getText();
  return null;
};

// `const meta = {...} satisfies Meta<...>` / `... as Meta<...>` wraps the object
// literal in a satisfies/as expression, so peel those off before reading props.
const unwrap = (node) => {
  let n = node;
  while (n && (ts.isSatisfiesExpression(n) || ts.isAsExpression(n))) n = n.expression;
  return n;
};

const objectOf = (initializer) => {
  const n = unwrap(initializer);
  return n && ts.isObjectLiteralExpression(n) ? n : null;
};

const propOf = (obj, key) =>
  obj?.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText() === key);

const argsOf = (initializer) => {
  const obj = objectOf(initializer);
  if (!obj) return [];
  const argsProp = propOf(obj, "args");
  const argsObj = argsProp && objectOf(argsProp.initializer);
  if (!argsObj) return [];
  return argsObj.properties
    .filter(ts.isPropertyAssignment)
    .map((p) => {
      const value = literal(p.initializer);
      return value === null ? null : `${p.name.getText()}=${value}`;
    })
    .filter(Boolean);
};

const fallbackTitle = (componentObj, file) => {
  const componentProp = propOf(componentObj, "component");
  if (componentProp && ts.isIdentifier(componentProp.initializer)) {
    return `Component Library/${componentProp.initializer.text}`;
  }
  const rel = relative(srcDir, file).replace(/\.stories\.tsx$/, "");
  const parts = rel.split(sep).filter(Boolean);
  const name = parts[parts.length - 1] ?? basename(file, ".stories.tsx");
  return `Component Library/${name}`;
};

const components = [];
for (const file of storyFiles) {
  const text = ts.sys.readFile(file) ?? "";
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

  let title = null;
  let defaultArgs = [];
  let metaObj = null;
  const stories = [];

  ts.forEachChild(sf, (node) => {
    if (ts.isVariableStatement(node)) {
      const isExported = node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);
      for (const decl of node.declarationList.declarations) {
        const name = decl.name.getText();
        if (name === "meta") {
          metaObj = objectOf(decl.initializer);
          const t = propOf(metaObj, "title");
          if (t && ts.isStringLiteral(t.initializer)) title = t.initializer.text;
          defaultArgs = argsOf(decl.initializer);
        } else if (isExported && /^[A-Z]/.test(name)) {
          stories.push({ name, args: argsOf(decl.initializer) });
        }
      }
    }
  });

  if (stories.length === 0) continue;
  if (!title) title = fallbackTitle(metaObj, file);
  components.push({
    title,
    file: relative(root, file),
    docsUrl: `${STORYBOOK}/?path=/docs/${slug(title)}--docs`,
    sourceUrl: `${GH_BLOB}/${relative(root, file)}`,
    defaultArgs,
    stories: stories.map((s) => ({
      ...s,
      url: `${STORYBOOK}/?path=/story/${slug(title)}--${slug(s.name)}`,
    })),
  });
}
components.sort((a, b) => a.title.localeCompare(b.title));

export const getStoriesByTitle = () => {
  return new Map(components.map((c) => [c.title, c]));
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const lines = ["# @telicent-oss/ds — demonstrated states (from stories)", ""];
  for (const c of components) {
    lines.push(`## ${c.title}`, "");
    lines.push(`Live: ${c.docsUrl}`);
    lines.push(`Source: ${c.sourceUrl}`);
    if (c.defaultArgs.length) lines.push(`Default args: ${c.defaultArgs.join(", ")}`);
    lines.push("", "Demonstrated states:");
    for (const s of c.stories) {
      const a = s.args.length ? ` — ${s.args.join(", ")}` : "";
      lines.push(`- ${s.name}${a}`);
    }
    lines.push("");
  }

  const outDir = resolve(root, "llms");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "stories.md"), lines.join("\n"));
  console.log(
    `extract-stories: ${components.length} components, ` +
      `${components.reduce((n, c) => n + c.stories.length, 0)} stories -> llms/stories.md`
  );
}
