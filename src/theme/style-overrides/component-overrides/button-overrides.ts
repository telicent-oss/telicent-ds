import { ThemeOptions } from "@mui/material";
import { UITheme } from "../../colors/theme-colors";

const generateButtonOverrides = (_uiTheme: UITheme) =>
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
