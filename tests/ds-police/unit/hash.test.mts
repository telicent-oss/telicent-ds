import { describe, expect, it } from "vitest";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  normaliseBytes,
  sha256,
  sha256File,
} from "../../../scripts/ds-police-src/core/hash.mts";

describe("normaliseBytes", () => {
  it("treats CRLF and LF as identical", () => {
    const a = sha256(normaliseBytes("a\r\nb\r\nc\r\n"));
    const b = sha256(normaliseBytes("a\nb\nc\n"));
    expect(a).toBe(b);
  });

  it("ignores trailing line whitespace", () => {
    const a = sha256(normaliseBytes("foo   \nbar\t\n"));
    const b = sha256(normaliseBytes("foo\nbar\n"));
    expect(a).toBe(b);
  });

  it("collapses multiple trailing newlines to one", () => {
    const a = sha256(normaliseBytes("foo\n\n\n"));
    const b = sha256(normaliseBytes("foo\n"));
    expect(a).toBe(b);
  });

  it("differs for genuinely different content", () => {
    const a = sha256(normaliseBytes("foo\n"));
    const b = sha256(normaliseBytes("bar\n"));
    expect(a).not.toBe(b);
  });
});

describe("sha256File", () => {
  it("hashes file content deterministically", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ds-hash-"));
    writeFileSync(join(dir, "a.md"), "hello\n");
    const aHash1 = await sha256File(join(dir, "a.md"));
    const aHash2 = await sha256File(join(dir, "a.md"));
    expect(aHash1).toBe(aHash2);
  });

  it("hash changes when content changes", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ds-hash-"));
    writeFileSync(join(dir, "a.md"), "hello\n");
    const before = await sha256File(join(dir, "a.md"));
    writeFileSync(join(dir, "a.md"), "goodbye\n");
    const after = await sha256File(join(dir, "a.md"));
    expect(before).not.toBe(after);
  });
});
