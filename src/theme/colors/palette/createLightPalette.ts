import { ThemeOptions } from "@mui/material/styles";
import merge from "lodash.merge";
import THEME_COLORS, { UITheme } from "../theme-colors";
import { baseLightPalette } from "./basePalette";

const createLightPalette = (uiTheme: UITheme): ThemeOptions["palette"] => {
  const themePalette = THEME_COLORS[uiTheme].light ?? THEME_COLORS[uiTheme].dark;
  // Order matters: seed establishes mode + primary, the shared base fills the
  // remaining tokens, then the theme's own palette merges last so any per-theme
  // overrides (tertiary, text, background) win over the base defaults.
  return merge({ mode: "light" as const, primary: themePalette?.primary }, baseLightPalette, themePalette);
};

export default createLightPalette;
