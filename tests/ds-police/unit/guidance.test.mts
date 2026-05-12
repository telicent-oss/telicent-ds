import { describe, expect, it } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { loadGuidance } from "../../../scripts/ds-police-src/core/guidance.mts";

function makeRepoWithGuidance(files: Record<string, string>): string {
  const root = mkdtempSync(join(tmpdir(), "ds-guide-"));
  const dir = join(root, "guidance");
  mkdirSync(dir, { recursive: true });
  for (const [name, contents] of Object.entries(files)) {
    writeFileSync(join(dir, name), contents);
  }
  return root;
}

describe("loadGuidance", () => {
  it("hashes are stable across runs", async () => {
    const root = makeRepoWithGuidance({
      "10.md": "rule one\n",
      "20.md": "rule two\n",
    });
    const a = await loadGuidance(root);
    const b = await loadGuidance(root);
    expect(a.sha).toBe(b.sha);
  });

  it("hash changes when content changes", async () => {
    const root = makeRepoWithGuidance({ "10.md": "rule one\n" });
    const before = await loadGuidance(root);
    writeFileSync(join(root, "guidance", "10.md"), "rule two\n");
    const after = await loadGuidance(root);
    expect(before.sha).not.toBe(after.sha);
  });

  it("handles missing guidance dir as empty", async () => {
    const root = mkdtempSync(join(tmpdir(), "ds-noguide-"));
    const result = await loadGuidance(root);
    expect(result.markdown).toBe("");
    expect(result.files).toHaveLength(0);
  });
});
