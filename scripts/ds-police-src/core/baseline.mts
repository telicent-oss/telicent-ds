import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { z } from "zod";
import {
  SECTION_NAMES,
  SectionName,
  SEVERITIES,
  Severity,
} from "../types.mts";

const FILE = ".ds-police-baseline.json";

const SeverityCountsSchema = z.object({
  CRITICAL: z.number().int().nonnegative(),
  HIGH: z.number().int().nonnegative(),
  MODERATE: z.number().int().nonnegative(),
  LOW: z.number().int().nonnegative(),
});

const AxisCountsSchema = z.object({
  framework_fit: SeverityCountsSchema,
  api_surface: SeverityCountsSchema,
  composability: SeverityCountsSchema,
  theming: SeverityCountsSchema,
  types: SeverityCountsSchema,
  docs: SeverityCountsSchema,
  necessity: SeverityCountsSchema,
});

export const BaselineSchema = z.object({
  version: z.literal(2),
  axes: AxisCountsSchema,
  failed: z.number().int().nonnegative(),
  blocked: z.number().int().nonnegative(),
  updated_at: z.string(),
});
export type Baseline = z.infer<typeof BaselineSchema>;

export type AxisCounts = z.infer<typeof AxisCountsSchema>;

export interface VerdictCounts {
  axes: AxisCounts;
  failed: number;
  blocked: number;
}

export type RatchetDecision =
  | { kind: "established"; current: VerdictCounts }
  | { kind: "stable"; current: VerdictCounts }
  | {
      kind: "ratcheted";
      baseline: VerdictCounts;
      current: VerdictCounts;
    }
  | {
      kind: "regressed";
      baseline: VerdictCounts;
      current: VerdictCounts;
      regressedCells: RegressedCell[];
    };

export interface RegressedCell {
  axis: SectionName | "failed";
  severity: Severity | null;
  baseline: number;
  current: number;
}

export function emptyAxisCounts(): AxisCounts {
  const empty: Partial<AxisCounts> = {};
  for (const name of SECTION_NAMES) {
    empty[name] = { CRITICAL: 0, HIGH: 0, MODERATE: 0, LOW: 0 };
  }
  return empty as AxisCounts;
}

export function emptyVerdictCounts(): VerdictCounts {
  return { axes: emptyAxisCounts(), failed: 0, blocked: 0 };
}

export function baselinePath(cwd: string): string {
  return resolve(cwd, FILE);
}

export async function readBaseline(cwd: string): Promise<Baseline | null> {
  const path = baselinePath(cwd);
  if (!existsSync(path)) return null;
  const raw = await readFile(path, "utf8");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }
  const result = BaselineSchema.safeParse(parsed);
  return result.success ? result.data : null;
}

export async function writeBaseline(
  cwd: string,
  counts: VerdictCounts,
): Promise<void> {
  const baseline: Baseline = {
    version: 2,
    axes: counts.axes,
    failed: counts.failed,
    blocked: counts.blocked,
    updated_at: new Date().toISOString(),
  };
  await writeFile(
    baselinePath(cwd),
    `${JSON.stringify(baseline, null, 2)}\n`,
    "utf8",
  );
}

function diffCells(
  baseline: VerdictCounts,
  current: VerdictCounts,
): { regressed: RegressedCell[]; improved: number } {
  const regressed: RegressedCell[] = [];
  let improved = 0;

  for (const axis of SECTION_NAMES) {
    for (const sev of SEVERITIES) {
      const b = baseline.axes[axis][sev];
      const c = current.axes[axis][sev];
      if (c > b) regressed.push({ axis, severity: sev, baseline: b, current: c });
      else if (c < b) improved += 1;
    }
  }
  if (current.failed > baseline.failed) {
    regressed.push({
      axis: "failed",
      severity: null,
      baseline: baseline.failed,
      current: current.failed,
    });
  } else if (current.failed < baseline.failed) {
    improved += 1;
  }

  return { regressed, improved };
}

export function decideRatchet(
  baseline: Baseline | null,
  current: VerdictCounts,
): RatchetDecision {
  if (baseline === null) return { kind: "established", current };
  const baseCounts: VerdictCounts = {
    axes: baseline.axes,
    failed: baseline.failed,
    blocked: baseline.blocked,
  };
  const { regressed, improved } = diffCells(baseCounts, current);
  if (regressed.length > 0)
    return { kind: "regressed", baseline: baseCounts, current, regressedCells: regressed };
  if (improved > 0)
    return { kind: "ratcheted", baseline: baseCounts, current };
  return { kind: "stable", current };
}
