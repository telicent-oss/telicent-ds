import {
  AgentResponse,
  AgentResponseSchema,
  fillMissingAxes,
  PartialAgentResponse,
  PartialAgentResponseSchema,
} from "../types.mts";

export class AgentResponseError extends Error {
  constructor(
    message: string,
    public readonly raw: string,
  ) {
    super(message);
  }
}

const FENCE = /```(?:json)?\s*\n([\s\S]+?)\n```/;

export function extractJsonBlock(stdout: string): string {
  const match = FENCE.exec(stdout);
  if (match) return match[1];
  const trimmed = stdout.trim();
  if (trimmed.startsWith("{") && trimmed.endsWith("}")) return trimmed;
  throw new AgentResponseError(
    "no JSON block found in agent response",
    stdout,
  );
}

export function parseAgentResponse(
  stdout: string,
  options: { partial?: boolean } = {},
): AgentResponse {
  const block = extractJsonBlock(stdout);
  let parsed: unknown;
  try {
    parsed = JSON.parse(block);
  } catch (err) {
    throw new AgentResponseError(
      `agent response is not valid JSON: ${String(err)}`,
      stdout,
    );
  }
  if (options.partial) {
    const r = PartialAgentResponseSchema.safeParse(parsed);
    if (!r.success) {
      throw new AgentResponseError(
        `agent response did not match partial schema: ${r.error.message}`,
        stdout,
      );
    }
    return fillMissingAxes(r.data);
  }
  const result = AgentResponseSchema.safeParse(parsed);
  if (!result.success) {
    throw new AgentResponseError(
      `agent response did not match schema: ${result.error.message}`,
      stdout,
    );
  }
  return result.data;
}

export function parsePartialAgentResponse(
  stdout: string,
): PartialAgentResponse {
  const block = extractJsonBlock(stdout);
  let parsed: unknown;
  try {
    parsed = JSON.parse(block);
  } catch (err) {
    throw new AgentResponseError(
      `agent response is not valid JSON: ${String(err)}`,
      stdout,
    );
  }
  const r = PartialAgentResponseSchema.safeParse(parsed);
  if (!r.success) {
    throw new AgentResponseError(
      `agent response did not match partial schema: ${r.error.message}`,
      stdout,
    );
  }
  return r.data;
}
