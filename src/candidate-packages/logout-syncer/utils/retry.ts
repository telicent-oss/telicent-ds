// Dumb promise retry
export const retry = async <T>(
  fn: () => Promise<T>,
  {
    retries = 2,
    baseDelayMs = 333,
    backOffFactor = 2,
    onRetry,
  }: {
    retries?: number
    baseDelayMs?: number
    backOffFactor?: number
    onRetry?: (error: unknown, attempt: number, retries: number) => void
  } = {}
): Promise<T> => {
  let lastError: unknown
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const result = fn();
      if (result instanceof Promise) {
        return await result;
      }
      return result;
    } catch (err) {
      lastError = err
      onRetry?.(err, attempt + 1, retries)
      if (attempt === retries) break
      const delay = baseDelayMs * backOffFactor ** attempt
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
  throw lastError
}