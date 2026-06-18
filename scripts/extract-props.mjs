#!/usr/bin/env node
// Type-only prop extractor for @telicent-oss/ds.
// Reads the rolled-up declaration (dist/export.d.ts), and for every `*Props`
// type returns the props THIS repo declares — prop name, type (incl. literal
// unions like variant="primary"|...), and required/optional. build-llms.mjs
// renders them as YAML in llms.txt.
// Inherited MUI/React/DOM props are dropped via each property's declaration
// file: anything declared under node_modules is inherited, not ours.
//
// No dependence on JSDoc/doc comments and no new npm dependency — uses the
// `typescript` compiler API already in the toolchain. Run `yarn build` first
// so dist/export.d.ts exists.
//
// loadProps(dtsPath) does all file IO and type-checker work, so importing this
// module is side-effect free and unit tests can point it at a fixture .d.ts.
import { fileURLToPath } from "node:url";
import { dirname, resolve, basename } from "node:path";
import ts from "typescript";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
export const defaultDtsPath = resolve(root, "dist/export.d.ts");

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

const isOwn = (sym) =>
  (sym.getDeclarations() ?? []).some(
    (d) => !d.getSourceFile().fileName.includes("node_modules")
  );

// MUI emits `T & T` for some handlers (a bivariance hack); the duplicate member
// is noise. Drop exact-duplicate members split on top-level `&` only. `<`/`>`
// track generics; the `>` in a `=>` arrow is not a closing bracket.
export const dedupeIntersection = (s) => {
  const members = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(" || c === "[" || c === "{" || c === "<") depth++;
    else if (c === ")" || c === "]" || c === "}") depth--;
    else if (c === ">" && s[i - 1] !== "=") depth--;
    else if (depth === 0 && c === "&" && s[i - 1] === " " && s[i + 1] === " ") {
      members.push(s.slice(start, i).trim());
      start = i + 1;
    }
  }
  members.push(s.slice(start).trim());
  if (members.length < 2) return s;
  const seen = new Set();
  const unique = [];
  for (const m of members) {
    if (seen.has(m)) continue;
    seen.add(m);
    unique.push(m);
  }
  // MUI's bivariance hack yields `(sig) & (widerSig)` — distinct call signatures
  // for one handler. Keep the most complete (longest) rather than show both.
  if (unique.length >= 2 && unique.every((m) => m.includes("=>"))) {
    return unique.reduce((a, b) => (b.length > a.length ? b : a));
  }
  return unique.join(" & ");
};

// Cut at a token boundary so a clipped type is never malformed mid-identifier.
export const truncateType = (s, max) => {
  if (s.length <= max) return s;
  const head = s.slice(0, max);
  const cut = Math.max(
    head.lastIndexOf(", "),
    head.lastIndexOf(" | "),
    head.lastIndexOf(" & "),
    head.lastIndexOf(" ")
  );
  return `${cut > 0 ? head.slice(0, cut) : head} ...`;
};

// Binds the prop/value-export readers to one declaration file. All file IO and
// type-checker construction happen here, so importing the module stays pure and
// tests can target a fixture .d.ts. Throws (rather than process.exit) when the
// file is absent, so callers and tests can handle it.
export const loadProps = (dtsPath = defaultDtsPath) => {
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
    throw new Error(
      `extract-props: ${dtsPath} not found — run \`yarn build\` first.`
    );
  }

  const aliasMap = buildAliasMap(sf);
  const cleanAliases = (s) =>
    s.replace(/default_\d+/g, (token) => aliasMap.get(token) ?? token);

  const renderType = (sym) => {
    const decl = sym.valueDeclaration ?? (sym.getDeclarations() ?? [])[0];
    const t = checker.getTypeOfSymbolAtLocation(sym, decl);
    let s = checker
      .typeToString(t, decl, ts.TypeFormatFlags.NoTruncation)
      .replace(/\s+/g, " ")
      .trim();
    // dayjs uses `export =`, so its `Dayjs` named import resolves to `any` in
    // this declaration-only program. The declared (syntactic) type is correct.
    if (s === "any" && decl?.type) s = decl.type.getText().replace(/\s+/g, " ").trim();
    s = cleanAliases(s);
    // typeToString emits absolute `import("/abs/path").Member` for unnameable
    // types; strip the qualifier so no local filesystem path leaks into output.
    s = s.replace(/import\("[^"]*"\)\./g, "");
    s = dedupeIntersection(s);
    return truncateType(s, 120);
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

  const getPropsByComponent = () => {
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
  const getValueExportNames = () => {
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

  return { getPropsByComponent, getValueExportNames };
};
