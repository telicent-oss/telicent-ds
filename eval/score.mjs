#!/usr/bin/env node
// Outcome eval scorer for the @telicent-oss/ds llms.txt doc.
//
// Typechecks each agent-produced candidate (.tsx) against the REAL DS types
// (dist/export.d.ts, via the paths map in tsconfig.eval.json) and runs the
// per-task usage checks from tasks.mjs. Deterministic — no model calls here.
//
// "compiles": zero type errors. Proves the answer imports real exports and
// passes valid props; catches hallucinated components and props — the failure
// mode a doc is supposed to prevent.
// "usage": the answer matches the idiomatic DS shape the doc teaches (e.g. the
// DS `variant` union, `errorText`, the composed AppBar) rather than generic MUI.
//
// Candidate filename convention: <taskId>.<condition>.tsx
//   e.g. appbar.withdoc.tsx, appbar.nodoc.tsx
import ts from "typescript";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { TASKS } from "./tasks.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const candidatesDir = resolve(here, "candidates");

if (!existsSync(candidatesDir)) {
  console.error(
    `No candidates dir at ${candidatesDir}. Generate candidates first — see eval/README.md.`
  );
  process.exit(1);
}

// Single source of truth for compiler options: the committed eval tsconfig.
const configPath = resolve(here, "tsconfig.eval.json");
const { config, error } = ts.readConfigFile(configPath, ts.sys.readFile);
if (error) {
  console.error(ts.flattenDiagnosticMessageText(error.messageText, "\n"));
  process.exit(1);
}
const parsed = ts.parseJsonConfigFileContent(config, ts.sys, here);
const options = { ...parsed.options, noEmit: true };

const taskById = new Map(TASKS.map((t) => [t.id, t]));

const typeErrors = (file) => {
  const program = ts.createProgram([file], options);
  return ts
    .getPreEmitDiagnostics(program)
    .filter((d) => d.file && resolve(d.file.fileName) === resolve(file))
    .map((d) => `TS${d.code}: ${ts.flattenDiagnosticMessageText(d.messageText, " ")}`);
};

const files = readdirSync(candidatesDir)
  .filter((f) => f.endsWith(".tsx"))
  .sort();

if (files.length === 0) {
  console.error(`No .tsx candidates in ${candidatesDir}. See eval/README.md.`);
  process.exit(1);
}

const results = [];
for (const file of files) {
  const [id, condition = "?"] = file.replace(/\.tsx$/, "").split(".");
  const task = taskById.get(id);
  const src = readFileSync(resolve(candidatesDir, file), "utf8");
  const errs = typeErrors(resolve(candidatesDir, file));
  const usage = (task?.usage ?? []).map((c) => ({ name: c.name, pass: c.test(src) }));
  results.push({ file, id, condition, errs, usage });
}

const pad = (s, n) => String(s).padEnd(n);
console.log(`\nEval: ${files.length} candidate(s) against dist/export.d.ts\n`);
for (const r of results) {
  const compiles = r.errs.length === 0;
  const usagePass = r.usage.filter((u) => u.pass).length;
  console.log(
    `${pad(r.file, 26)} compiles:${compiles ? "PASS" : `FAIL(${r.errs.length})`}  usage:${usagePass}/${r.usage.length}`
  );
  for (const u of r.usage) if (!u.pass) console.log(`    miss: ${u.name}`);
  for (const e of r.errs.slice(0, 4)) console.log(`    ${e}`);
}

// Summary per condition.
const byCondition = new Map();
for (const r of results) {
  const c = byCondition.get(r.condition) ?? { n: 0, compiles: 0, usagePass: 0, usageTotal: 0 };
  c.n += 1;
  if (r.errs.length === 0) c.compiles += 1;
  c.usagePass += r.usage.filter((u) => u.pass).length;
  c.usageTotal += r.usage.length;
  byCondition.set(r.condition, c);
}
console.log(`\nSummary by condition:`);
for (const [cond, c] of byCondition) {
  console.log(
    `  ${pad(cond, 10)} compiles ${c.compiles}/${c.n}   usage ${c.usagePass}/${c.usageTotal}`
  );
}
console.log("");
