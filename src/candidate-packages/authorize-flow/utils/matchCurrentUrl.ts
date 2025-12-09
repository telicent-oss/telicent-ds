import { normalizePathname } from "./normalizePathname";
import { parseAbsoluteUrl } from "./parseAbsoluteUrl";

export const matchCurrentUri = (
  target?: string | URL,
  current?: string | URL
): boolean => {
  if (typeof window === "undefined") return false;
  if (!target) {
    console.error("[AuthProvider] redirectUri missing; cannot identify callback safely");
    return false;
  }

  try {
    const targetUrl = parseAbsoluteUrl(target);

    if (!targetUrl.origin || !targetUrl.pathname) {
      console.error(
        "[AuthProvider] redirectUri must be absolute for OAuth web flows"
      );
      return false;
    }

    if (targetUrl.hash) {
      console.warn(
        "[AuthProvider] detected hash: Hash routing is not supported in callback detection"
      );
    }

    const currentUrl = current
      ? parseAbsoluteUrl(current)
      : new URL(window.location.href);

    const currentPath = normalizePathname(currentUrl.pathname);
    const targetPath = normalizePathname(targetUrl.pathname);

    return currentUrl.origin === targetUrl.origin && currentPath === targetPath;
  } catch (err) {
    console.error(
      "[AuthProvider] Failed to parse redirectUri for comparison",
      err
    );
    return false;
  }
};