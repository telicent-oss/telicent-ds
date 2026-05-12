import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import fg from "fast-glob";
import { sha256, normaliseBytes } from "./hash.mts";

export interface GuidanceBundle {
  markdown: string;
  sha: string;
  files: string[];
}

const PATTERN = "*.md";

export async function loadGuidance(
  repoRoot: string,
): Promise<GuidanceBundle> {
  const dir = resolve(repoRoot, "guidance");
  if (!existsSync(dir)) {
    const empty = Buffer.from("", "utf8");
    return { markdown: "", sha: sha256(empty), files: [] };
  }
  const files = await fg(PATTERN, { cwd: dir, absolute: true });
  files.sort();
  const parts: string[] = [];
  for (const file of files) {
    const raw = await readFile(file, "utf8");
    const rel = file.slice(dir.length + 1);
    parts.push(`# ===== ${rel} =====\n${raw}\n`);
  }
  const markdown = parts.join("\n");
  const sha = sha256(normaliseBytes(markdown));
  return { markdown, sha, files };
}
