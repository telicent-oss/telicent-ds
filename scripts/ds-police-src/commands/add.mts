import { stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, relative, isAbsolute } from "node:path";
import fg from "fast-glob";
import {
  sidecarPathFor,
  writeEmptySidecar,
} from "../core/sidecar.mts";
import { selectFiles, FileChoice } from "../ui/fzf.mts";

const SUPPORTED_EXTS = [".ts", ".tsx"];
const EXCLUDED_SUFFIXES = [
  ".test.ts",
  ".test.tsx",
  ".stories.ts",
  ".stories.tsx",
  ".d.ts",
];

export interface AddOptions {
  all?: boolean;
  includeTests?: boolean;
}

function isSupported(file: string): boolean {
  return SUPPORTED_EXTS.some((ext) => file.endsWith(ext));
}

function isExcluded(file: string): boolean {
  return EXCLUDED_SUFFIXES.some((suffix) => file.endsWith(suffix));
}

async function expandTarget(
  target: string,
  cwd: string,
  includeTests: boolean,
): Promise<string[]> {
  const filter = (paths: string[]): string[] =>
    paths.filter((p) => isSupported(p) && (includeTests || !isExcluded(p)));

  if (target.includes("*") || target.includes("?")) {
    const matched = await fg(target, { cwd, absolute: true });
    return filter(matched);
  }
  const abs = isAbsolute(target) ? target : resolve(cwd, target);
  if (!existsSync(abs)) {
    throw new Error(`path not found: ${target}`);
  }
  const st = await stat(abs);
  if (st.isFile()) {
    if (!isSupported(abs)) {
      throw new Error(
        `unsupported file type: ${target} (allowed: ${SUPPORTED_EXTS.join(", ")})`,
      );
    }
    if (!includeTests && isExcluded(abs)) {
      throw new Error(
        `excluded file type: ${target} (use --include-tests to enrol test/story/.d.ts files)`,
      );
    }
    return [abs];
  }
  const matched = await fg("**/*.{ts,tsx}", { cwd: abs, absolute: true });
  return filter(matched);
}

export async function runAdd(
  targets: string[],
  options: AddOptions,
  cwd: string,
): Promise<{ enrolled: string[]; alreadyEnrolled: string[] }> {
  if (targets.length === 0) {
    throw new Error("no path provided");
  }

  const includeTests = options.includeTests ?? false;
  const allCandidates: string[] = [];
  for (const target of targets) {
    const expanded = await expandTarget(target, cwd, includeTests);
    allCandidates.push(...expanded);
  }
  const dedup = Array.from(new Set(allCandidates));

  const choices: FileChoice[] = dedup.map((abs) => {
    const rel = relative(cwd, abs);
    const sidecar = sidecarPathFor(abs);
    const enrolled = existsSync(sidecar);
    return {
      path: abs,
      label: enrolled ? `${rel} [enrolled]` : rel,
      disabled: enrolled ? "[enrolled]" : undefined,
    };
  });

  let selected: string[];
  if (options.all || dedup.length === 1 || hasGlobSyntax(targets)) {
    selected = choices
      .filter((c) => !c.disabled)
      .map((c) => c.path);
  } else {
    selected = await selectFiles(choices);
  }

  const alreadyEnrolled = choices
    .filter((c) => c.disabled)
    .map((c) => c.path);

  for (const file of selected) {
    const sidecar = sidecarPathFor(file);
    if (!existsSync(sidecar)) {
      await writeEmptySidecar(sidecar);
    }
  }

  return { enrolled: selected, alreadyEnrolled };
}

function hasGlobSyntax(targets: string[]): boolean {
  return targets.some((t) => t.includes("*") || t.includes("?"));
}
