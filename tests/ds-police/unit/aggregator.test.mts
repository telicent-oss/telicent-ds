import { describe, expect, it } from "vitest";
import {
  computeOverall,
  computeVerdict,
  maxSeverityOf,
  muiConsistency,
  overallSeverity,
} from "../../../scripts/ds-police-src/core/aggregator.mts";
import {
  AgentResponse,
  DEFAULT_WEIGHTS,
  Finding,
  Severity,
  WeightsConfig,
} from "../../../scripts/ds-police-src/types.mts";

const empty = { score: "n/a" as const, findings: [] };
const allEmpty: AgentResponse = {
  framework_fit: empty,
  api_surface: empty,
  composability: empty,
  theming: empty,
  types: empty,
  docs: empty,
  necessity: empty,
};

function f(severity: Severity, message = "x"): Finding {
  return { severity, message };
}

function withFinding(
  base: AgentResponse,
  section: keyof AgentResponse,
  finding: Finding,
): AgentResponse {
  return {
    ...base,
    [section]: {
      score: base[section].score,
      findings: [...base[section].findings, finding],
    },
  };
}

describe("maxSeverityOf", () => {
  it("returns NONE for empty findings", () => {
    expect(maxSeverityOf([])).toBe("NONE");
  });
  it("picks the highest severity", () => {
    expect(maxSeverityOf([f("LOW"), f("HIGH"), f("MODERATE")])).toBe("HIGH");
    expect(
      maxSeverityOf([f("LOW"), f("HIGH"), f("CRITICAL")]),
    ).toBe("CRITICAL");
  });
});

describe("overallSeverity", () => {
  it("is NONE when no findings", () => {
    expect(overallSeverity(allEmpty)).toBe("NONE");
  });
  it("aggregates max across sections", () => {
    let s = withFinding(allEmpty, "api_surface", f("HIGH"));
    s = withFinding(s, "composability", f("CRITICAL"));
    s = withFinding(s, "docs", f("LOW"));
    expect(overallSeverity(s)).toBe("CRITICAL");
  });
});

describe("muiConsistency", () => {
  it("returns n/a when every MUI-axis section is n/a", () => {
    expect(muiConsistency(allEmpty, DEFAULT_WEIGHTS)).toBe("n/a");
  });

  it("excludes n/a from the denominator (SC-007)", () => {
    const sections: AgentResponse = {
      ...allEmpty,
      api_surface: { score: "4/10", findings: [] },
      composability: { score: "10/10", findings: [] },
      theming: { score: "10/10", findings: [] },
      types: { score: "n/a", findings: [] },
    };
    const equalWeights: WeightsConfig = {
      sections: {
        api_surface: 1,
        composability: 1,
        theming: 1,
        types: 1,
      },
      thresholds: { severity: "HIGH", numeric: 6 },
    };
    expect(muiConsistency(sections, equalWeights)).toBe(8);
  });

  it("honours configured weights", () => {
    const sections: AgentResponse = {
      ...allEmpty,
      api_surface: { score: "2/10", findings: [] },
      composability: { score: "10/10", findings: [] },
      theming: { score: "n/a", findings: [] },
      types: { score: "n/a", findings: [] },
    };
    const cfg: WeightsConfig = {
      sections: {
        api_surface: 3,
        composability: 1,
        theming: 1,
        types: 1,
      },
      thresholds: { severity: "HIGH", numeric: 6 },
    };
    expect(muiConsistency(sections, cfg)).toBe(4);
  });
});

describe("computeVerdict", () => {
  it("BLOCK on severity >= threshold", () => {
    expect(
      computeVerdict("HIGH", 9, DEFAULT_WEIGHTS),
    ).toBe("BLOCK");
    expect(
      computeVerdict("CRITICAL", 10, DEFAULT_WEIGHTS),
    ).toBe("BLOCK");
  });
  it("BLOCK on numeric below threshold", () => {
    expect(
      computeVerdict("LOW", 5, DEFAULT_WEIGHTS),
    ).toBe("BLOCK");
  });
  it("WARN when only minor severity and numeric ok", () => {
    expect(
      computeVerdict("LOW", 8, DEFAULT_WEIGHTS),
    ).toBe("WARN");
    expect(
      computeVerdict("MODERATE", 8, DEFAULT_WEIGHTS),
    ).toBe("WARN");
  });
  it("PASS when nothing wrong", () => {
    expect(
      computeVerdict("NONE", 9, DEFAULT_WEIGHTS),
    ).toBe("PASS");
    expect(
      computeVerdict("NONE", "n/a", DEFAULT_WEIGHTS),
    ).toBe("PASS");
  });
});

describe("computeOverall (SC-006)", () => {
  it("combines severity, mui_consistency, verdict", () => {
    const sections: AgentResponse = {
      ...allEmpty,
      api_surface: { score: "4/10", findings: [f("CRITICAL", "x")] },
      composability: { score: "10/10", findings: [] },
      theming: { score: "10/10", findings: [] },
      types: { score: "8/10", findings: [] },
    };
    const overall = computeOverall(sections, DEFAULT_WEIGHTS);
    expect(overall.severity).toBe("CRITICAL");
    expect(overall.verdict).toBe("BLOCK");
    expect(overall.mui_consistency).toBeGreaterThan(0);
  });
});
