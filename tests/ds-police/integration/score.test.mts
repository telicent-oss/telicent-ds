import { describe, expect, it, beforeEach } from "vitest";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  writeFileSync,
} from "node:fs";

import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { runScore } from "../../../scripts/ds-police-src/commands/score.mts";
import { runAdd } from "../../../scripts/ds-police-src/commands/add.mts";
import { readSidecar } from "../../../scripts/ds-police-src/core/sidecar.mts";

const here = resolve(fileURLToPath(import.meta.url), "..");
const fakeClaude = resolve(here, "..", "fixtures", "claude-fake.mjs");
const fixturesDir = resolve(here, "..", "fixtures");

interface RepoFixture {
  root: string;
  file: string;
  sidecar: string;
  counter: string;
}

async function makeRepo(): Promise<RepoFixture> {
  const root = mkdtempSync(join(tmpdir(), "ds-score-"));
  mkdirSync(join(root, "guidance"), { recursive: true });
  writeFileSync(join(root, "guidance", "10-rules.md"), "rule 1\n");
  const fileDir = join(root, "src", "buttons");
  mkdirSync(fileDir, { recursive: true });
  const file = join(fileDir, "X.tsx");
  cpSync(join(fixturesDir, "components", "Good.tsx"), file);

  await runAdd([file], { all: true }, root);
  const sidecar = `${file}.ds-score.md`;
  const counter = join(root, "claude-call-count");
  writeFileSync(counter, "0");
  return { root, file, sidecar, counter };
}

function withFakeClaudeEnv(
  fixture: string,
  counter: string,
  behavior?: string,
): NodeJS.ProcessEnv {
  const env = { ...process.env };
  env.DS_POLICE_AGENT_BIN = fakeClaude;
  env.DS_POLICE_FAKE_CLAUDE_FIXTURE = resolve(fixturesDir, "agent-responses", fixture);
  env.DS_POLICE_FAKE_CLAUDE_COUNTER = counter;
  env.DS_POLICE_NO_MEMO = "1";
  if (behavior) env.DS_POLICE_FAKE_CLAUDE_BEHAVIOR = behavior;
  return env;
}

function snapshotEnv(env: NodeJS.ProcessEnv): () => void {
  const prior = { ...process.env };
  Object.assign(process.env, env);
  return () => {
    for (const key of Object.keys(env)) {
      if (key in prior) process.env[key] = prior[key];
      else delete process.env[key];
    }
  };
}

type SeedAxes = Partial<
  Record<
    | "framework_fit"
    | "api_surface"
    | "composability"
    | "theming"
    | "types"
    | "docs"
    | "necessity",
    Partial<Record<"CRITICAL" | "HIGH" | "MODERATE" | "LOW", number>>
  >
>;

function seedBaseline(
  root: string,
  blocked: number,
  failed: number,
  seedAxes: SeedAxes = {},
): void {
  const axes: Record<string, Record<string, number>> = {};
  for (const a of [
    "framework_fit",
    "api_surface",
    "composability",
    "theming",
    "types",
    "docs",
    "necessity",
  ]) {
    axes[a] = { CRITICAL: 0, HIGH: 0, MODERATE: 0, LOW: 0 };
    const overrides = seedAxes[a as keyof SeedAxes];
    if (overrides) Object.assign(axes[a], overrides);
  }
  writeFileSync(
    join(root, ".ds-police-baseline.json"),
    `${JSON.stringify(
      {
        version: 2,
        axes,
        blocked,
        failed,
        updated_at: "2026-01-01T00:00:00.000Z",
      },
      null,
      2,
    )}\n`,
  );
}

const BLOCK_FIXTURE_AXES: SeedAxes = {
  framework_fit: { HIGH: 1 },
  api_surface: { CRITICAL: 1 },
  composability: { CRITICAL: 1 },
  docs: { LOW: 1 },
};

function readBaselineFile(root: string): {
  blocked: number;
  failed: number;
} {
  const raw = readFileSync(join(root, ".ds-police-baseline.json"), "utf8");
  return JSON.parse(raw);
}

function setGateMode(root: string, mode: "ratchet" | "strict"): void {
  writeFileSync(
    join(root, "guidance", "weights.yml"),
    [
      "sections:",
      "  api_surface: 1",
      "  composability: 1",
      "  theming: 1",
      "  types: 0.5",
      "thresholds:",
      "  severity: HIGH",
      "  numeric: 6",
      "gate:",
      `  mode: ${mode}`,
      "",
    ].join("\n"),
  );
}

const silent = (_: string) => {};

describe("runScore (integration with fake claude)", () => {
  it("populates an empty sidecar and returns PASS verdict", async () => {
    const repo = await makeRepo();
    const restore = snapshotEnv(
      withFakeClaudeEnv("pass.json", repo.counter),
    );
    try {
      const result = await runScore({}, repo.root, silent);
      expect(result.exitCode).toBe(0);
      expect(result.summary.scored).toBe(1);
      const sidecar = await readSidecar(repo.sidecar);
      expect(sidecar.overall.verdict).toBe("PASS");
    } finally {
      restore();
    }
  });

  it("blocks on CRITICAL findings (regression vs zero baseline)", async () => {
    const repo = await makeRepo();
    seedBaseline(repo.root, 0, 0);
    const restore = snapshotEnv(
      withFakeClaudeEnv("block.json", repo.counter),
    );
    try {
      const result = await runScore({}, repo.root, silent);
      expect(result.exitCode).toBe(1);
      const sidecar = await readSidecar(repo.sidecar);
      expect(sidecar.overall.severity).toBe("CRITICAL");
      expect(sidecar.overall.verdict).toBe("BLOCK");
    } finally {
      restore();
    }
  });

  it("skips fresh sidecars (zero agent calls on second run)", async () => {
    const repo = await makeRepo();
    const restore = snapshotEnv(
      withFakeClaudeEnv("pass.json", repo.counter),
    );
    try {
      await runScore({}, repo.root, silent);
      const callCountAfterFirst = Number(readFileSync(repo.counter, "utf8"));
      const second = await runScore({}, repo.root, silent);
      const callCountAfterSecond = Number(readFileSync(repo.counter, "utf8"));
      expect(callCountAfterSecond).toBe(callCountAfterFirst);
      expect(second.summary.scored).toBe(0);
      expect(second.summary.skipped).toBe(1);
    } finally {
      restore();
    }
  });

  it("re-scores when source file changes", async () => {
    const repo = await makeRepo();
    const restore = snapshotEnv(
      withFakeClaudeEnv("pass.json", repo.counter),
    );
    try {
      await runScore({}, repo.root, silent);
      writeFileSync(repo.file, "// modified\nexport const X = 2;\n");
      const second = await runScore({}, repo.root, silent);
      expect(second.summary.scored).toBe(1);
    } finally {
      restore();
    }
  });

  it("re-scores when guidance changes", async () => {
    const repo = await makeRepo();
    const restore = snapshotEnv(
      withFakeClaudeEnv("pass.json", repo.counter),
    );
    try {
      await runScore({}, repo.root, silent);
      writeFileSync(join(repo.root, "guidance", "10-rules.md"), "rule changed\n");
      const second = await runScore({}, repo.root, silent);
      expect(second.summary.scored).toBe(1);
    } finally {
      restore();
    }
  });

  it("guidance-dirty-only ignores source changes", async () => {
    const repo = await makeRepo();
    const restore = snapshotEnv(
      withFakeClaudeEnv("pass.json", repo.counter),
    );
    try {
      await runScore({}, repo.root, silent);
      writeFileSync(repo.file, "// changed\nexport const X = 9;\n");
      const second = await runScore({ guidanceDirty: true }, repo.root, silent);
      expect(second.summary.scored).toBe(0);
    } finally {
      restore();
    }
  });

  it("records status: failed and exits non-zero on agent failure", async () => {
    const repo = await makeRepo();
    seedBaseline(repo.root, 0, 0);
    const restore = snapshotEnv(
      withFakeClaudeEnv("pass.json", repo.counter, "exit-1"),
    );
    try {
      const result = await runScore({}, repo.root, silent);
      expect(result.exitCode).toBe(1);
      const sidecar = await readSidecar(repo.sidecar);
      expect(sidecar.status).toBe("failed");
    } finally {
      restore();
    }
  });

  it("records failed on malformed agent response", async () => {
    const repo = await makeRepo();
    seedBaseline(repo.root, 0, 0);
    const restore = snapshotEnv(
      withFakeClaudeEnv("pass.json", repo.counter, "malformed"),
    );
    try {
      const result = await runScore({}, repo.root, silent);
      expect(result.exitCode).toBe(1);
      const sidecar = await readSidecar(repo.sidecar);
      expect(sidecar.status).toBe("failed");
      expect(sidecar.error).toMatch(/JSON|schema/i);
    } finally {
      restore();
    }
  });

  it("invokes the agent sequentially when multiple files are stale", async () => {
    const repo = await makeRepo();
    const file2 = join(repo.root, "src", "buttons", "Y.tsx");
    cpSync(join(fixturesDir, "components", "Bad.tsx"), file2);
    await runAdd([file2], { all: true }, repo.root);

    const restore = snapshotEnv(
      withFakeClaudeEnv("pass.json", repo.counter),
    );
    try {
      const result = await runScore(
        { warmCache: false },
        repo.root,
        silent,
      );
      expect(result.summary.scored).toBe(2);
      const calls = Number(readFileSync(repo.counter, "utf8"));
      expect(calls).toBe(2);
    } finally {
      restore();
    }
  });

  it("dry-run reports stale without calling the agent", async () => {
    const repo = await makeRepo();
    const restore = snapshotEnv(
      withFakeClaudeEnv("pass.json", repo.counter),
    );
    try {
      const result = await runScore({ dryRun: true }, repo.root, silent);
      expect(result.exitCode).toBe(0);
      expect(result.summary.scored).toBe(0);
      const calls = Number(readFileSync(repo.counter, "utf8"));
      expect(calls).toBe(0);
    } finally {
      restore();
    }
  });

  it("ratchet: first run with BLOCK establishes baseline and exits 0", async () => {
    const repo = await makeRepo();
    const restore = snapshotEnv(
      withFakeClaudeEnv("block.json", repo.counter),
    );
    try {
      const result = await runScore({}, repo.root, silent);
      expect(result.exitCode).toBe(0);
      expect(readBaselineFile(repo.root)).toMatchObject({
        blocked: 1,
        failed: 0,
      });
    } finally {
      restore();
    }
  });

  it("ratchet: stable when counts match baseline", async () => {
    const repo = await makeRepo();
    seedBaseline(repo.root, 1, 0, BLOCK_FIXTURE_AXES);
    const restore = snapshotEnv(
      withFakeClaudeEnv("block.json", repo.counter),
    );
    try {
      const result = await runScore({}, repo.root, silent);
      expect(result.exitCode).toBe(0);
      expect(readBaselineFile(repo.root)).toMatchObject({
        blocked: 1,
        failed: 0,
      });
    } finally {
      restore();
    }
  });

  it("ratchet: improvement writes a lower baseline", async () => {
    const repo = await makeRepo();
    seedBaseline(repo.root, 5, 2);
    const restore = snapshotEnv(
      withFakeClaudeEnv("pass.json", repo.counter),
    );
    try {
      const result = await runScore({}, repo.root, silent);
      expect(result.exitCode).toBe(0);
      expect(readBaselineFile(repo.root)).toMatchObject({
        blocked: 0,
        failed: 0,
      });
    } finally {
      restore();
    }
  });

  it("strict mode: any BLOCK exits 1 even on first run", async () => {
    const repo = await makeRepo();
    setGateMode(repo.root, "strict");
    const restore = snapshotEnv(
      withFakeClaudeEnv("block.json", repo.counter),
    );
    try {
      const result = await runScore({}, repo.root, silent);
      expect(result.exitCode).toBe(1);
      expect(existsSync(join(repo.root, ".ds-police-baseline.json"))).toBe(
        false,
      );
    } finally {
      restore();
    }
  });

  it("strict mode: clean run exits 0", async () => {
    const repo = await makeRepo();
    setGateMode(repo.root, "strict");
    const restore = snapshotEnv(
      withFakeClaudeEnv("pass.json", repo.counter),
    );
    try {
      const result = await runScore({}, repo.root, silent);
      expect(result.exitCode).toBe(0);
    } finally {
      restore();
    }
  });

  it("memo: second run returns cached AgentResponse without invoking agent", async () => {
    const repo = await makeRepo();
    const memoDir = join(repo.root, "memo-cache");
    const env = withFakeClaudeEnv("pass.json", repo.counter);
    delete env.DS_POLICE_NO_MEMO;
    const restore = snapshotEnv(env);
    try {
      await runScore({ memoDir }, repo.root, silent);
      const after1 = Number(readFileSync(repo.counter, "utf8"));

      // make sidecar stale by clearing it; source unchanged → memo should hit
      writeFileSync(repo.sidecar, "");
      const second = await runScore({ memoDir }, repo.root, silent);
      const after2 = Number(readFileSync(repo.counter, "utf8"));

      expect(after2).toBe(after1);
      expect(second.summary.memoHits).toBe(1);
      expect(second.summary.scored).toBe(1);
    } finally {
      restore();
    }
  });
});
