#!/usr/bin/env node
// Type-only prop extractor prototype for @telicent-oss/ds.
// Reads the rolled-up declaration (dist/export.d.ts), and for every `*Props`
// type renders a markdown table of the props THIS repo declares — prop name,
// type (incl. literal unions like variant="primary"|...), and required/optional.
// Inherited MUI/React/DOM props are dropped via each property's declaration
// file: anything declared under node_modules is inherited, not ours.
//
// No dependence on JSDoc/doc comments and no new npm dependency — uses the
// `typescript` compiler API already in the toolchain. Run `yarn build` first
// so dist/export.d.ts exists.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve, basename } from "node:path";
import ts from "typescript";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const dtsPath = resolve(root, "dist/export.d.ts");

const program = ts.createProgram([dtsPath], {
  target: ts.ScriptTarget.ES2020,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  esModuleInterop: true,
  jsx: ts.JsxEmit.ReactJSX,
  skipLibCheck: true,
  noEmit: true,
  baseUrl: root,
});
const checker = program.getTypeChecker();
const sf = program.getSourceFile(dtsPath);
if (!sf) {
  console.error(`extract-props: ${dtsPath} not found — run \`yarn build\` first.`);
  process.exit(1);
}

// api-extractor rolls default imports up to opaque `default_N` aliases; map each
// back to a readable name so no `default_N` token leaks into the rendered types.
const buildAliasMap = (source) => {
  const map = new Map();
  ts.forEachChild(source, (node) => {
    if (
      !ts.isImportDeclaration(node) ||
      !node.importClause?.namedBindings ||
      !ts.isNamedImports(node.importClause.namedBindings) ||
      !ts.isStringLiteral(node.moduleSpecifier)
    ) {
      return;
    }
    const mod = node.moduleSpecifier.text;
    for (const el of node.importClause.namedBindings.elements) {
      if (el.propertyName?.text !== "default") continue;
      const local = el.name.text;
      if (!/^default_\d+$/.test(local)) continue;
      map.set(local, mod === "react" ? "React" : basename(mod));
    }
  });
  return map;
};

const aliasMap = buildAliasMap(sf);

const cleanAliases = (s) =>
  s.replace(/default_\d+/g, (token) => aliasMap.get(token) ?? token);

const isOwn = (sym) =>
  (sym.getDeclarations() ?? []).some(
    (d) => !d.getSourceFile().fileName.includes("node_modules")
  );

const renderType = (sym) => {
  const decl = sym.valueDeclaration ?? (sym.getDeclarations() ?? [])[0];
  const t = checker.getTypeOfSymbolAtLocation(sym, decl);
  let s = checker.typeToString(t, decl, ts.TypeFormatFlags.NoTruncation);
  s = s.replace(/\s+/g, " ").trim();
  s = cleanAliases(s);
  // typeToString emits absolute `import("/abs/path").Member` for unnameable
  // types; strip the qualifier so no local filesystem path leaks into output.
  s = s.replace(/import\("[^"]*"\)\./g, "");
  if (s.length > 120) s = s.slice(0, 117) + "...";
  return s;
};

const collectComponents = () => {
  const components = [];
  ts.forEachChild(sf, (node) => {
    if (!ts.isTypeAliasDeclaration(node) && !ts.isInterfaceDeclaration(node)) return;
    const name = node.name.text;
    if (!/Props$/.test(name)) return;

    const sym = checker.getSymbolAtLocation(node.name);
    if (!sym) return;
    const type = checker.getDeclaredTypeOfSymbol(sym);

    const props = checker
      .getPropertiesOfType(type)
      .filter(isOwn)
      .map((p) => ({
        name: p.getName(),
        type: renderType(p),
        required: (p.flags & ts.SymbolFlags.Optional) === 0,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    components.push({ component: name.replace(/Props$/, ""), propsType: name, props });
  });
  components.sort((a, b) => a.component.localeCompare(b.component));
  return components;
};

export const getPropsByComponent = () => {
  const map = new Map();
  for (const c of collectComponents()) {
    map.set(
      c.component,
      c.props.map((p) => ({ name: p.name, type: p.type, required: p.required }))
    );
  }
  return map;
};

// Names exported as runtime values (const/function/class or re-export), not
// just types. A `FooProps` type with no matching value export is a type-only
// artifact, not a real component — this set lets the build tell them apart.
export const getValueExportNames = () => {
  const names = new Set();
  ts.forEachChild(sf, (node) => {
    const exported = node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);
    if (exported && ts.isVariableStatement(node)) {
      for (const d of node.declarationList.declarations) {
        if (ts.isIdentifier(d.name)) names.add(d.name.text);
      }
    } else if (exported && (ts.isFunctionDeclaration(node) || ts.isClassDeclaration(node)) && node.name) {
      names.add(node.name.text);
    } else if (ts.isExportDeclaration(node) && node.exportClause && ts.isNamedExports(node.exportClause)) {
      for (const el of node.exportClause.elements) names.add(el.name.text);
    }
  });
  return names;
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const components = collectComponents();

  const lines = ["# @telicent-oss/ds — props (type-derived)", ""];
  for (const c of components) {
    lines.push(`## ${c.component}`, "");
    if (c.props.length === 0) {
      lines.push("_No own props — all props inherited from the underlying MUI/DOM element._", "");
      continue;
    }
    lines.push("| Prop | Type | Required |", "| --- | --- | --- |");
    for (const p of c.props) {
      lines.push(`| \`${p.name}\` | \`${p.type.replace(/\|/g, "\\|")}\` | ${p.required ? "yes" : "no"} |`);
    }
    lines.push("");
  }

  const outDir = resolve(root, "llms");
  mkdirSync(outDir, { recursive: true });
  const outPath = resolve(outDir, "props.md");
  writeFileSync(outPath, lines.join("\n"));

  const own = components.filter((c) => c.props.length > 0).length;
  console.log(
    `extract-props: ${components.length} *Props types, ${own} with own props -> llms/props.md`
  );
}
