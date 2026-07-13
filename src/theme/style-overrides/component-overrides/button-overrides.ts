import { ThemeOptions } from "@mui/material";
import { darken } from "@mui/material/styles";
import THEME_COLORS, { UITheme } from "../../colors/theme-colors";

// GeoGreen light mode uses a dark green as its primary so foreground stays
// legible, but the Figma hero (contained) button keeps the bright brand green
// fill with black text. This is the one place the fill diverges from the
// primary token, so it is applied here rather than in the palette.
const GEO_GREEN_FILL = "#9DDD31";

const generateButtonOverrides = (uiTheme: UITheme) =>
  ({
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingInline: theme.spacing(2),
        }),
        outlinedInherit: ({ theme }) => ({
          border: `1px solid #CFD8DC`,
          boxShadow: theme.shadows[2],
        }),
        outlinedPrimary: ({ theme }) => ({
          border: `1px solid ${theme.palette.primary.main}`,
        }),
        containedPrimary: ({ theme }) =>
          uiTheme === "GeoGreen" && theme.palette.mode === "light"
            ? {
                backgroundColor: GEO_GREEN_FILL,
                color: theme.palette.common.black,
                "&:hover": {
                  backgroundColor: darken(GEO_GREEN_FILL, 0.12),
                },
              }
            : {},
        startIcon: {
          ">*:nth-last-of-type(1)": {
            fontSize: "inherit",
          },
        },
        endIcon: {
          ">*:nth-last-of-type(1)": {
            fontSize: "inherit",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  } satisfies ThemeOptions["components"]);

export default generateButtonOverrides;
