import { z } from "zod";

export const SECTION_NAMES = [
  "framework_fit",
  "api_surface",
  "composability",
  "theming",
  "types",
  "docs",
  "necessity",
] as const;

export type SectionName = (typeof SECTION_NAMES)[number];

export const MUI_AXIS_SECTIONS: readonly SectionName[] = [
  "api_surface",
  "composability",
  "theming",
  "types",
] as const;

export const SEVERITIES = ["CRITICAL", "HIGH", "MODERATE", "LOW"] as const;
export const SeveritySchema = z.enum(SEVERITIES);
export type Severity = z.infer<typeof SeveritySchema>;

export const OverallSeveritySchema = z.enum([
  "CRITICAL",
  "HIGH",
  "MODERATE",
  "LOW",
  "NONE",
]);
export type OverallSeverity = z.infer<typeof OverallSeveritySchema>;

export const SEVERITY_RANK: Record<OverallSeverity, number> = {
  NONE: 0,
  LOW: 1,
  MODERATE: 2,
  HIGH: 3,
  CRITICAL: 4,
};

export const ScoreSchema = z.union([
  z.string().regex(/^([1-9]|10)\/10$/),
  z.literal("n/a"),
]);
export type Score = z.infer<typeof ScoreSchema>;

export const FindingSchema = z.object({
  severity: SeveritySchema,
  message: z.string().min(1),
  line: z.number().int().positive().optional(),
  rule_id: z.string().min(1).optional(),
});
export type Finding = z.infer<typeof FindingSchema>;

export const SectionSchema = z.object({
  score: ScoreSchema,
  findings: z.array(FindingSchema).default([]),
});
export type Section = z.infer<typeof SectionSchema>;

const sectionRecord = z.object({
  framework_fit: SectionSchema,
  api_surface: SectionSchema,
  composability: SectionSchema,
  theming: SectionSchema,
  types: SectionSchema,
  docs: SectionSchema,
  necessity: SectionSchema,
});

export const VerdictSchema = z.enum(["BLOCK", "WARN", "PASS"]);
export type Verdict = z.infer<typeof VerdictSchema>;

export const OverallSchema = z.object({
  severity: OverallSeveritySchema,
  mui_consistency: z.union([z.number(), z.literal("n/a")]),
  verdict: VerdictSchema,
});
export type Overall = z.infer<typeof OverallSchema>;

export const SidecarSchema = sectionRecord.extend({
  file: z.string(),
  source_sha: z.string().length(64),
  guidance_sha: z.string().length(64),
  weights_sha: z.string().length(64),
  overall: OverallSchema,
  status: z.literal("failed").optional(),
  error: z.string().optional(),
});
export type Sidecar = z.infer<typeof SidecarSchema>;

export const AgentResponseSchema = sectionRecord;
export type AgentResponse = z.infer<typeof AgentResponseSchema>;

export const PartialAgentResponseSchema = z.object({
  framework_fit: SectionSchema.optional(),
  api_surface: SectionSchema.optional(),
  composability: SectionSchema.optional(),
  theming: SectionSchema.optional(),
  types: SectionSchema.optional(),
  docs: SectionSchema.optional(),
  necessity: SectionSchema.optional(),
});
export type PartialAgentResponse = z.infer<typeof PartialAgentResponseSchema>;

export function fillMissingAxes(
  partial: PartialAgentResponse,
): AgentResponse {
  const empty: Section = { score: "n/a", findings: [] };
  return {
    framework_fit: partial.framework_fit ?? empty,
    api_surface: partial.api_surface ?? empty,
    composability: partial.composability ?? empty,
    theming: partial.theming ?? empty,
    types: partial.types ?? empty,
    docs: partial.docs ?? empty,
    necessity: partial.necessity ?? empty,
  };
}

export const GateModeSchema = z.enum(["ratchet", "strict"]);
export type GateMode = z.infer<typeof GateModeSchema>;

export const WeightsConfigSchema = z.object({
  sections: z.object({
    api_surface: z.number().nonnegative(),
    composability: z.number().nonnegative(),
    theming: z.number().nonnegative(),
    types: z.number().nonnegative(),
  }),
  thresholds: z.object({
    severity: SeveritySchema,
    numeric: z.number().min(0).max(10),
  }),
  gate: z
    .object({
      mode: GateModeSchema.default("ratchet"),
    })
    .default({ mode: "ratchet" }),
});
export type WeightsConfig = z.infer<typeof WeightsConfigSchema>;

export const DEFAULT_WEIGHTS: WeightsConfig = {
  sections: {
    api_surface: 1.0,
    composability: 1.0,
    theming: 1.0,
    types: 0.5,
  },
  thresholds: {
    severity: "HIGH",
    numeric: 6.0,
  },
  gate: {
    mode: "ratchet",
  },
};

export function severityFromFinding(finding: Finding): Severity {
  return finding.severity;
}

export function parseScore(score: Score): number | null {
  if (score === "n/a") return null;
  const [num] = score.split("/");
  return Number(num);
}
