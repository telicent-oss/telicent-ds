import zod from "zod";
import DataNavy from "./DataNavy";
import DocumentPink from "./DocumentPink";
import GraphOrange from "./GraphOrange";
import AdminBlue from "./AdminBlue";
import Blank from "./BlankTheme";

export const UIThemeSchema = zod.enum(["DataNavy", "DocumentPink", "GraphOrange", "AdminBlue", "Blank"]);
export type UITheme = zod.infer<typeof UIThemeSchema>;

export type PaletteColor = {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
};

export type TextPalette = {
  primary: string;
  secondary: string;
  disabled: string;
};

export type BackgroundPalette = {
  default: string;
  paper?: string;
};

// A single mode (light or dark) of a theme. `primary` is the only required
// token; every other token is an optional override of the shared base palette
// (see ./palette/basePalette). Supply a partial object to tweak individual
// fields, or a full object to replace a base token entirely.
export type ThemeModePalette = {
  primary: PaletteColor;
  tertiary?: PaletteColor;
  text?: Partial<TextPalette>;
  background?: Partial<BackgroundPalette>;
};

export type ThemeColor = {
  dark?: ThemeModePalette;
  light?: ThemeModePalette;
};

const THEME_COLORS: Record<UITheme, ThemeColor> = {
  DataNavy,
  DocumentPink,
  GraphOrange,
  AdminBlue,
  Blank,
};

export default THEME_COLORS;
