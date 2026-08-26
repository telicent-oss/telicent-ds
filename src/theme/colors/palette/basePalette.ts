import { grey } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

// Shared palette tokens inherited by every theme unless the theme overrides
// them. A theme file may override any of these per mode (see ThemeModePalette);
// tokens not overridden fall back to the values defined here.

// Bump from MUI default 3.0 (WCAG AA large text) to 4.5 (AA normal text).
// filled Alert / Chip / Button contained use getContrastText(main) at render
// time to pick foreground; a stricter threshold means white text is only
// chosen when it actually passes AA normal (4.5:1) against the fill.
// Consequence per severity documented adjacent to the palette overrides
// (see success + error.main below).
const CONTRAST_THRESHOLD = 4.5;

export const baseLightPalette = {
  contrastThreshold: CONTRAST_THRESHOLD,
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
  contrastThreshold: CONTRAST_THRESHOLD,
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
  // MUI's dark-mode default success is green[400] (#66bb6a) — bright enough
  // that getContrastText picks dark text (~2.5:1 to white would fail AA).
  // green[800] gives ~5.35:1 to white, so getContrastText resolves to #fff
  // and filled Alert renders success with white text + icon. Restores
  // pre-3.6.0 catalog behaviour without a component-level override.
  success: {
    main: "#2e7d32",
  },
  // MUI's dark-mode default error.main is red[500] (#f44336). Contrast to
  // white is 3.76:1 — with the 4.5 threshold, getContrastText would flip to
  // dark text on red, changing error's long-standing visual identity.
  // Overriding main to red[700] (#d32f2f, contrast 5.36:1) keeps white text
  // and pushes the actual filled-Alert background (which paints .dark in
  // dark mode) to a slightly deeper red — no component override needed.
  error: {
    main: "#d32f2f",
  },
  grey,
};
