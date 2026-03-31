import { alpha, ThemeOptions } from "@mui/material/styles";
import THEME_COLORS, { UITheme } from "../theme-colors";

const createLightPalette = (uiTheme: UITheme): ThemeOptions["palette"] => ({
  mode: "light",
  primary: THEME_COLORS[uiTheme].primary,
  // secondary: {
  //   main: "#F9F9F9",
  // },

  tertiary: {
    main: "#8094A3",
    dark: alpha("#8094A3", 0.7),
    light: alpha("#8094A3", 0.5),
    contrastText: "#252525",
  },
  text: {
    primary: "#000000",
    secondary: "#000000",
    disabled: "#999999",
  },
  background: {
    default: "#F9F9F9",
  },
});

export default createLightPalette;
