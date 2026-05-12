import { describe, expect, it } from "vitest";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  AxisCounts,
  Baseline,
  decideRatchet,
  emptyAxisCounts,
  emptyVerdictCounts,
  readBaseline,
  VerdictCounts,
  writeBaseline,
} from "../../../scripts/ds-police-src/core/baseline.mts";

function counts(
  fill: Partial<{
    blocked: number;
    failed: number;
    axes: Partial<Record<keyof AxisCounts, Partial<Record<"CRITICAL" | "HIGH" | "MODERATE" | "LOW", number>>>>;
  }> = {},
): VerdictCounts {
  const out = emptyVerdictCounts();
  if (fill.blocked !== undefined) out.blocked = fill.blocked;
  if (fill.failed !== undefined) out.failed = fill.failed;
  if (fill.axes) {
    for (const [axis, sevs] of Object.entries(fill.axes)) {
      const ax = axis as keyof AxisCounts;
      for (const [sev, n] of Object.entries(sevs ?? {})) {
        out.axes[ax][sev as keyof AxisCounts[typeof ax]] = n as number;
      }
    }
  }
  return out;
}

function baselineFromCounts(c: VerdictCounts): Baseline {
  return {
    version: 2,
    axes: c.axes,
    failed: c.failed,
    blocked: c.blocked,
    updated_at: "2026-04-25T00:00:00.000Z",
  };
}

describe("decideRatchet", () => {
  it("establishes when no baseline exists", () => {
    const decision = decideRatchet(null, counts({ blocked: 5, failed: 1 }));
    expect(decision.kind).toBe("established");
  });

  it("stable when counts match baseline", () => {
    const c = counts({ blocked: 1, axes: { api_surface: { HIGH: 2 } } });
    const decision = decideRatchet(baselineFromCounts(c), c);
    expect(decision.kind).toBe("stable");
  });

  it("ratchets down when an axis cell decreases", () => {
    const base = counts({ axes: { api_surface: { HIGH: 3 } } });
    const cur = counts({ axes: { api_surface: { HIGH: 2 } } });
    const decision = decideRatchet(baselineFromCounts(base), cur);
    expect(decision.kind).toBe("ratcheted");
  });

  it("ratchets down when failed decreases", () => {
    const base = counts({ failed: 2 });
    const cur = counts({ failed: 0 });
    const decision = decideRatchet(baselineFromCounts(base), cur);
    expect(decision.kind).toBe("ratcheted");
  });

  it("regresses when an axis cell increases", () => {
    const base = counts({ axes: { theming: { CRITICAL: 0 } } });
    const cur = counts({ axes: { theming: { CRITICAL: 1 } } });
    const decision = decideRatchet(baselineFromCounts(base), cur);
    expect(decision.kind).toBe("regressed");
    if (decision.kind === "regressed") {
      expect(decision.regressedCells).toContainEqual({
        axis: "theming",
        severity: "CRITICAL",
        baseline: 0,
        current: 1,
      });
    }
  });

  it("regresses when failed increases", () => {
    const base = counts({ failed: 1 });
    const cur = counts({ failed: 2 });
    const decision = decideRatchet(baselineFromCounts(base), cur);
    expect(decision.kind).toBe("regressed");
  });

  it("masks improvement: regression on one cell wins over improvement on another", () => {
    const base = counts({
      axes: { types: { LOW: 3 }, theming: { CRITICAL: 0 } },
    });
    const cur = counts({
      axes: { types: { LOW: 0 }, theming: { CRITICAL: 1 } },
    });
    const decision = decideRatchet(baselineFromCounts(base), cur);
    expect(decision.kind).toBe("regressed");
  });
});

describe("readBaseline / writeBaseline", () => {
  it("returns null when file is missing", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ds-baseline-"));
    expect(await readBaseline(dir)).toBeNull();
  });

  it("returns null when JSON is invalid", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ds-baseline-"));
    writeFileSync(join(dir, ".ds-police-baseline.json"), "{ not json");
    expect(await readBaseline(dir)).toBeNull();
  });

  it("returns null when schema does not match (legacy v1)", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ds-baseline-"));
    writeFileSync(
      join(dir, ".ds-police-baseline.json"),
      JSON.stringify({ blocked: 4, failed: 0, updated_at: "x" }),
    );
    expect(await readBaseline(dir)).toBeNull();
  });

  it("round-trips counts via writeBaseline + readBaseline", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ds-baseline-"));
    const c = counts({
      blocked: 4,
      failed: 2,
      axes: { api_surface: { HIGH: 3, LOW: 1 } },
    });
    await writeBaseline(dir, c);
    const baseline = await readBaseline(dir);
    expect(baseline?.blocked).toBe(4);
    expect(baseline?.failed).toBe(2);
    expect(baseline?.axes.api_surface.HIGH).toBe(3);
    expect(baseline?.version).toBe(2);
  });

  it("writes JSON with trailing newline", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ds-baseline-"));
    await writeBaseline(dir, emptyVerdictCounts());
    const raw = readFileSync(join(dir, ".ds-police-baseline.json"), "utf8");
    expect(raw.endsWith("\n")).toBe(true);
  });
});

describe("emptyAxisCounts", () => {
  it("returns zeroed grid for all sections × severities", () => {
    const a = emptyAxisCounts();
    expect(a.framework_fit.CRITICAL).toBe(0);
    expect(a.necessity.LOW).toBe(0);
  });
});
