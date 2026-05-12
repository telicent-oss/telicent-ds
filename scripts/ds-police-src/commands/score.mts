import { existsSync, readFileSync } from "node:fs";
import { relative } from "node:path";
import { sha256File } from "../core/hash.mts";
import {
  composeFailedSidecar,
  composeSidecar,
  enumerateSidecars,
  isEmptySidecar,
  readSidecar,
  SidecarParseError,
  SidecarShaInputs,
  sourcePathForSidecar,
  tallyVerdicts,
  writeSidecar,
} from "../core/sidecar.mts";
import {
  decideRatchet,
  readBaseline,
  VerdictCounts,
  writeBaseline,
} from "../core/baseline.mts";
import { loadGuidance } from "../core/guidance.mts";
import { LoadedWeights, loadWeights } from "../core/weights.mts";
import {
  reasonForSidecar,
  StaleReason,
} from "../core/staleness.mts";
import { computeOverall } from "../core/aggregator.mts";
import { buildCache, CacheBackend, cacheKey } from "../core/cache.mts";
import {
  AgentResponseError,
  parseAgentResponse,
  parsePartialAgentResponse,
} from "../agent/response.mts";
import {
  buildDiffPrompt,
  buildPrompt,
  buildWarmPrompt,
} from "../agent/prompt.mts";
import { changedFiles, unifiedDiff } from "../core/git.mts";
import YAML from "yaml";
import { axesFor, detectShape, shapeVariant } from "../core/file-shape.mts";
import { groupByAxis, runRules } from "../core/rules.mts";
import { Finding } from "../types.mts";
import {
  ClaudeExitError,
  ClaudeTimeoutError,
  runClaude,
} from "../agent/claude.mts";
import { AgentResponse, Sidecar, Verdict } from "../types.mts";
import {
  RunSummary,
  ScoreRow,
  formatRow,
  formatSummary,
} from "../ui/report.mts";

export interface ScoreOptions {
  guidanceDirty?: boolean;
  dryRun?: boolean;
  changed?: boolean;
  base?: string;
  warmCache?: boolean;
  memo?: boolean;
  memoDir?: string;
  prefilter?: boolean;
}

export interface ScoreResult {
  exitCode: number;
  summary: RunSummary;
  rows: ScoreRow[];
}

interface StaleItem {
  sidecarPath: string;
  sourcePath: string;
  sourceSha: string;
  reason: NonNullable<StaleReason>;
}

type ScoreOutcome =
  | {
      kind: "ok";
      agentResponse: AgentResponse;
      cacheHit: boolean;
      durationMs: number;
      memoHit: boolean;
    }
  | {
      kind: "failed";
      error: string;
      cacheHit: false;
      durationMs: number;
      memoHit: false;
    };

async function readSidecarSafely(path: string): Promise<Sidecar | null> {
  try {
    return await readSidecar(path);
  } catch (err) {
    if (err instanceof SidecarParseError) return null;
    throw err;
  }
}

async function findStale(
  sidecarPaths: string[],
  guidanceSha: string,
  weightsSha: string,
  options: ScoreOptions,
): Promise<StaleItem[]> {
  const stale: StaleItem[] = [];

  for (const sidecarPath of sidecarPaths) {
    const sourcePath = sourcePathForSidecar(sidecarPath);
    if (!existsSync(sourcePath)) continue;
    const sourceSha = await sha256File(sourcePath);

    if (await isEmptySidecar(sidecarPath)) {
      stale.push({ sidecarPath, sourcePath, sourceSha, reason: "empty" });
      continue;
    }

    const sidecar = await readSidecarSafely(sidecarPath);
    if (!sidecar) {
      stale.push({ sidecarPath, sourcePath, sourceSha, reason: "empty" });
      continue;
    }
    const reason = reasonForSidecar(
      sidecar,
      { sourceSha, guidanceSha, weightsSha },
      { guidanceDirtyOnly: options.guidanceDirty },
    );
    if (reason !== null) {
      stale.push({ sidecarPath, sourcePath, sourceSha, reason });
    }
  }

  return stale;
}

function describeAgentError(err: unknown): string {
  if (err instanceof ClaudeTimeoutError) return err.message;
  if (err instanceof ClaudeExitError) {
    return `claude exit ${err.exitCode}: ${err.stderrTail}`;
  }
  if (err instanceof AgentResponseError) return err.message;
  return String(err);
}

async function seedCache(
  guidanceMarkdown: string,
  log: (line: string) => void,
): Promise<void> {
  const prompt = buildWarmPrompt({ guidance: guidanceMarkdown });
  const start = Date.now();
  try {
    await runClaude({ prompt });
    log(`[ds-police] cache warm seeded (${Date.now() - start}ms)`);
  } catch (err) {
    log(
      `[ds-police] cache warm skipped: ${(err as Error).message.slice(0, 200)}`,
    );
  }
}

function mergeFindings(
  existing: readonly Finding[],
  extras: readonly Finding[],
): Finding[] {
  const seen = new Set<string>();
  for (const f of existing) {
    if (f.rule_id) seen.add(f.rule_id);
  }
  const merged: Finding[] = [...existing];
  for (const f of extras) {
    if (f.rule_id && seen.has(f.rule_id)) continue;
    merged.push(f);
    if (f.rule_id) seen.add(f.rule_id);
  }
  return merged;
}

function priorSectionsYaml(prior: Sidecar): string {
  const dump: Record<string, unknown> = {};
  for (const axis of [
    "framework_fit",
    "api_surface",
    "composability",
    "theming",
    "types",
    "docs",
    "necessity",
  ] as const) {
    dump[axis] = {
      score: prior[axis].score,
      findings: prior[axis].findings,
    };
  }
  return YAML.stringify(dump, { lineWidth: 0 });
}

function mergeWithPrior(
  partial: import("../types.mts").PartialAgentResponse,
  prior: Sidecar,
): AgentResponse {
  const sections = (
    [
      "framework_fit",
      "api_surface",
      "composability",
      "theming",
      "types",
      "docs",
      "necessity",
    ] as const
  ).map((axis) => [axis, partial[axis] ?? prior[axis]] as const);
  return Object.fromEntries(sections) as AgentResponse;
}

function applyPrefilter(
  response: AgentResponse,
  prefilter: Record<string, Finding[]>,
): AgentResponse {
  const out = { ...response };
  for (const [axis, extras] of Object.entries(prefilter)) {
    const key = axis as keyof AgentResponse;
    out[key] = {
      score: out[key].score,
      findings: mergeFindings(out[key].findings, extras),
    };
  }
  return out;
}

interface ScoreOneOptions {
  prefilterEnabled: boolean;
  priorSidecar: Sidecar | null;
  diff: string | null;
}

async function scoreOne(
  sourcePath: string,
  guidanceMarkdown: string,
  cwd: string,
  memo: CacheBackend,
  shas: SidecarShaInputs,
  opts: ScoreOneOptions,
): Promise<ScoreOutcome> {
  const source = readFileSync(sourcePath, "utf8");
  const shape = detectShape({ filePath: sourcePath, source });
  const axes = axesFor(shape);
  const useDiff =
    opts.diff !== null &&
    opts.priorSidecar !== null &&
    opts.priorSidecar.status !== "failed";
  const partial = useDiff || axes.length !== 7;
  const variant = `${shapeVariant(shape)}+${useDiff ? "diff" : "full"}`;

  const prefilterMatches = opts.prefilterEnabled
    ? runRules({ source, shape })
    : [];
  const prefilterByAxis = groupByAxis(prefilterMatches);

  const memoKey = cacheKey({
    source_sha: shas.source_sha,
    guidance_sha: shas.guidance_sha,
    weights_sha: shas.weights_sha,
    variant,
  });

  if (memo.enabled && !useDiff) {
    const hit = await memo.get(memoKey);
    if (hit) {
      return {
        kind: "ok",
        agentResponse: applyPrefilter(hit, prefilterByAxis),
        cacheHit: false,
        durationMs: 0,
        memoHit: true,
      };
    }
  }

  const prompt = useDiff
    ? buildDiffPrompt({
        guidance: guidanceMarkdown,
        filePath: relative(cwd, sourcePath),
        diff: opts.diff!,
        priorFindingsYaml: priorSectionsYaml(opts.priorSidecar!),
        axes,
      })
    : buildPrompt({
        guidance: guidanceMarkdown,
        filePath: relative(cwd, sourcePath),
        source,
        axes,
      });

  try {
    const result = await runClaude({ prompt });
    const agentResponse = useDiff
      ? mergeWithPrior(
          parsePartialAgentResponse(result.stdout),
          opts.priorSidecar!,
        )
      : parseAgentResponse(result.stdout, { partial });

    if (memo.enabled && !useDiff) {
      await memo.set(memoKey, agentResponse);
    }

    return {
      kind: "ok",
      agentResponse: applyPrefilter(agentResponse, prefilterByAxis),
      cacheHit: result.cacheHit,
      durationMs: result.durationMs,
      memoHit: false,
    };
  } catch (err) {
    return {
      kind: "failed",
      error: describeAgentError(err),
      cacheHit: false,
      durationMs: 0,
      memoHit: false,
    };
  }
}

export async function runScore(
  options: ScoreOptions,
  cwd: string,
  log: (line: string) => void = (line) => console.log(line),
): Promise<ScoreResult> {
  const guidance = await loadGuidance(cwd);
  const weights = await loadWeights(cwd);

  const sidecarPaths = await enumerateSidecars(cwd);

  let stale = await findStale(
    sidecarPaths,
    guidance.sha,
    weights.sha,
    options,
  );

  if (options.changed) {
    const changed = await changedFiles({ cwd, base: options.base });
    const before = stale.length;
    stale = stale.filter((s) => changed.has(s.sourcePath));
    log(
      `[ds-police] --changed: ${stale.length}/${before} stale files in changed set` +
        (options.base ? ` (base=${options.base})` : ""),
    );
  }

  const summary: RunSummary = {
    total: sidecarPaths.length,
    scored: 0,
    skipped: sidecarPaths.length - stale.length,
    blocked: 0,
    warned: 0,
    passed: 0,
    failed: 0,
    cacheHits: 0,
    memoHits: 0,
    totalElapsedMs: 0,
  };
  const rows: ScoreRow[] = [];

  if (options.dryRun) {
    for (const item of stale) {
      log(
        `[dry-run] would score (${item.reason}): ${relative(cwd, item.sourcePath)}`,
      );
    }
    return { exitCode: 0, summary, rows };
  }

  const memoEnabled =
    options.memo !== false && process.env.DS_POLICE_NO_MEMO !== "1";
  const memo = buildCache({
    enabled: memoEnabled,
    dir: options.memoDir,
  });

  if (stale.length > 1 && options.warmCache !== false) {
    await seedCache(guidance.markdown, log);
  }

  let i = 1;
  for (const item of stale) {
    const shas: SidecarShaInputs = {
      file: relative(cwd, item.sourcePath),
      source_sha: item.sourceSha,
      guidance_sha: guidance.sha,
      weights_sha: weights.sha,
    };

    let priorSidecar: Sidecar | null = null;
    let diff: string | null = null;
    if (options.changed) {
      priorSidecar = await readSidecarSafely(item.sidecarPath);
      if (priorSidecar !== null && priorSidecar.status !== "failed") {
        diff = await unifiedDiff({
          cwd,
          filePath: shas.file,
          base: options.base,
        });
      }
    }

    const outcome = await scoreOne(
      item.sourcePath,
      guidance.markdown,
      cwd,
      memo,
      shas,
      {
        prefilterEnabled: options.prefilter !== false,
        priorSidecar,
        diff,
      },
    );

    let row: ScoreRow;
    if (outcome.kind === "failed") {
      const sidecar = composeFailedSidecar(shas, outcome.error);
      await writeSidecar(item.sidecarPath, sidecar);
      summary.failed += 1;
      row = {
        index: i,
        total: stale.length,
        filePath: shas.file,
        cacheHit: false,
        durationMs: outcome.durationMs,
        verdict: "WARN",
        status: "failed",
        reason: item.reason,
      };
    } else {
      const overall = computeOverall(outcome.agentResponse, weights.config);
      const sidecar = composeSidecar(shas, outcome.agentResponse, overall);
      await writeSidecar(item.sidecarPath, sidecar);
      tallyVerdict(summary, overall.verdict);
      row = {
        index: i,
        total: stale.length,
        filePath: shas.file,
        cacheHit: outcome.cacheHit,
        memoHit: outcome.memoHit,
        durationMs: outcome.durationMs,
        verdict: overall.verdict,
        reason: item.reason,
      };
    }

    summary.scored += 1;
    summary.totalElapsedMs += outcome.durationMs;
    if (outcome.cacheHit) summary.cacheHits += 1;
    if (outcome.memoHit) summary.memoHits += 1;

    rows.push(row);
    log(formatRow(row));
    i += 1;
  }

  log(formatSummary(summary));

  const current = await tallyVerdicts(cwd);
  const exitCode = await applyGate(weights, current, cwd, log);
  return { exitCode, summary, rows };
}

async function applyGate(
  weights: LoadedWeights,
  current: VerdictCounts,
  cwd: string,
  log: (line: string) => void,
): Promise<number> {
  const mode = weights.config.gate.mode;
  if (mode === "strict") {
    if (current.blocked > 0 || current.failed > 0) {
      log(
        `[ds-police] strict gate: blocked=${current.blocked} failed=${current.failed} (push blocked)`,
      );
      return 1;
    }
    log(`[ds-police] strict gate: clean (blocked=0 failed=0)`);
    return 0;
  }

  const baseline = await readBaseline(cwd);
  const decision = decideRatchet(baseline, current);
  switch (decision.kind) {
    case "established":
      await writeBaseline(cwd, current);
      log(
        `[ds-police] baseline established: blocked=${current.blocked} failed=${current.failed}`,
      );
      return 0;
    case "stable":
      log(
        `[ds-police] stable: blocked=${current.blocked} failed=${current.failed}`,
      );
      return 0;
    case "ratcheted":
      await writeBaseline(cwd, current);
      log(
        `[ds-police] ratcheted: blocked ${decision.baseline.blocked}->${current.blocked}, failed ${decision.baseline.failed}->${current.failed}`,
      );
      return 0;
    case "regressed": {
      const cells = decision.regressedCells
        .map((c) =>
          c.severity === null
            ? `${c.axis} ${c.baseline}->${c.current}`
            : `${c.axis}.${c.severity} ${c.baseline}->${c.current}`,
        )
        .join(", ");
      log(`[ds-police] regression: ${cells} (push blocked)`);
      return 1;
    }
  }
}

function tallyVerdict(summary: RunSummary, verdict: Verdict): void {
  if (verdict === "BLOCK") summary.blocked += 1;
  else if (verdict === "WARN") summary.warned += 1;
  else summary.passed += 1;
}
