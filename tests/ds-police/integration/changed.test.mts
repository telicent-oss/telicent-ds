import { describe, expect, it, beforeAll } from "vitest";
import { execaSync } from "execa";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { runAdd } from "../../../scripts/ds-police-src/commands/add.mts";
import { runScore } from "../../../scripts/ds-police-src/commands/score.mts";
import { fileURLToPath } from "node:url";

const FAKE_BIN = fileURLToPath(
  new URL("../fixtures/claude-fake.mjs", import.meta.url),
);

function makeRepo(): string {
  const root = mkdtempSync(join(tmpdir(), "ds-changed-"));
  execaSync("git", ["init", "-b", "main"], { cwd: root });
  execaSync("git", ["config", "user.email", "t@t.test"], { cwd: root });
  execaSync("git", ["config", "user.name", "t"], { cwd: root });
  // guidance dir so loadGuidance works
  mkdirSync(join(root, "guidance"), { recursive: true });
  writeFileSync(join(root, "guidance", "00.md"), "# rules\n");
  writeFileSync(
    join(root, "guidance", "weights.yml"),
    "sections: { api_surface: 1.0, composability: 1.0, theming: 1.0, types: 0.5 }\nthresholds: { severity: HIGH, numeric: 6.0 }\ngate: { mode: ratchet }\n",
  );
  return root;
}

function commitAll(cwd: string, msg: string): void {
  execaSync("git", ["add", "-A"], { cwd });
  execaSync("git", ["commit", "-m", msg, "--no-verify"], { cwd });
}

describe("score --changed", () => {
  beforeAll(() => {
    process.env.DS_POLICE_AGENT_BIN = FAKE_BIN;
    process.env.DS_POLICE_NO_MEMO = "1";
  });

  it("skips non-changed enrolled files", async () => {
    const root = makeRepo();
    const a = join(root, "A.tsx");
    const b = join(root, "B.tsx");
    writeFileSync(a, "export const A = 1;\n");
    writeFileSync(b, "export const B = 1;\n");

    await runAdd([a, b], { all: true }, root);
    commitAll(root, "init");

    // modify only A
    writeFileSync(a, "export const A = 2;\n");

    const log: string[] = [];
    const result = await runScore(
      { changed: true, base: "HEAD" },
      root,
      (l) => log.push(l),
    );

    expect(result.exitCode).toBeLessThanOrEqual(1);
    const filterLine = log.find((l) => l.includes("--changed:"));
    expect(filterLine).toMatch(/1\/\d+ stale files in changed set/);
  });

  it("scores zero when no files changed vs base", async () => {
    const root = makeRepo();
    const a = join(root, "A.tsx");
    writeFileSync(a, "export const A = 1;\n");

    await runAdd([a], { all: true }, root);
    commitAll(root, "init");

    // empty sidecar so it's stale, but no source changes vs HEAD
    const sidecar = `${a}.ds-score.md`;
    writeFileSync(sidecar, "");

    const log: string[] = [];
    await runScore(
      { changed: true, base: "HEAD" },
      root,
      (l) => log.push(l),
    );

    const filterLine = log.find((l) => l.includes("--changed:"));
    expect(filterLine).toMatch(/0\/1 stale files/);
  });
});
