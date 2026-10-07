import { alpha } from "@mui/material/styles";

const main = "#2F44CA";

/**
 * @deprecated DataNavy is retained for backwards compatibility with apps that
 * still pass `theme="DataNavy"` to `UIThemeProvider`, but is no longer part of
 * the curated theme set — prefer `DocumentPink`, `GraphOrange`, `AdminBlue`,
 * or `GeoGreen` for new work. Hidden from the Storybook theme selector.
 */
const DataNavy = {
  light: {
    primary: {
      main,
      dark: alpha(main, 0.7),
      light: alpha(main, 0.5),
      contrastText: "#FFFFFF",
    },
  },
};

export default DataNavy;
