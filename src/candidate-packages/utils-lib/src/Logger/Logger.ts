export type LevelString = "debug" | "info" | "warn" | "error";

export type Level = LevelString | number;

export const levelOrder: Record<LevelString, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

/**
 * BufferedLogger
 *
 * Buffers log calls until a level is set, then flushes buffered messages
 * at or above that level and logs subsequent calls immediately.
 *
 * @example
 * ```ts
 * import { BufferedLogger } from './buffered-logger';
 *
 * const logger = new BufferedLogger();
 *
 * // These calls are buffered
 * logger.debug('debug before init');
 * logger.info('info before init');
 *
 * // Initialize log level and flush buffer
 * logger.setLevel('info');
 *
 * // Only "info" and above were flushed; debug was dropped
 *
 * // Subsequent calls log immediately
 * logger.debug('this won’t show');
 * logger.warn('this will show as warning');
 * ```
 *
 * @method setLevel
 * @param {'debug'|'info'|'warn'|'error'} level — minimum level to log
 *
 * @method debug
 * @param {...any} args — arguments forwarded to console.debug
 *
 * @method info
 * @param {...any} args — arguments forwarded to console.info
 *
 * @method warn
 * @param {...any} args — arguments forwarded to console.warn
 *
 * @method error
 * @param {...any} args — arguments forwarded to console.error
 */

export class Logger {
  private buffer: Array<{ level: LevelString; args: unknown[] }> = [];
  private currentLevelNum = levelOrder.info;
  private ready = false;

  constructor(level?: Level) {
    if (level !== undefined) this.init(level);
  }

  init(level: Level): void {
    this.currentLevelNum =
      typeof level === "number"
        ? level
        : levelOrder[level] ?? this.currentLevelNum;
    this.ready = true;
    this.flush();
  }

  private shouldLog(lvl: LevelString): boolean {
    return levelOrder[lvl] >= this.currentLevelNum;
  }

  private flush(): void {
    for (const { level, args } of this.buffer) {
      if (this.shouldLog(level)) console[level](...args);
    }
    this.buffer = [];
  }

  private record(lvl: LevelString, ...args: unknown[]): void {
    if (!this.ready) {
      this.buffer.push({ level: lvl, args });
    } else if (this.shouldLog(lvl)) {
      console[lvl](...args);
    }
  }

  debug = (...args: unknown[]) => this.record("debug", ...args);
  info = (...args: unknown[]) => this.record("info", ...args);
  warn = (...args: unknown[]) => this.record("warn", ...args);
  error = (...args: unknown[]) => this.record("error", ...args);
}
