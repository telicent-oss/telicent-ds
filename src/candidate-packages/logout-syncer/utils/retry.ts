// Dumb promise retry
export const retry = async <T>(
  fn: () => Promise<T>,
  {
    retries = 2, // very unlikely
    baseDelayMs = 333,
    backOffFactor = 2,
    onRetry,
  }: {
    retries?: number;
    baseDelayMs?: number;
    backOffFactor?: number;
    onRetry?: (error: unknown, attempt: number) => void;
  } = {}
): Promise<T> => {
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (err) {
      attempt++;
      if (attempt > retries) throw err;
      onRetry?.(err, attempt);
      const delay = baseDelayMs * backOffFactor ** (attempt - 1);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
};
