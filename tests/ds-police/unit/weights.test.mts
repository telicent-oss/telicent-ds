import { describe, expect, it } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { loadWeights } from "../../../scripts/ds-police-src/core/weights.mts";

function makeRepo(weights?: string): string {
  const root = mkdtempSync(join(tmpdir(), "ds-w-"));
  if (weights !== undefined) {
    mkdirSync(join(root, "guidance"), { recursive: true });
    writeFileSync(join(root, "guidance", "weights.yml"), weights);
  }
  return root;
}

describe("loadWeights", () => {
  it("returns defaults when weights.yml is missing", async () => {
    const result = await loadWeights(makeRepo());
    expect(result.source).toBe("default");
    expect(result.config.thresholds.numeric).toBe(6);
  });

  it("loads + hashes a valid weights.yml", async () => {
    const yaml =
      "sections:\n" +
      "  api_surface: 1\n" +
      "  composability: 1\n" +
      "  theming: 1\n" +
      "  types: 0.5\n" +
      "thresholds:\n" +
      "  severity: HIGH\n" +
      "  numeric: 7\n";
    const result = await loadWeights(makeRepo(yaml));
    expect(result.source).toBe("file");
    expect(result.config.thresholds.numeric).toBe(7);
    expect(result.sha).toMatch(/^[a-f0-9]{64}$/);
  });

  it("rejects malformed weights", async () => {
    const yaml = "sections: not-an-object\n";
    await expect(loadWeights(makeRepo(yaml))).rejects.toThrow();
  });
});
