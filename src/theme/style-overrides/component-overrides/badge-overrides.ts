import { ThemeOptions } from "@mui/material";

import { UITheme } from "../../colors/theme-colors";

// Rung 4, with the reason it cannot sit higher: the palette carries the
// badge's colours (color="primary" resolves primary.main and, through
// getContrastText, primary.contrastText) but not its shape: the pill's
// size and type, and the ring that stands it off what it overlaps. The
// ring's colour is still read from the palette at render time.
const generateBadgeOverrides = (_uiTheme: UITheme) =>
  ({
    MuiBadge: {
      styleOverrides: {
        badge: ({ theme }) => ({
          // Clicks go to what the badge sits on.
          pointerEvents: "none",
          "&.MuiBadge-standard": {
            minWidth: 20,
            height: 20,
            padding: "0 5px",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 700,
            border: `2px solid ${theme.palette.background.default}`,
          },
        }),
      },
    },
  } satisfies ThemeOptions["components"]);

export default generateBadgeOverrides;
