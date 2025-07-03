import { ThemeOptions } from "@mui/material";
import { UITheme } from "../colors/theme-colors";
import * as componentOverrides from "./component-overrides";
import { TYPOGRAPHY_FONT_FACES } from "./typography";

const generateComponentOverrides = (uiTheme: UITheme) =>
  ({
    ...componentOverrides.AVATAR_OVERRIDES,
    ...componentOverrides.generateButtonOverrides(uiTheme),
    ...componentOverrides.generateCardOverrides(uiTheme),
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: "flex",
          alignItems: "center",
          margin: theme.spacing(0, 1),
          borderRadius: theme.shape.borderRadius,
          border: "1px solid transparent",
          "&.Mui-selected": {
            backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : "rgba(0, 0, 0, 0.04)",
            color: theme.palette.primary.main,
          },
          "&.Mui-selected.Mui-selected": {
            backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : "rgba(0, 0, 0, 0.04)",
          },
          "&.Mui-selected.Mui-selected:hover": {
            backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : "rgba(0, 0, 0, 0.04)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : "rgba(0, 0, 0, 0.04)",
            color: theme.palette.primary.main,
            backgroundImage: "none",
          },
          "& .MuiPaper-root": {
            backgroundColor: theme.palette.mode === "dark" ? "#2A2A2A" : "#ffffff",
          },
          "&:hover": {
            backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : "rgba(0, 0, 0, 0.04)",
            border: `1px solid ${theme.palette.primary.main}`,
          },
        }),
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 64,
        },
      },
    },
    MuiCssBaseline: {
      ...TYPOGRAPHY_FONT_FACES.MuiCssBaseline,
    },
  } satisfies ThemeOptions["components"]);

export default generateComponentOverrides;
