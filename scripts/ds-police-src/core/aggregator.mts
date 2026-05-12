import {
  AgentResponse,
  Finding,
  MUI_AXIS_SECTIONS,
  Overall,
  OverallSeverity,
  SECTION_NAMES,
  SEVERITY_RANK,
  Section,
  Severity,
  Verdict,
  WeightsConfig,
  parseScore,
  severityFromFinding,
} from "../types.mts";

export function maxSeverityOf(findings: readonly Finding[]): OverallSeverity {
  if (findings.length === 0) return "NONE";
  let best: OverallSeverity = "NONE";
  for (const f of findings) {
    const sev: Severity = severityFromFinding(f);
    if (SEVERITY_RANK[sev] > SEVERITY_RANK[best]) best = sev;
  }
  return best;
}

export function overallSeverity(
  sections: AgentResponse,
): OverallSeverity {
  let best: OverallSeverity = "NONE";
  for (const name of SECTION_NAMES) {
    const sectionSeverity = maxSeverityOf(sections[name].findings);
    if (SEVERITY_RANK[sectionSeverity] > SEVERITY_RANK[best]) {
      best = sectionSeverity;
    }
  }
  return best;
}

export function muiConsistency(
  sections: AgentResponse,
  weights: WeightsConfig,
): number | "n/a" {
  let weightedSum = 0;
  let totalWeight = 0;
  for (const name of MUI_AXIS_SECTIONS) {
    const section: Section = sections[name];
    const value = parseScore(section.score);
    if (value === null) continue;
    const w = weights.sections[name];
    weightedSum += value * w;
    totalWeight += w;
  }
  if (totalWeight === 0) return "n/a";
  return Math.round((weightedSum / totalWeight) * 100) / 100;
}

export function computeVerdict(
  severity: OverallSeverity,
  mui: number | "n/a",
  weights: WeightsConfig,
): Verdict {
  const severityThresholdRank =
    SEVERITY_RANK[weights.thresholds.severity];
  const blocksOnSeverity =
    SEVERITY_RANK[severity] >= severityThresholdRank;
  const blocksOnNumeric =
    mui !== "n/a" && mui < weights.thresholds.numeric;
  if (blocksOnSeverity || blocksOnNumeric) return "BLOCK";
  if (severity !== "NONE") return "WARN";
  return "PASS";
}

export function computeOverall(
  sections: AgentResponse,
  weights: WeightsConfig,
): Overall {
  const severity = overallSeverity(sections);
  const mui = muiConsistency(sections, weights);
  const verdict = computeVerdict(severity, mui, weights);
  return { severity, mui_consistency: mui, verdict };
}
