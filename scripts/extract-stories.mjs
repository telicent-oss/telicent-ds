#!/usr/bin/env node
// Story-signal extractor for @telicent-oss/ds.
// Walks every *.stories.tsx and, per component, records: the Storybook title,
// each story EXPORT NAME (the maintainer-curated set of real states —
// Primary, Disabled, Sizes, WithIcon...), the concrete `args` each story uses,
// and a deep link to the live Storybook page. No dependence on doc comments —
// the export names and args literals come from the AST.
//
// Story names recover the editorially-important props the type-only own-props
// filter drops: a `Sizes` story proves `size` is a real dimension even though
// `size` is inherited from MUI and absent from the own-props table.
//
// loadStories(srcDir) does the directory walk; parseStoryFile(text, ...) is the
// pure per-file core, so importing this module is side-effect free and unit
// tests can feed story source straight in.
import { readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join, relative, basename, sep } from "node:path";
import ts from "typescript";

const here = dirname(fileURLToPath(import.meta.url));
const defaultRoot = resolve(here, "..");
const defaultSrcDir = resolve(defaultRoot, "src");

const PAGES = "https://telicent-oss.github.io/telicent-ds";
const REPO = "https://github.com/telicent-oss/telicent-ds";

// The published file is generated per branch: the main deploy serves the site
// root and links to main; a branch preview lives under /<branch> and links to
// that branch. GITHUB_REF_NAME is the pushed branch in CI; default to main.
export const resolveLinkBases = (
  branch = process.env.GITHUB_REF_NAME || "main"
) => ({
  branch,
  storybookBase: branch === "main" ? PAGES : `${PAGES}/${branch}`,
  ghBlobBase: `${REPO}/blob/${branch}`,
});

// Storybook's id slug: lowercase, non-alphanumerics -> "-", trim repeats.
export const slug = (s) =>
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
  // Function-valued args are plumbing, not usage signals: inline handlers and
  // Storybook spies (`onClick: fn()` from @storybook/test) tell an agent nothing
  // about what to pass, and `fn()` reads like real code it might copy. Drop them
  // — the props block already shows the handler prop exists.
  if (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) return null;
  if (ts.isCallExpression(node)) return null;
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

const fallbackTitle = (componentObj, file, srcDir) => {
  const componentProp = propOf(componentObj, "component");
  if (componentProp && ts.isIdentifier(componentProp.initializer)) {
    return `Component Library/${componentProp.initializer.text}`;
  }
  const rel = relative(srcDir, file).replace(/\.stories\.tsx$/, "");
  const parts = rel.split(sep).filter(Boolean);
  const name = parts[parts.length - 1] ?? basename(file, ".stories.tsx");
  return `Component Library/${name}`;
};

// Parse one story file's source into a component entry, or null when it exports
// no stories. Pure: source text in, data out, no file IO.
export const parseStoryFile = (text, fileName, opts = {}) => {
  const {
    root = defaultRoot,
    srcDir = defaultSrcDir,
    storybookBase = PAGES,
    ghBlobBase = `${REPO}/blob/main`,
  } = opts;

  const sf = ts.createSourceFile(fileName, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

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

  if (stories.length === 0) return null;
  if (!title) title = fallbackTitle(metaObj, fileName, srcDir);

  return {
    title,
    file: relative(root, fileName),
    docsUrl: `${storybookBase}/?path=/docs/${slug(title)}--docs`,
    sourceUrl: `${ghBlobBase}/${relative(root, fileName)}`,
    defaultArgs,
    stories: stories.map((s) => ({
      ...s,
      url: `${storybookBase}/?path=/story/${slug(title)}--${slug(s.name)}`,
    })),
  };
};

// Walks srcDir for *.stories.tsx and parses each. All file IO is here, so
// importing the module stays pure and tests can call parseStoryFile directly.
export const loadStories = (srcDir = defaultSrcDir, opts = {}) => {
  const { root = defaultRoot, branch } = opts;
  const { storybookBase, ghBlobBase } = resolveLinkBases(branch);

  const storyFiles = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) walk(full);
      else if (entry.endsWith(".stories.tsx")) storyFiles.push(full);
    }
  };
  walk(srcDir);

  const components = [];
  for (const file of storyFiles) {
    const text = ts.sys.readFile(file) ?? "";
    const c = parseStoryFile(text, file, { root, srcDir, storybookBase, ghBlobBase });
    if (c) components.push(c);
  }
  components.sort((a, b) => a.title.localeCompare(b.title));

  return {
    components,
    getStoriesByTitle: () => new Map(components.map((c) => [c.title, c])),
  };
};
