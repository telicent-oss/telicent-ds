import { logger } from "./logger";

/**
 * Wraps an async fn so that:
 * - If the browser is offline, waits `delay` ms and retries.
 * - If any other error occurs (CORS, 401, parsing, etc.), it throws immediately.
 */
export function withOfflineRetryAsync<T>(
  fn: () => Promise<T>,
  delay = 5000
): () => Promise<T> {
  let isOnline = navigator.onLine;

  // keep isOnline in sync with real events (DevTools offline doesn’t flip this)
  window.addEventListener("offline", () => {
    isOnline = false;
    logger.log("Detected going offline");
  });
  window.addEventListener("online", () => {
    isOnline = true;
    logger.log("Detected going online");
  });

  const wrapped = async (): Promise<T> => {
    // If we know we’re offline, wait and retry
    if (!isOnline) {
      logger.log(`Offline—retrying in ${delay}ms`);
      await new Promise((r) => setTimeout(r, delay));
      return wrapped();
    } else {
      logger.log(`Is online, continuing`);
    }

    // Browser thinks it’s online, so any error here is non-offline
    return fn();
  };

  return wrapped;
}
