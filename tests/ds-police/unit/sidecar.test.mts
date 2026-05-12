import { describe, expect, it } from "vitest";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  SidecarParseError,
  isEmptySidecar,
  readSidecar,
  writeEmptySidecar,
  writeSidecar,
  sidecarPathFor,
} from "../../../scripts/ds-police-src/core/sidecar.mts";
import { Sidecar } from "../../../scripts/ds-police-src/types.mts";

const sha = "a".repeat(64);
const section = { score: "5/10" as const, findings: [] };
const validSidecar: Sidecar = {
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

function tmpFile(name: string): string {
  const dir = mkdtempSync(join(tmpdir(), "ds-side-"));
  return join(dir, name);
}

describe("sidecarPathFor", () => {
  it("appends .ds-score.md to source path", () => {
    expect(sidecarPathFor("a/b/c.tsx")).toBe("a/b/c.tsx.ds-score.md");
  });
});

describe("isEmptySidecar / writeEmptySidecar", () => {
  it("detects empty file", async () => {
    const path = tmpFile("a.tsx.ds-score.md");
    await writeEmptySidecar(path);
    expect(await isEmptySidecar(path)).toBe(true);
  });

  it("returns false for non-existent paths", async () => {
    expect(await isEmptySidecar("/nope/nope.ds-score.md")).toBe(false);
  });
});

describe("read/writeSidecar", () => {
  it("round-trips a valid sidecar", async () => {
    const path = tmpFile("a.tsx.ds-score.md");
    await writeSidecar(path, validSidecar);
    const back = await readSidecar(path);
    expect(back).toEqual(validSidecar);
  });

  it("throws SidecarParseError on malformed YAML", async () => {
    const path = tmpFile("bad.tsx.ds-score.md");
    writeFileSync(path, ":\n  not: [valid");
    await expect(readSidecar(path)).rejects.toBeInstanceOf(
      SidecarParseError,
    );
  });

  it("throws SidecarParseError on schema violation", async () => {
    const path = tmpFile("bad2.tsx.ds-score.md");
    writeFileSync(path, "file: x\n");
    await expect(readSidecar(path)).rejects.toBeInstanceOf(
      SidecarParseError,
    );
  });
});
