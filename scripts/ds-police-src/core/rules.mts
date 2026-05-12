import { Finding, SectionName, Severity } from "../types.mts";
import { FileShape } from "./file-shape.mts";

interface RuleMatch {
  axis: SectionName;
  finding: Finding;
}

interface RuleDef {
  rule_id: string;
  axis: SectionName;
  severity: Severity;
  pattern: RegExp;
  message: string;
  appliesTo?: readonly FileShape[];
}

const RULES: RuleDef[] = [
  {
    rule_id: "api_surface/no-narrow",
    axis: "api_surface",
    severity: "CRITICAL",
    pattern: /\bOmit<\s*[A-Za-z_][A-Za-z0-9_]*Props\b/,
    message: "narrows MUI props via Omit; spread instead",
  },
  {
    rule_id: "api_surface/no-style-prop",
    axis: "api_surface",
    severity: "CRITICAL",
    pattern: /^\s*style\??:\s*[^=]/m,
    message: "custom 'style' prop shadows the DOM style attribute",
  },
  {
    rule_id: "theming/no-hex-literal",
    axis: "theming",
    severity: "MODERATE",
    pattern: /(?<!['"`])#[0-9a-fA-F]{6}\b(?!['"`])/,
    message: "hex colour literal; use theme.palette",
  },
  {
    rule_id: "theming/no-inline-style",
    axis: "theming",
    severity: "MODERATE",
    pattern: /\sstyle=\{\{/,
    message: "inline JSX style={{...}}; use sx prop with theme",
  },
];

const NEEDS_FORWARD_REF: RegExp = /forwardRef\s*[<(]/;
const HAS_JSX: RegExp = /<\/?[A-Za-z][A-Za-z0-9.]*[\s/>]/;

function lineForIndex(source: string, idx: number): number {
  let line = 1;
  for (let i = 0; i < idx && i < source.length; i++) {
    if (source.charCodeAt(i) === 10) line += 1;
  }
  return line;
}

export interface PrefilterInputs {
  source: string;
  shape: FileShape;
}

export function runRules(inputs: PrefilterInputs): RuleMatch[] {
  const matches: RuleMatch[] = [];
  for (const rule of RULES) {
    if (rule.appliesTo && !rule.appliesTo.includes(inputs.shape)) continue;
    const m = rule.pattern.exec(inputs.source);
    if (!m) continue;
    matches.push({
      axis: rule.axis,
      finding: {
        severity: rule.severity,
        message: rule.message,
        line: lineForIndex(inputs.source, m.index),
        rule_id: rule.rule_id,
      },
    });
  }

  if (
    inputs.shape === "component" &&
    HAS_JSX.test(inputs.source) &&
    !NEEDS_FORWARD_REF.test(inputs.source)
  ) {
    matches.push({
      axis: "composability",
      finding: {
        severity: "HIGH",
        message: "component does not forwardRef",
        rule_id: "composability/forward-ref",
      },
    });
  }

  return matches;
}

export function groupByAxis(
  matches: readonly RuleMatch[],
): Record<string, Finding[]> {
  const out: Record<string, Finding[]> = {};
  for (const m of matches) {
    if (!out[m.axis]) out[m.axis] = [];
    out[m.axis].push(m.finding);
  }
  return out;
}
