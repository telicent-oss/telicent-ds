import { describe, expect, it } from "vitest";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { runAdd } from "../../../scripts/ds-police-src/commands/add.mts";

function makeRepo(): string {
  const root = mkdtempSync(join(tmpdir(), "ds-add-"));
  return root;
}

describe("runAdd", () => {
  it("creates an empty sidecar for a single file", async () => {
    const root = makeRepo();
    const fileDir = join(root, "src", "x");
    mkdirSync(fileDir, { recursive: true });
    const file = join(fileDir, "X.tsx");
    writeFileSync(file, "export const X = 1;\n");

    const result = await runAdd([file], { all: true }, root);
    expect(result.enrolled).toContain(file);
    expect(existsSync(`${file}.ds-score.md`)).toBe(true);
  });

  it("is idempotent on re-run (already-enrolled skipped)", async () => {
    const root = makeRepo();
    const file = join(root, "Y.tsx");
    writeFileSync(file, "export const Y = 1;\n");

    await runAdd([file], { all: true }, root);
    const second = await runAdd([file], { all: true }, root);
    expect(second.enrolled).toHaveLength(0);
    expect(second.alreadyEnrolled).toContain(file);
  });

  it("rejects unsupported file types", async () => {
    const root = makeRepo();
    const file = join(root, "image.png");
    writeFileSync(file, "binary");
    await expect(
      runAdd([file], { all: true }, root),
    ).rejects.toThrow(/unsupported/);
  });

  it("rejects missing paths", async () => {
    const root = makeRepo();
    await expect(
      runAdd([join(root, "nope.tsx")], { all: true }, root),
    ).rejects.toThrow(/not found/);
  });

  it("expands a folder to all .tsx files when --all", async () => {
    const root = makeRepo();
    const dir = join(root, "src");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "A.tsx"), "x");
    writeFileSync(join(dir, "B.tsx"), "x");
    writeFileSync(join(dir, "C.txt"), "x");

    const result = await runAdd([dir], { all: true }, root);
    expect(result.enrolled).toHaveLength(2);
  });

  it("expands a glob non-interactively", async () => {
    const root = makeRepo();
    const dir = join(root, "src");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "A.tsx"), "x");
    writeFileSync(join(dir, "B.tsx"), "x");

    const result = await runAdd(["src/*.tsx"], {}, root);
    expect(result.enrolled).toHaveLength(2);
  });

  it("excludes test/stories/d.ts files by default in folder expand", async () => {
    const root = makeRepo();
    const dir = join(root, "src");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "X.tsx"), "x");
    writeFileSync(join(dir, "X.test.tsx"), "x");
    writeFileSync(join(dir, "X.stories.tsx"), "x");
    writeFileSync(join(dir, "X.d.ts"), "x");

    const result = await runAdd([dir], { all: true }, root);
    expect(result.enrolled).toHaveLength(1);
    expect(result.enrolled[0]).toMatch(/X\.tsx$/);
  });

  it("excludes test/stories in glob expand by default", async () => {
    const root = makeRepo();
    const dir = join(root, "src");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "A.tsx"), "x");
    writeFileSync(join(dir, "A.test.tsx"), "x");
    writeFileSync(join(dir, "A.stories.tsx"), "x");

    const result = await runAdd(["src/*.tsx"], {}, root);
    expect(result.enrolled).toHaveLength(1);
  });

  it("includes test/stories when --include-tests set", async () => {
    const root = makeRepo();
    const dir = join(root, "src");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "X.tsx"), "x");
    writeFileSync(join(dir, "X.test.tsx"), "x");
    writeFileSync(join(dir, "X.stories.tsx"), "x");

    const result = await runAdd(
      [dir],
      { all: true, includeTests: true },
      root,
    );
    expect(result.enrolled).toHaveLength(3);
  });

  it("rejects a single excluded file by path without --include-tests", async () => {
    const root = makeRepo();
    const file = join(root, "Y.test.tsx");
    writeFileSync(file, "x");
    await expect(
      runAdd([file], { all: true }, root),
    ).rejects.toThrow(/excluded/);
  });
});
