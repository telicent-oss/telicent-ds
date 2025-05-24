export declare const retry: <T>(fn: () => Promise<T>, { retries, baseDelayMs, backOffFactor, onRetry, }?: {
    retries?: number;
    baseDelayMs?: number;
    backOffFactor?: number;
    onRetry?: (error: unknown, attempt: number) => void;
}) => Promise<T>;
