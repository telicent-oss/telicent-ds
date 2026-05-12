import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import fg from "fast-glob";
import YAML from "yaml";
import {
  AgentResponse,
  Overall,
  SECTION_NAMES,
  Section,
  severityFromFinding,
  Sidecar,
  SidecarSchema,
} from "../types.mts";
import {
  emptyVerdictCounts,
  VerdictCounts,
} from "./baseline.mts";

const SIDECAR_SUFFIX = ".ds-score.md";
const SIDECAR_GLOB = `**/*${SIDECAR_SUFFIX}`;
const SIDECAR_IGNORES = ["**/node_modules/**", "**/dist/**"];

export class SidecarParseError extends Error {
  constructor(
    public readonly path: string,
    public readonly cause: unknown,
  ) {
    super(`failed to parse sidecar ${path}: ${String(cause)}`);
  }
}

export async function isEmptySidecar(path: string): Promise<boolean> {
  if (!existsSync(path)) return false;
  const raw = await readFile(path, "utf8");
  return raw.trim().length === 0;
}

export async function readSidecar(path: string): Promise<Sidecar> {
  const raw = await readFile(path, "utf8");
  let parsed: unknown;
  try {
    parsed = YAML.parse(raw);
  } catch (err) {
    throw new SidecarParseError(path, err);
  }
  const result = SidecarSchema.safeParse(parsed);
  if (!result.success) {
    throw new SidecarParseError(path, result.error);
  }
  return result.data;
}

export async function readRawSidecar(path: string): Promise<string> {
  return readFile(path, "utf8");
}

export async function writeSidecar(
  path: string,
  sidecar: Sidecar,
): Promise<void> {
  const yaml = YAML.stringify(sidecar, { lineWidth: 0 });
  await writeFile(path, yaml, "utf8");
}

export async function writeEmptySidecar(path: string): Promise<void> {
  await writeFile(path, "", "utf8");
}

export function sidecarPathFor(sourcePath: string): string {
  return `${sourcePath}${SIDECAR_SUFFIX}`;
}

export function sourcePathForSidecar(sidecarPath: string): string {
  return sidecarPath.endsWith(SIDECAR_SUFFIX)
    ? sidecarPath.slice(0, -SIDECAR_SUFFIX.length)
    : sidecarPath;
}

export async function enumerateSidecars(cwd: string): Promise<string[]> {
  return fg(SIDECAR_GLOB, {
    cwd,
    absolute: true,
    ignore: SIDECAR_IGNORES,
  });
}

export async function tallyVerdicts(cwd: string): Promise<VerdictCounts> {
  const paths = await enumerateSidecars(cwd);
  const counts = emptyVerdictCounts();
  for (const path of paths) {
    if (await isEmptySidecar(path)) continue;
    let sidecar: Sidecar;
    try {
      sidecar = await readSidecar(path);
    } catch {
      counts.failed += 1;
      continue;
    }
    if (sidecar.status === "failed") {
      counts.failed += 1;
      continue;
    }
    if (sidecar.overall.verdict === "BLOCK") counts.blocked += 1;
    for (const axis of SECTION_NAMES) {
      const section = sidecar[axis];
      for (const finding of section.findings) {
        const sev = severityFromFinding(finding);
        counts.axes[axis][sev] += 1;
      }
    }
  }
  return counts;
}

export const emptySection: Section = { score: "n/a", findings: [] };

export interface SidecarShaInputs {
  file: string;
  source_sha: string;
  guidance_sha: string;
  weights_sha: string;
}

export function composeSidecar(
  shas: SidecarShaInputs,
  sections: AgentResponse,
  overall: Overall,
): Sidecar {
  return { ...shas, ...sections, overall };
}

export function composeFailedSidecar(
  shas: SidecarShaInputs,
  errorMsg: string,
): Sidecar {
  const sections = Object.fromEntries(
    SECTION_NAMES.map((name) => [name, emptySection]),
  ) as AgentResponse;
  return {
    ...shas,
    ...sections,
    overall: { severity: "NONE", mui_consistency: "n/a", verdict: "WARN" },
    status: "failed",
    error: errorMsg,
  };
}
