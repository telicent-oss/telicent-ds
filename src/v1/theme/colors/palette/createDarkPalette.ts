import { ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";
import THEME_COLORS, { UITheme } from "../theme-colors";
import merge from "lodash.merge";
import createLightPalette from "./createLightPalette";

const createDarkPalette = (uiTheme: UITheme): ThemeOptions["palette"] =>
  merge(createLightPalette(uiTheme), {
    mode: "dark",
    primary: THEME_COLORS[uiTheme].primary,
    secondary: {
      main: "#8a8a8a",
      light: "#A1A1A1",
      dark: "#606060",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#ececec",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "#999999",
    },
    background: {
      default: "#1D1D1D",
      paper: "#252525",
    },
    grey: {
      ...grey,
    },
  });

export default createDarkPalette;
