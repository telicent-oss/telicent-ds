export type LevelString = "debug" | "info" | "warn" | "error";
export type Level = LevelString | number;
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
export declare class Logger {
    private buffer;
    private currentLevelNum;
    private ready;
    constructor(level?: Level);
    init(level: Level): void;
    private shouldLog;
    private flush;
    private record;
    debug: (...args: unknown[]) => void;
    info: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
}
