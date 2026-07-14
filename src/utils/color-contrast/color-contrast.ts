/**
 * Colour maths shared by the button spec table (see
 * src/components/buttons/Button/ButtonTables.stories.tsx) and its tests.
 * `parseRgb`/`toHex` expect the CSS `rgb()`/`rgba()` strings that
 * getComputedStyle returns, not hex.
 */

export type Rgba = [number, number, number, number];

export const parseRgb = (value: string): Rgba => {
  const [r = 0, g = 0, b = 0, a = 1] = value.match(/[\d.]+/g)?.map(Number) ?? [];
  return [r, g, b, a];
};

export const toHex = (value: string): string => {
  const [r, g, b, a] = parseRgb(value);
  if (a === 0) return "transparent";
  const hex = (n: number) => Math.round(n).toString(16).padStart(2, "0").toUpperCase();
  return `#${hex(r)}${hex(g)}${hex(b)}`;
};

export const relativeLuminance = (color: string): number => {
  const [r, g, b] = parseRgb(color);
  const [rl, gl, bl] = [r, g, b].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
};

export const contrastRatio = (foreground: string, background: string): number => {
  const l1 = relativeLuminance(foreground);
  const l2 = relativeLuminance(background);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

// Floors to 2 decimals rather than rounding, to match the Figma spec sheet and
// to never report a higher ratio than actually achieved (e.g. 12.22677 -> 12.22,
// not 12.23).
export const formatContrastRatio = (ratio: number): string =>
  (Math.floor(ratio * 100) / 100).toFixed(2);
