import { existsSync } from "node:fs";
import { relative } from "node:path";
import {
  enumerateSidecars,
  isEmptySidecar,
  readSidecar,
  SidecarParseError,
  sourcePathForSidecar,
} from "../core/sidecar.mts";
import { sha256File } from "../core/hash.mts";
import { loadGuidance } from "../core/guidance.mts";
import { loadWeights } from "../core/weights.mts";

export interface StatusRow {
  file: string;
  exists: boolean;
  empty: boolean;
  sourceFresh: boolean | null;
  guidanceFresh: boolean | null;
  weightsFresh: boolean | null;
  severity: string;
  mui: string;
  verdict: string;
  status: string;
}

export async function runStatus(cwd: string): Promise<StatusRow[]> {
  const guidance = await loadGuidance(cwd);
  const weights = await loadWeights(cwd);
  const sidecarPaths = await enumerateSidecars(cwd);
  sidecarPaths.sort();

  const rows: StatusRow[] = [];
  for (const sidecarPath of sidecarPaths) {
    const sourcePath = sourcePathForSidecar(sidecarPath);
    const exists = existsSync(sourcePath);

    if (await isEmptySidecar(sidecarPath)) {
      rows.push({
        file: relative(cwd, sourcePath),
        exists,
        empty: true,
        sourceFresh: null,
        guidanceFresh: null,
        weightsFresh: null,
        severity: "-",
        mui: "-",
        verdict: "-",
        status: exists ? "empty" : "orphan+empty",
      });
      continue;
    }

    let sidecar;
    try {
      sidecar = await readSidecar(sidecarPath);
    } catch (err) {
      if (err instanceof SidecarParseError) {
        rows.push({
          file: relative(cwd, sourcePath),
          exists,
          empty: false,
          sourceFresh: null,
          guidanceFresh: null,
          weightsFresh: null,
          severity: "-",
          mui: "-",
          verdict: "-",
          status: "parse-error",
        });
        continue;
      }
      throw err;
    }

    const sourceSha = exists ? await sha256File(sourcePath) : null;
    rows.push({
      file: relative(cwd, sourcePath),
      exists,
      empty: false,
      sourceFresh: sourceSha === null ? null : sourceSha === sidecar.source_sha,
      guidanceFresh: sidecar.guidance_sha === guidance.sha,
      weightsFresh: sidecar.weights_sha === weights.sha,
      severity: sidecar.overall.severity,
      mui:
        sidecar.overall.mui_consistency === "n/a"
          ? "n/a"
          : String(sidecar.overall.mui_consistency),
      verdict: sidecar.overall.verdict,
      status: sidecar.status === "failed" ? "failed" : exists ? "ok" : "orphan",
    });
  }
  return rows;
}

export function formatStatusTable(rows: StatusRow[]): string {
  if (rows.length === 0) return "(no enrolled files)";
  const header = [
    "FILE",
    "VERDICT",
    "SEVERITY",
    "MUI",
    "SRC",
    "GUIDE",
    "WEIGHTS",
    "STATUS",
  ];
  const body = rows.map((r) => [
    r.file,
    r.verdict,
    r.severity,
    r.mui,
    fmtBool(r.sourceFresh),
    fmtBool(r.guidanceFresh),
    fmtBool(r.weightsFresh),
    r.status,
  ]);
  const widths = header.map((h, i) =>
    Math.max(h.length, ...body.map((row) => row[i].length)),
  );
  const fmt = (cells: string[]) =>
    cells.map((c, i) => c.padEnd(widths[i])).join("  ");
  return [fmt(header), fmt(header.map(() => "")), ...body.map(fmt)].join("\n");
}

function fmtBool(value: boolean | null): string {
  if (value === null) return "-";
  return value ? "fresh" : "stale";
}
