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

const MAX_CHANNEL_VALUE = 255;
const SRGB_LINEAR_THRESHOLD = 0.03928;
const SRGB_LINEAR_DIVISOR = 12.92;
const SRGB_GAMMA_OFFSET = 0.055;
const SRGB_GAMMA_SCALE = 1.055;
const SRGB_GAMMA_EXPONENT = 2.4;
const RED_LUMA_WEIGHT = 0.2126;
const GREEN_LUMA_WEIGHT = 0.7152;
const BLUE_LUMA_WEIGHT = 0.0722;

const sRgbChannelToLinear = (channel: number): number => {
  const normalized = channel / MAX_CHANNEL_VALUE;
  return normalized <= SRGB_LINEAR_THRESHOLD
    ? normalized / SRGB_LINEAR_DIVISOR
    : ((normalized + SRGB_GAMMA_OFFSET) / SRGB_GAMMA_SCALE) ** SRGB_GAMMA_EXPONENT;
};

export const relativeLuminance = (color: string): number => {
  const [r, g, b] = parseRgb(color);
  const [red, green, blue] = [r, g, b].map(sRgbChannelToLinear);
  return RED_LUMA_WEIGHT * red + GREEN_LUMA_WEIGHT * green + BLUE_LUMA_WEIGHT * blue;
};

const LUMINANCE_OFFSET = 0.05;

export const contrastRatio = (foreground: string, background: string): number => {
  const foregroundLuminance = relativeLuminance(foreground);
  const backgroundLuminance = relativeLuminance(background);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);
  return (lighter + LUMINANCE_OFFSET) / (darker + LUMINANCE_OFFSET);
};

// Floors to 2 decimals rather than rounding, to match the Figma spec sheet and
// to never report a higher ratio than actually achieved (e.g. 12.22677 -> 12.22,
// not 12.23).
export const formatContrastRatio = (ratio: number): string =>
  (Math.floor(ratio * 100) / 100).toFixed(2);
