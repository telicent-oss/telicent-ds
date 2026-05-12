import { describe, expect, it } from "vitest";
import {
  AgentResponseError,
  parseAgentResponse,
} from "../../../scripts/ds-police-src/agent/response.mts";

const goodJson = `{
  "framework_fit": { "score": "5/10", "findings": [] },
  "api_surface":   { "score": "5/10", "findings": [] },
  "composability": { "score": "5/10", "findings": [] },
  "theming":       { "score": "n/a",  "findings": [] },
  "types":         { "score": "5/10", "findings": [] },
  "docs":          { "score": "5/10", "findings": [] },
  "necessity":     { "score": "5/10", "findings": [] }
}`;

describe("parseAgentResponse", () => {
  it("parses fenced json block", () => {
    const stdout = "preamble\n```json\n" + goodJson + "\n```\ntail";
    expect(() => parseAgentResponse(stdout)).not.toThrow();
  });

  it("parses unfenced JSON object", () => {
    expect(() => parseAgentResponse(goodJson)).not.toThrow();
  });

  it("throws on missing block", () => {
    expect(() =>
      parseAgentResponse("no json here"),
    ).toThrow(AgentResponseError);
  });

  it("throws on schema mismatch", () => {
    const bad = '{"framework_fit": {"score": "5/10", "findings": []}}';
    expect(() => parseAgentResponse(bad)).toThrow(AgentResponseError);
  });

  it("throws on bad severity prefix", () => {
    const obj = JSON.parse(goodJson);
    obj.api_surface.findings = ["WARN: bad"];
    const stdout = "```json\n" + JSON.stringify(obj) + "\n```";
    expect(() => parseAgentResponse(stdout)).toThrow(
      AgentResponseError,
    );
  });
});
