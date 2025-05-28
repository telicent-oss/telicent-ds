export declare const retry: <T>(fn: () => Promise<T>, { retries, baseDelayMs, backOffFactor, onRetry, }?: {
    retries?: number;
    baseDelayMs?: number;
    backOffFactor?: number;
    onRetry?: (error: unknown, attempt: number, retries: number) => void;
}) => Promise<T>;
