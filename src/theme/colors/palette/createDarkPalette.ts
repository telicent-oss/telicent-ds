import { ThemeOptions } from "@mui/material/styles";
import merge from "lodash.merge";
import THEME_COLORS, { UITheme } from "../theme-colors";
import { baseDarkPalette } from "./basePalette";

const createDarkPalette = (uiTheme: UITheme): ThemeOptions["palette"] => {
  const themePalette = THEME_COLORS[uiTheme].dark ?? THEME_COLORS[uiTheme].light;
  // Order matters: seed establishes mode + primary, the shared base fills the
  // remaining tokens, then the theme's own palette merges last so any per-theme
  // overrides (tertiary, text, background) win over the base defaults.
  return merge({ mode: "dark" as const, primary: themePalette?.primary }, baseDarkPalette, themePalette);
};

export default createDarkPalette;
