import { describe, expect, it } from "vitest";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  buildCache,
  cacheKey,
  FsCache,
  NullCache,
} from "../../../scripts/ds-police-src/core/cache.mts";
import { AgentResponse } from "../../../scripts/ds-police-src/types.mts";

const SAMPLE: AgentResponse = {
  framework_fit: { score: "9/10", findings: [] },
  api_surface: { score: "9/10", findings: [] },
  composability: { score: "9/10", findings: [] },
  theming: { score: "9/10", findings: [] },
  types: { score: "9/10", findings: [] },
  docs: { score: "9/10", findings: [] },
  necessity: { score: "9/10", findings: [] },
};

describe("cacheKey", () => {
  it("differs when any sha differs", () => {
    const a = cacheKey({ source_sha: "x", guidance_sha: "y", weights_sha: "z" });
    const b = cacheKey({ source_sha: "X", guidance_sha: "y", weights_sha: "z" });
    expect(a).not.toBe(b);
  });
  it("differs when variant differs", () => {
    const a = cacheKey({
      source_sha: "x",
      guidance_sha: "y",
      weights_sha: "z",
      variant: "full",
    });
    const b = cacheKey({
      source_sha: "x",
      guidance_sha: "y",
      weights_sha: "z",
      variant: "diff",
    });
    expect(a).not.toBe(b);
  });
  it("stable for identical inputs", () => {
    const a = cacheKey({ source_sha: "x", guidance_sha: "y", weights_sha: "z" });
    const b = cacheKey({ source_sha: "x", guidance_sha: "y", weights_sha: "z" });
    expect(a).toBe(b);
  });
});

describe("FsCache", () => {
  it("round-trips an AgentResponse", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ds-cache-"));
    const c = new FsCache(dir);
    await c.set("key1", SAMPLE);
    const hit = await c.get("key1");
    expect(hit).not.toBeNull();
    expect(hit?.framework_fit.score).toBe("9/10");
  });

  it("returns null on miss", async () => {
    const dir = mkdtempSync(join(tmpdir(), "ds-cache-"));
    const c = new FsCache(dir);
    expect(await c.get("nope")).toBeNull();
  });

  it("returns null on malformed cache file", async () => {
    const { writeFileSync, mkdirSync } = await import("node:fs");
    const dir = mkdtempSync(join(tmpdir(), "ds-cache-"));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "bad.json"), "{ not json");
    const c = new FsCache(dir);
    expect(await c.get("bad")).toBeNull();
  });
});

describe("NullCache", () => {
  it("never hits", async () => {
    const c = new NullCache();
    await c.set("k", SAMPLE);
    expect(await c.get("k")).toBeNull();
    expect(c.enabled).toBe(false);
  });
});

describe("buildCache", () => {
  it("returns NullCache when disabled", () => {
    expect(buildCache({ enabled: false })).toBeInstanceOf(NullCache);
  });
  it("returns FsCache when enabled", () => {
    expect(
      buildCache({ enabled: true, dir: mkdtempSync(join(tmpdir(), "ds-c-")) }),
    ).toBeInstanceOf(FsCache);
  });
});
