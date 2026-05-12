import { describe, expect, it } from "vitest";
import {
  cpSync,
  mkdirSync,
  mkdtempSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { runAdd } from "../../../scripts/ds-police-src/commands/add.mts";
import { runScore } from "../../../scripts/ds-police-src/commands/score.mts";
import {
  formatStatusTable,
  runStatus,
} from "../../../scripts/ds-police-src/commands/status.mts";

const here = resolve(fileURLToPath(import.meta.url), "..");
const fakeClaude = resolve(here, "..", "fixtures", "claude-fake.mjs");
const fixturesDir = resolve(here, "..", "fixtures");

const silent = (_: string) => {};

describe("runStatus", () => {
  it("reports orphan rows and verdict for scored rows", async () => {
    const root = mkdtempSync(join(tmpdir(), "ds-status-"));
    mkdirSync(join(root, "guidance"), { recursive: true });
    writeFileSync(join(root, "guidance", "10.md"), "rule\n");
    const dir = join(root, "src");
    mkdirSync(dir, { recursive: true });
    const file = join(dir, "X.tsx");
    cpSync(join(fixturesDir, "components", "Good.tsx"), file);
    await runAdd([file], { all: true }, root);

    const env = { ...process.env };
    process.env.DS_POLICE_AGENT_BIN = fakeClaude;
    process.env.DS_POLICE_NO_MEMO = "1";
    process.env.DS_POLICE_FAKE_CLAUDE_FIXTURE = resolve(
      fixturesDir,
      "agent-responses",
      "pass.json",
    );
    process.env.DS_POLICE_FAKE_CLAUDE_COUNTER = join(root, "ctr");
    writeFileSync(process.env.DS_POLICE_FAKE_CLAUDE_COUNTER, "0");
    try {
      await runScore({}, root, silent);
    } finally {
      process.env = env;
    }

    let rows = await runStatus(root);
    expect(rows[0].verdict).toBe("PASS");
    expect(rows[0].status).toBe("ok");

    unlinkSync(file);
    rows = await runStatus(root);
    expect(rows[0].status).toBe("orphan");
    expect(formatStatusTable(rows)).toContain("orphan");
  });
});
