import { execa } from "execa";
import { resolve } from "node:path";

export interface ChangedFilesOptions {
  base?: string;
  cwd: string;
}

export class GitNotAvailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GitNotAvailableError";
  }
}

async function runGit(args: string[], cwd: string): Promise<string> {
  const r = await execa("git", args, { cwd, reject: false });
  if (r.exitCode !== 0) {
    throw new GitNotAvailableError(
      `git ${args.join(" ")} exit ${r.exitCode}: ${r.stderr.trim()}`,
    );
  }
  return r.stdout;
}

async function tryRunGit(args: string[], cwd: string): Promise<string | null> {
  const r = await execa("git", args, { cwd, reject: false });
  if (r.exitCode !== 0) return null;
  return r.stdout;
}

function parseLines(out: string): string[] {
  return out
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
}

export async function defaultBase(cwd: string): Promise<string> {
  const remoteMain = await tryRunGit(
    ["rev-parse", "--verify", "--quiet", "origin/main"],
    cwd,
  );
  if (remoteMain) return "origin/main";
  const localMain = await tryRunGit(
    ["rev-parse", "--verify", "--quiet", "main"],
    cwd,
  );
  if (localMain) return "main";
  return "HEAD";
}

export interface UnifiedDiffOptions {
  cwd: string;
  filePath: string;
  base?: string;
  contextLines?: number;
}

export async function unifiedDiff(
  options: UnifiedDiffOptions,
): Promise<string | null> {
  const { cwd, filePath } = options;
  const ctx = options.contextLines ?? 20;
  const base = options.base ?? (await defaultBase(cwd));

  const args = [
    "diff",
    `--unified=${ctx}`,
    `${base}...HEAD`,
    "--",
    filePath,
  ];
  const out = await tryRunGit(args, cwd);
  if (out === null || out.trim().length === 0) {
    const work = await tryRunGit(
      ["diff", `--unified=${ctx}`, "HEAD", "--", filePath],
      cwd,
    );
    if (work && work.trim().length > 0) return work;
    return null;
  }
  return out;
}

export async function changedFiles(
  options: ChangedFilesOptions,
): Promise<Set<string>> {
  const { cwd } = options;
  const base = options.base ?? (await defaultBase(cwd));

  const collected = new Set<string>();
  const sources = [
    ["diff", "--name-only", `${base}...HEAD`],
    ["diff", "--name-only", "HEAD"],
    ["diff", "--name-only", "--cached"],
    ["ls-files", "--others", "--exclude-standard"],
  ];

  for (const args of sources) {
    const out = await tryRunGit(args, cwd);
    if (out === null) continue;
    for (const line of parseLines(out)) {
      collected.add(resolve(cwd, line));
    }
  }

  return collected;
}
