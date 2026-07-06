#!/usr/bin/env node
// Installs the telicent-ds Claude skill into a project's .claude/skills/telicent-ds/,
// version-stamped from this package. Runs from @telicent-oss/ds's postinstall when the
// package is installed as a dependency, and is exposed as the `telicent-ds-install-skill`
// bin for manual and global installs.
//
// Two invariants:
//   - never fails the install: any error is reported and the process still exits 0
//   - never downgrades silently: a newer skill already present is kept unless --force
//     or an interactive yes

import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  cpSync,
  realpathSync,
} from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";
import { homedir } from "node:os";
import { createInterface } from "node:readline";

const SKILL = "telicent-ds";
const STAMP = ".telicent-ds-version";

const pkgRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillSrc = join(pkgRoot, ".claude", "skills", SKILL);

const args = process.argv.slice(2);
const has = (f) => args.includes(f);

if (has("--help") || has("-h")) {
  process.stdout.write(
`telicent-ds-install-skill — install the telicent-ds Claude skill

USAGE
  telicent-ds-install-skill [--target <dir>] [--global] [--force]

  (no flags)      install into <project>/.claude/skills/${SKILL}/
                  project = $INIT_CWD (the dir where install ran) or cwd
  --target <dir>  install into <dir>/.claude/skills/${SKILL}/
  --global        install into ~/.claude/skills/${SKILL}/
  --force         install even if a newer skill is already there
  --help

Version-stamped from the installed @telicent-oss/ds. Re-run any time; it is
idempotent and never downgrades a newer skill without --force.
`);
  process.exit(0);
}

const force = has("--force");

// Never break an install: report and exit 0.
function bail(msg) {
  process.stderr.write(`telicent-ds skill: ${msg}\n`);
  process.exit(0);
}

function readStamp(dir) {
  const f = join(dir, STAMP);
  return existsSync(f) ? readFileSync(f, "utf8").trim() || null : null;
}

// numeric-first semver compare; a release outranks its own prerelease.
// returns -1 / 0 / 1 for a<b / a==b / a>b.
function cmp(a, b) {
  const parse = (v) => {
    const [core, pre = ""] = String(v).split("-");
    return { nums: core.split(".").map((n) => parseInt(n, 10) || 0), pre };
  };
  const A = parse(a);
  const B = parse(b);
  for (let i = 0; i < 3; i++) {
    const d = (A.nums[i] || 0) - (B.nums[i] || 0);
    if (d) return d < 0 ? -1 : 1;
  }
  if (A.pre === B.pre) return 0;
  if (!A.pre) return 1;
  if (!B.pre) return -1;
  return A.pre < B.pre ? -1 : 1;
}

async function confirm(question) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) return false;
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  try {
    const answer = await new Promise((res) => rl.question(question, res));
    return /^y(es)?$/i.test(answer.trim());
  } finally {
    rl.close();
  }
}

async function main() {
  if (!existsSync(skillSrc)) bail(`source missing at ${skillSrc}`);

  const version = JSON.parse(
    readFileSync(join(pkgRoot, "package.json"), "utf8")
  ).version;

  let skillsRoot;
  let base = null;
  const global = has("--global");
  if (global) {
    skillsRoot = join(homedir(), ".claude", "skills");
  } else {
    const ti = args.indexOf("--target");
    base = resolve(ti !== -1 ? args[ti + 1] : process.env.INIT_CWD || process.cwd());
    if (!base) bail("could not determine target directory");
    skillsRoot = join(base, ".claude", "skills");
  }

  const dest = join(skillsRoot, SKILL);

  // Skip when the target IS this package's own repo (developing @telicent-oss/ds): the
  // skill already lives in-tree there and Claude Code auto-discovers it. Comparing the
  // project root to the package root also stops cpSync copying the source onto itself.
  if (!global) {
    try {
      if (realpathSync(base) === realpathSync(pkgRoot)) process.exit(0);
    } catch {
      // target does not exist yet — fine, fall through and create it
    }
  }

  // In CI the automatic (postinstall) path stays hands-off, so it never dirties a tree
  // that a `git diff --exit-code` gate would then reject. Explicit bin runs still apply.
  if (process.env.npm_lifecycle_event === "postinstall" && process.env.CI && !force) {
    process.exit(0);
  }

  const existing = readStamp(dest);
  if (existing && !force) {
    const c = cmp(version, existing);
    if (c === 0) process.exit(0);
    if (c < 0) {
      const ok = await confirm(
        `telicent-ds skill: downgrade v${existing} -> v${version} in ${dest}? [y/N] `
      );
      if (!ok) {
        process.stdout.write(
          `telicent-ds skill: kept newer v${existing}, skipped v${version}; ` +
            `run 'npx --package @telicent-oss/ds telicent-ds-install-skill --force' to override\n`
        );
        process.exit(0);
      }
    }
  }

  mkdirSync(dest, { recursive: true });
  cpSync(skillSrc, dest, { recursive: true });
  writeFileSync(join(dest, STAMP), `${version}\n`);
  process.stdout.write(`telicent-ds skill: installed v${version} -> ${dest}\n`);
}

main().catch((e) => bail(e && e.message ? e.message : String(e)));
