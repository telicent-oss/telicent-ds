import { grey } from "@mui/material/colors";

// Shared tokens inherited by every theme; theme files override per mode.

// AA normal text (4.5), not MUI's default AA large (3.0). getContrastText uses
// this to decide whether white reads on filled severity surfaces.
const CONTRAST_THRESHOLD = 4.5;

// Error carries two roles the palette can't collapse into one value:
//   - `.main` is foreground text (FormLabel/FormHelperText.Mui-error) and must
//     pass AA against the page background.
//   - `.dark` is the surface behind white text (filled Alert, DS error tooltips).
// At AA 4.5 no single colour satisfies both on a dark page, so both tokens are
// pinned per mode and components that render white-on-red read `error.dark`.

export const baseLightPalette = {
  contrastThreshold: CONTRAST_THRESHOLD,
  // Tertiary is a theme-agnostic neutral grey; pinned here rather than
  // re-stated in every theme file. `main` reads at 6.20:1 as text on white
  // and 5.97:1 as filled bg behind white — passes AA in both roles.
  tertiary: {
    main: "#5A6172",
    dark: "#454B59",
    light: "#767E90",
    contrastText: "#FFFFFF",
  },
  text: {
    primary: "#000000",
    secondary: "#000000",
    disabled: "#999999",
  },
  background: {
    default: "#F9F9F9",
  },
  error: {
    main: "#d32f2f",
    dark: "#b71c1c",
  },
};

export const baseDarkPalette = {
  contrastThreshold: CONTRAST_THRESHOLD,
  // Mirrors the light-mode tertiary role: `main` reads at 7.66:1 as text on
  // the dark page bg (#1D1D1D) and 6.93:1 as filled bg behind dark text.
  tertiary: {
    main: "#A0A0A0",
    dark: "#808080",
    light: "#BFBFBF",
    contrastText: "#1A1A1A",
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
  // Darker than MUI's dark-mode default so getContrastText picks white on
  // filled success Alerts.
  success: {
    main: "#2e7d32",
  },
  error: {
    main: "#ff5252",
    dark: "#c62828",
  },
  grey,
};
