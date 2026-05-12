import { SECTION_NAMES, SectionName } from "../types.mts";

export const SYSTEM_RULES = `You are a strict design-system code reviewer. You judge React/MUI components against the provided guidance. You MUST reply with a single fenced JSON code block matching the schema. No prose outside the JSON block. Do not invent sections or severities. Severities are exactly: CRITICAL, HIGH, MODERATE, LOW.`;

const SCHEMA_FOOTER = `Each section value MUST be:
{
  "score": "N/10" | "n/a",       // N is an integer 1..10, or "n/a" if not applicable
  "findings": [                   // zero or more finding objects
    {
      "severity": "CRITICAL" | "HIGH" | "MODERATE" | "LOW",
      "message": "<one-sentence description>",
      "line": <integer 1-based line number where the issue occurs, optional>,
      "rule_id": "<short stable identifier from guidance, optional>"
    }
  ]
}

Findings MUST be JSON objects, not strings. Do NOT prefix the message with the severity (severity is in its own field). Do NOT compute overall severity, overall scores, or verdict — the orchestrator handles aggregation.`;

export function buildResponseSchema(
  axes: readonly SectionName[] = SECTION_NAMES,
): string {
  return `Return a JSON object with these exact keys (one per section):
${axes.map((name) => `  - "${name}"`).join("\n")}

${SCHEMA_FOOTER}`;
}

export const RESPONSE_SCHEMA = buildResponseSchema(SECTION_NAMES);

export const TASK_PREAMBLE = `Score the following file against the listed sections. For each section, return either a score "N/10" or "n/a", and a list of finding objects per the schema above. Always include severity and message. Include line when you can pin the issue to a single line in the source. Include rule_id when guidance defines one. If a section does not apply (e.g. theming for a non-styled component), use "n/a" with empty findings. Reply with one fenced JSON block, no other text.`;

export interface PromptParts {
  guidance: string;
  filePath: string;
  source: string;
  axes?: readonly SectionName[];
}

export interface PrefixParts {
  guidance: string;
  axes?: readonly SectionName[];
}

export function buildSharedPrefix(parts: PrefixParts): string {
  const schema = parts.axes
    ? buildResponseSchema(parts.axes)
    : RESPONSE_SCHEMA;
  return [
    `[SYSTEM]`,
    SYSTEM_RULES,
    ``,
    `[GUIDANCE]`,
    parts.guidance,
    ``,
    `[RESPONSE SCHEMA]`,
    schema,
    ``,
    `[TASK]`,
    TASK_PREAMBLE,
    ``,
  ].join("\n");
}

export function buildPrompt(parts: PromptParts): string {
  const lang = inferLanguage(parts.filePath);
  return [
    buildSharedPrefix({ guidance: parts.guidance, axes: parts.axes }),
    `[FILE]`,
    parts.filePath,
    "```" + lang,
    parts.source,
    "```",
  ].join("\n");
}

export interface DiffPromptParts {
  guidance: string;
  filePath: string;
  diff: string;
  priorFindingsYaml: string;
  axes?: readonly SectionName[];
}

const DIFF_TASK_PREAMBLE = `You are re-scoring a file given a unified diff and the prior scoring. RULES:
- Update sections whose content the diff materially changes.
- For sections the diff does not affect, OMIT them from the response (the orchestrator preserves prior values).
- Use the listed axes only. Findings format unchanged.
Reply with one fenced JSON block, partial response object, no other text.`;

export function buildDiffPrompt(parts: DiffPromptParts): string {
  const schema = parts.axes
    ? buildResponseSchema(parts.axes)
    : RESPONSE_SCHEMA;
  return [
    `[SYSTEM]`,
    SYSTEM_RULES,
    ``,
    `[GUIDANCE]`,
    parts.guidance,
    ``,
    `[RESPONSE SCHEMA]`,
    schema,
    ``,
    `[TASK]`,
    DIFF_TASK_PREAMBLE,
    ``,
    `[PRIOR SCORING]`,
    parts.priorFindingsYaml,
    ``,
    `[FILE]`,
    parts.filePath,
    `[DIFF]`,
    "```diff",
    parts.diff,
    "```",
  ].join("\n");
}

export function buildWarmPrompt(parts: PrefixParts): string {
  return [
    buildSharedPrefix(parts),
    `[WARM-UP]`,
    "Reply with the literal token OK and nothing else.",
  ].join("\n");
}

function inferLanguage(path: string): string {
  if (path.endsWith(".tsx")) return "tsx";
  if (path.endsWith(".ts")) return "ts";
  if (path.endsWith(".mts")) return "ts";
  return "";
}
