import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { createHash } from "node:crypto";
import { join, resolve } from "node:path";
import { AgentResponse, AgentResponseSchema } from "../types.mts";

export interface CacheKeyInputs {
  source_sha: string;
  guidance_sha: string;
  weights_sha: string;
  variant?: string;
}

export interface CacheBackend {
  get(key: string): Promise<AgentResponse | null>;
  set(key: string, value: AgentResponse): Promise<void>;
  enabled: boolean;
}

export function cacheKey(inputs: CacheKeyInputs): string {
  const h = createHash("sha256");
  h.update(inputs.source_sha);
  h.update("\0");
  h.update(inputs.guidance_sha);
  h.update("\0");
  h.update(inputs.weights_sha);
  h.update("\0");
  h.update(inputs.variant ?? "default");
  return h.digest("hex");
}

export function defaultCacheDir(): string {
  const override = process.env.DS_POLICE_CACHE_DIR;
  if (override) return resolve(override);
  const xdg = process.env.XDG_CACHE_HOME;
  const base = xdg ?? join(homedir(), ".cache");
  return join(base, "ds-police");
}

export class FsCache implements CacheBackend {
  enabled = true;
  constructor(private readonly dir: string) {}

  private path(key: string): string {
    return join(this.dir, `${key}.json`);
  }

  async get(key: string): Promise<AgentResponse | null> {
    const p = this.path(key);
    if (!existsSync(p)) return null;
    try {
      const raw = await readFile(p, "utf8");
      const parsed = JSON.parse(raw);
      const r = AgentResponseSchema.safeParse(parsed);
      return r.success ? r.data : null;
    } catch {
      return null;
    }
  }

  async set(key: string, value: AgentResponse): Promise<void> {
    await mkdir(this.dir, { recursive: true });
    await writeFile(this.path(key), JSON.stringify(value, null, 2), "utf8");
  }
}

export class NullCache implements CacheBackend {
  enabled = false;
  async get(): Promise<AgentResponse | null> {
    return null;
  }
  async set(): Promise<void> {}
}

export function buildCache(opts: { enabled: boolean; dir?: string }): CacheBackend {
  if (!opts.enabled) return new NullCache();
  return new FsCache(opts.dir ?? defaultCacheDir());
}
