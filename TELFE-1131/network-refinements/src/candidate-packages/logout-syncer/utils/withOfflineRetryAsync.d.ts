/**
 * Wraps an async fn so that:
 * - If the browser is offline, waits `delay` ms and retries.
 * - If any other error occurs (CORS, 401, parsing, etc.), it throws immediately.
 */
export declare function withOfflineRetryAsync<T>(fn: () => Promise<T>, delay?: number): () => Promise<T>;
