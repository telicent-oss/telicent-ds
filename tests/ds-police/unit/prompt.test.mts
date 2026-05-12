import { describe, expect, it } from "vitest";
import {
  RESPONSE_SCHEMA,
  SYSTEM_RULES,
  buildDiffPrompt,
  buildPrompt,
  buildResponseSchema,
  buildSharedPrefix,
  buildWarmPrompt,
} from "../../../scripts/ds-police-src/agent/prompt.mts";

describe("buildPrompt", () => {
  it("static prefix is identical across files (cache seam)", () => {
    const a = buildPrompt({
      guidance: "GUIDE",
      filePath: "src/A.tsx",
      source: "console.log('a')",
    });
    const b = buildPrompt({
      guidance: "GUIDE",
      filePath: "src/B.tsx",
      source: "console.log('b')",
    });
    const seamA = a.indexOf("[FILE]");
    const seamB = b.indexOf("[FILE]");
    expect(seamA).toBe(seamB);
    expect(a.slice(0, seamA)).toBe(b.slice(0, seamB));
  });

  it("contains system rules and response schema", () => {
    const p = buildPrompt({
      guidance: "GUIDE",
      filePath: "x.tsx",
      source: "",
    });
    expect(p).toContain(SYSTEM_RULES);
    expect(p).toContain(RESPONSE_SCHEMA);
    expect(p).toContain("x.tsx");
  });

  it("uses tsx language fence for .tsx files", () => {
    const p = buildPrompt({
      guidance: "G",
      filePath: "x.tsx",
      source: "",
    });
    expect(p).toContain("```tsx");
  });

  it("warm prompt shares prefix with score prompt", () => {
    const score = buildPrompt({
      guidance: "GUIDE",
      filePath: "x.tsx",
      source: "src",
    });
    const warm = buildWarmPrompt({ guidance: "GUIDE" });
    const prefix = buildSharedPrefix({ guidance: "GUIDE" });
    expect(score.startsWith(prefix)).toBe(true);
    expect(warm.startsWith(prefix)).toBe(true);
  });

  it("warm prompt asks for OK reply", () => {
    const warm = buildWarmPrompt({ guidance: "G" });
    expect(warm).toContain("WARM-UP");
    expect(warm).toContain("OK");
  });

  it("buildResponseSchema lists only the requested axes", () => {
    const s = buildResponseSchema(["framework_fit", "types"]);
    expect(s).toContain('"framework_fit"');
    expect(s).toContain('"types"');
    expect(s).not.toContain('"composability"');
    expect(s).not.toContain('"theming"');
  });

  it("buildDiffPrompt includes diff, prior scoring, and partial-mode instruction", () => {
    const p = buildDiffPrompt({
      guidance: "G",
      filePath: "x.tsx",
      diff: "@@ -1 +1 @@\n-old\n+new",
      priorFindingsYaml: "framework_fit: { score: 9/10, findings: [] }",
      axes: ["framework_fit", "types"],
    });
    expect(p).toContain("[DIFF]");
    expect(p).toContain("[PRIOR SCORING]");
    expect(p).toContain("OMIT them");
    expect(p).toContain('"framework_fit"');
    expect(p).not.toContain('"composability"');
  });
});
