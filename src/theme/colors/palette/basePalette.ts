import { grey } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

// Shared palette tokens inherited by every theme unless the theme overrides
// them. A theme file may override any of these per mode (see ThemeModePalette);
// tokens not overridden fall back to the values defined here.

export const baseLightPalette = {
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
};

export const baseDarkPalette = {
  tertiary: {
    main: "#6B6B6B",
    dark: alpha("#6B6B6B", 0.7),
    light: alpha("#6B6B6B", 0.5),
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
  grey,
};
