#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";

const fixturePath = process.env.DS_POLICE_FAKE_CLAUDE_FIXTURE;
if (!fixturePath) {
  process.stderr.write(
    "claude-fake: DS_POLICE_FAKE_CLAUDE_FIXTURE not set\n",
  );
  process.exit(2);
}

const stdinChunks = [];
process.stdin.on("data", (c) => stdinChunks.push(c));
process.stdin.on("end", () => {
  const prompt = Buffer.concat(stdinChunks).toString("utf8");

  const fakeBehavior = process.env.DS_POLICE_FAKE_CLAUDE_BEHAVIOR ?? "ok";
  const counterPath = process.env.DS_POLICE_FAKE_CLAUDE_COUNTER;
  if (counterPath) {
    let prior = 0;
    try {
      prior = Number(readFileSync(counterPath, "utf8") || "0");
    } catch {}
    writeFileSync(counterPath, String(prior + 1));
  }

  if (fakeBehavior === "exit-1") {
    process.stderr.write("simulated agent failure\n");
    process.exit(1);
  }
  if (fakeBehavior === "malformed") {
    process.stdout.write("not json at all\n");
    process.exit(0);
  }

  const fixture = readFileSync(fixturePath, "utf8");
  process.stdout.write(fixture);
  process.stderr.write("cache_read_input_tokens: 1234\n");
  process.exit(0);
});
