export const normalizePathname = (pathname: string): string => {
  if (!pathname) return "/";

  let end = pathname.length;
  // Remove trailing slashes, but keep a single leading slash.
  while (end > 1 && pathname[end - 1] === "/") {
    end -= 1;
  }

  const normalized = pathname.slice(0, end);
  return normalized || "/";
};
