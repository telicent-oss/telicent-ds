import { Sidecar } from "../types.mts";

export type StaleReason =
  | "empty"
  | "source"
  | "guidance"
  | "weights"
  | "failed"
  | null;

export interface StalenessInputs {
  sourceSha: string;
  guidanceSha: string;
  weightsSha: string;
}

export interface StalenessOptions {
  guidanceDirtyOnly?: boolean;
}

export function reasonForSidecar(
  sidecar: Sidecar,
  inputs: StalenessInputs,
  opts: StalenessOptions = {},
): StaleReason {
  if (sidecar.status === "failed") return "failed";

  if (opts.guidanceDirtyOnly) {
    if (sidecar.guidance_sha !== inputs.guidanceSha) return "guidance";
    if (sidecar.weights_sha !== inputs.weightsSha) return "weights";
    return null;
  }

  if (sidecar.source_sha !== inputs.sourceSha) return "source";
  if (sidecar.guidance_sha !== inputs.guidanceSha) return "guidance";
  if (sidecar.weights_sha !== inputs.weightsSha) return "weights";
  return null;
}
