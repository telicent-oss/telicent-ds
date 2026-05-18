export const parseAbsoluteUrl = (value: string | URL): URL => {
  if (value instanceof URL) return value;

  const trimmed = String(value).trim();
  try {
    return new URL(trimmed);
  } catch {
    throw new Error(`Invalid absolute URL: "${trimmed}"`);
  }
};
