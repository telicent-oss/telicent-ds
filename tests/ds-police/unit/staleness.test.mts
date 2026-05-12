import { describe, expect, it } from "vitest";
import { reasonForSidecar } from "../../../scripts/ds-police-src/core/staleness.mts";
import { Sidecar } from "../../../scripts/ds-police-src/types.mts";

const sha = "a".repeat(64);
const otherSha = "b".repeat(64);
const section = { score: "5/10" as const, findings: [] };

const fresh: Sidecar = {
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

describe("reasonForSidecar", () => {
  it("null when fully fresh", () => {
    expect(
      reasonForSidecar(fresh, {
        sourceSha: sha,
        guidanceSha: sha,
        weightsSha: sha,
      }),
    ).toBeNull();
  });
  it("'source' when source mismatches", () => {
    expect(
      reasonForSidecar(fresh, {
        sourceSha: otherSha,
        guidanceSha: sha,
        weightsSha: sha,
      }),
    ).toBe("source");
  });
  it("'guidance' when guidance mismatches", () => {
    expect(
      reasonForSidecar(fresh, {
        sourceSha: sha,
        guidanceSha: otherSha,
        weightsSha: sha,
      }),
    ).toBe("guidance");
  });
  it("'weights' when weights mismatches", () => {
    expect(
      reasonForSidecar(fresh, {
        sourceSha: sha,
        guidanceSha: sha,
        weightsSha: otherSha,
      }),
    ).toBe("weights");
  });
  it("'failed' when prior status: failed", () => {
    expect(
      reasonForSidecar(
        { ...fresh, status: "failed", error: "boom" },
        { sourceSha: sha, guidanceSha: sha, weightsSha: sha },
      ),
    ).toBe("failed");
  });
  it("guidanceDirtyOnly ignores source mismatch", () => {
    expect(
      reasonForSidecar(
        fresh,
        { sourceSha: otherSha, guidanceSha: sha, weightsSha: sha },
        { guidanceDirtyOnly: true },
      ),
    ).toBeNull();
    expect(
      reasonForSidecar(
        fresh,
        { sourceSha: otherSha, guidanceSha: otherSha, weightsSha: sha },
        { guidanceDirtyOnly: true },
      ),
    ).toBe("guidance");
  });
});
