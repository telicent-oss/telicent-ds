import { common } from "@mui/material/colors";
import { alpha, ThemeOptions } from "@mui/material/styles";
import THEME_COLORS, { UITheme } from "../theme-colors";

const createLightPalette = (uiTheme: UITheme): ThemeOptions["palette"] => ({
  mode: "light",
  primary: {
    main: THEME_COLORS[uiTheme].main,
    light: THEME_COLORS[uiTheme].light,
    dark: THEME_COLORS[uiTheme].dark,
    contrastText: THEME_COLORS[uiTheme].contrastText,
  },
  secondary: {
    main: "#F9F9F9",
  },
  text: {
    primary: "#000000",
    secondary: "#000000",
    disabled: "#999999",
  },
  background: {
    default: "#e3e3e3",
  },
});

export default createLightPalette;
