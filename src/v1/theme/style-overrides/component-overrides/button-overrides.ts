import { ThemeOptions } from "@mui/material";
import THEME_COLORS, { UITheme } from "../../colors/theme-colors";

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
          backgroundColor: theme.palette.secondary.main,
          // ":hover": {
          //   backgroundColor: `${THEME_COLORS[uiTheme][100]}`,
          // },
        }),
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
