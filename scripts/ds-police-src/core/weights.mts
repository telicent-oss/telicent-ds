import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import YAML from "yaml";
import {
  DEFAULT_WEIGHTS,
  WeightsConfig,
  WeightsConfigSchema,
} from "../types.mts";
import { normaliseBytes, sha256 } from "./hash.mts";

export interface LoadedWeights {
  config: WeightsConfig;
  sha: string;
  source: "file" | "default";
  path: string;
}

export async function loadWeights(repoRoot: string): Promise<LoadedWeights> {
  const path = resolve(repoRoot, "guidance", "weights.yml");
  if (!existsSync(path)) {
    const yaml = YAML.stringify(DEFAULT_WEIGHTS);
    return {
      config: DEFAULT_WEIGHTS,
      sha: sha256(normaliseBytes(yaml)),
      source: "default",
      path,
    };
  }
  const raw = await readFile(path, "utf8");
  const parsed = YAML.parse(raw);
  const result = WeightsConfigSchema.safeParse(parsed);
  if (!result.success) {
    throw new Error(
      `invalid guidance/weights.yml: ${result.error.message}`,
    );
  }
  return {
    config: result.data,
    sha: sha256(normaliseBytes(raw)),
    source: "file",
    path,
  };
}
