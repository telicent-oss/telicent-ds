import { Verdict } from "../types.mts";

export interface ScoreRow {
  index: number;
  total: number;
  filePath: string;
  cacheHit: boolean;
  memoHit?: boolean;
  durationMs: number;
  verdict: Verdict;
  status?: "failed";
  reason?: string;
}

export interface RunSummary {
  total: number;
  scored: number;
  skipped: number;
  blocked: number;
  warned: number;
  passed: number;
  failed: number;
  cacheHits: number;
  memoHits: number;
  totalElapsedMs: number;
}

export function formatRow(row: ScoreRow): string {
  const counter = `[${row.index}/${row.total}]`;
  const cache = row.memoHit
    ? "cache=memo"
    : row.cacheHit
      ? "cache=hit"
      : "cache=miss";
  const elapsed = `${(row.durationMs / 1000).toFixed(1)}s`;
  const label = row.status === "failed" ? "FAILED" : row.verdict;
  const verdict = label.padEnd(6);
  const tail = row.reason ? `  reason=${row.reason}` : "";
  return `${counter} ${verdict} ${cache} ${elapsed}  ${row.filePath}${tail}`;
}

export function formatSummary(summary: RunSummary): string {
  const ratio =
    summary.scored === 0
      ? "n/a"
      : `${Math.round((summary.cacheHits / summary.scored) * 100)}%`;
  const elapsed = `${(summary.totalElapsedMs / 1000).toFixed(1)}s`;
  return [
    "",
    `ds-police summary:`,
    `  total enrolled : ${summary.total}`,
    `  scored         : ${summary.scored}`,
    `  skipped fresh  : ${summary.skipped}`,
    `  PASS           : ${summary.passed}`,
    `  WARN           : ${summary.warned}`,
    `  BLOCK          : ${summary.blocked}`,
    `  FAILED         : ${summary.failed}`,
    `  cache-hit ratio: ${ratio}`,
    `  memo hits      : ${summary.memoHits}`,
    `  elapsed        : ${elapsed}`,
  ].join("\n");
}
