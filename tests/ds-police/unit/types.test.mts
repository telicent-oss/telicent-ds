import { describe, expect, it } from "vitest";
import {
  AgentResponseSchema,
  FindingSchema,
  ScoreSchema,
  SidecarSchema,
  WeightsConfigSchema,
} from "../../../scripts/ds-police-src/types.mts";

describe("ScoreSchema", () => {
  it("accepts N/10 and n/a", () => {
    expect(ScoreSchema.parse("1/10")).toBe("1/10");
    expect(ScoreSchema.parse("10/10")).toBe("10/10");
    expect(ScoreSchema.parse("n/a")).toBe("n/a");
  });

  it("rejects malformed scores", () => {
    expect(() => ScoreSchema.parse("0/10")).toThrow();
    expect(() => ScoreSchema.parse("11/10")).toThrow();
    expect(() => ScoreSchema.parse("5")).toThrow();
    expect(() => ScoreSchema.parse("N/A")).toThrow();
  });
});

describe("FindingSchema", () => {
  it("accepts a structured finding with required fields", () => {
    const f = FindingSchema.parse({ severity: "CRITICAL", message: "bad" });
    expect(f.severity).toBe("CRITICAL");
    expect(f.message).toBe("bad");
  });
  it("accepts optional line and rule_id", () => {
    const f = FindingSchema.parse({
      severity: "HIGH",
      message: "x",
      line: 12,
      rule_id: "api/no-narrow",
    });
    expect(f.line).toBe(12);
    expect(f.rule_id).toBe("api/no-narrow");
  });
  it("rejects unknown severity, missing message, non-positive line", () => {
    expect(() =>
      FindingSchema.parse({ severity: "WARN", message: "x" }),
    ).toThrow();
    expect(() =>
      FindingSchema.parse({ severity: "LOW" }),
    ).toThrow();
    expect(() =>
      FindingSchema.parse({ severity: "LOW", message: "x", line: 0 }),
    ).toThrow();
  });
  it("rejects severity-prefixed strings (legacy format)", () => {
    expect(() => FindingSchema.parse("CRITICAL: bad")).toThrow();
  });
});

describe("AgentResponseSchema", () => {
  it("requires all 7 sections", () => {
    const partial = { framework_fit: { score: "5/10", findings: [] } };
    expect(() => AgentResponseSchema.parse(partial)).toThrow();
  });
});

describe("SidecarSchema", () => {
  it("accepts a complete sidecar", () => {
    const sha = "a".repeat(64);
    const section = { score: "5/10", findings: [] };
    const sidecar = {
      file: "x.tsx",
      source_sha: sha,
      guidance_sha: sha,
      weights_sha: sha,
      framework_fit: section,
      api_surface: section,
      composability: section,
      theming: section,
      types: section,
      docs: section,
      necessity: section,
      overall: { severity: "NONE", mui_consistency: 5, verdict: "PASS" },
    };
    expect(() => SidecarSchema.parse(sidecar)).not.toThrow();
  });
});

describe("WeightsConfigSchema", () => {
  it("accepts a valid config", () => {
    const cfg = {
      sections: {
        api_surface: 1,
        composability: 1,
        theming: 1,
        types: 0.5,
      },
      thresholds: { severity: "HIGH", numeric: 6 },
    };
    expect(() => WeightsConfigSchema.parse(cfg)).not.toThrow();
  });
});
