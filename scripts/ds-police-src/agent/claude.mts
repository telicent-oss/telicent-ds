import { execa } from "execa";

export interface ClaudeRunResult {
  stdout: string;
  stderr: string;
  durationMs: number;
  cacheHit: boolean;
  exitCode: number;
}

export interface ClaudeRunOptions {
  prompt: string;
  timeoutMs?: number;
  binary?: string;
  extraArgs?: string[];
}

const CACHE_HIT_RE =
  /cache[_-]?(?:hit|read)|cached[_-]?tokens|prompt[_-]?cache/i;

export async function runClaude(
  opts: ClaudeRunOptions,
): Promise<ClaudeRunResult> {
  const binary =
    opts.binary ??
    process.env.DS_POLICE_AGENT_BIN ??
    "claude";
  const timeoutMs =
    opts.timeoutMs ??
    Number(process.env.DS_POLICE_AGENT_TIMEOUT_MS ?? 60_000);

  const args = ["-p", ...(opts.extraArgs ?? [])];
  const start = Date.now();

  const result = await execa(binary, args, {
    input: opts.prompt,
    timeout: timeoutMs,
    reject: false,
    stdin: "pipe",
    stdout: "pipe",
    stderr: "pipe",
  });

  const durationMs = Date.now() - start;
  const stdout = String(result.stdout ?? "");
  const stderr = String(result.stderr ?? "");
  const cacheHit = CACHE_HIT_RE.test(stderr) || CACHE_HIT_RE.test(stdout);

  if (result.timedOut) {
    throw new ClaudeTimeoutError(timeoutMs, stderr);
  }
  if (typeof result.exitCode === "number" && result.exitCode !== 0) {
    throw new ClaudeExitError(result.exitCode, stderr.slice(-500));
  }

  return {
    stdout,
    stderr,
    durationMs,
    cacheHit,
    exitCode: result.exitCode ?? 0,
  };
}

export class ClaudeTimeoutError extends Error {
  constructor(
    public readonly timeoutMs: number,
    public readonly stderrTail: string,
  ) {
    super(`agent timed out after ${timeoutMs}ms`);
  }
}

export class ClaudeExitError extends Error {
  constructor(
    public readonly exitCode: number,
    public readonly stderrTail: string,
  ) {
    super(`claude exited ${exitCode}: ${stderrTail}`);
  }
}
