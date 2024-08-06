import { common } from "@mui/material/colors";
import { alpha, getContrastRatio } from "@mui/material/styles";
import DATA_NAVY from "./data-navy";

export type UITheme = "light" | "DataNavy";

const lightMain = common.white;

const THEME_COLORS = {
  DataNavy: {
    ...DATA_NAVY,
    main: DATA_NAVY[500],
    light: DATA_NAVY[400],
    dark: DATA_NAVY[600],
    contrastText: common.white,
  },
  light: {
    main: lightMain,
    light: alpha(lightMain, 0.5),
    dark: alpha(lightMain, 0.9),
    contrastText: "#111",
  },
};

export default THEME_COLORS;
