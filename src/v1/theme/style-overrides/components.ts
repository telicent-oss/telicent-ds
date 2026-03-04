import { alpha, ThemeOptions } from "@mui/material";
import { UITheme } from "../colors/theme-colors";
import * as componentOverrides from "./component-overrides";
import { FONT_FACES_CSS } from "./typography";
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
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
          },
          "&.Mui-selected.Mui-selected": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
          },
          "&.Mui-selected.Mui-selected:hover": {
            backgroundColor: theme.palette.background.default,
          },
          "&.Mui-selected:hover": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
            backgroundImage: "none",
          },
          "& .MuiPaper-root": {
            backgroundColor: theme.palette.mode === "dark" ? "#2A2A2A" : "#ffffff",
          },
          "&:hover": {
            backgroundColor: theme.palette.background.default,
            border: `1px solid ${theme.palette.primary.main}`,
          },
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        tag: {
          marginTop: 0,
          marginBottom: 0,
        },
        paper: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
        }),
        listbox: ({ theme }) => ({
          padding: theme.spacing(0.5, 0),
        }),
        option: ({ theme }) => ({
          display: "flex",
          alignItems: "center",
          margin: theme.spacing(0, 1),
          borderRadius: theme.shape.borderRadius,
          border: "1px solid transparent",
          padding: theme.spacing(1, 2),
          "&.Mui-selected, &[aria-selected='true']": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
          },
          "&.Mui-selected:hover, &[aria-selected='true']:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            backgroundImage: "none",
          },

          "&:hover, &.Mui-focused": {
            backgroundColor: `${theme.palette.background.default} !important`,
            border: `1px solid ${theme.palette.primary.main} !important`,
          },

          "&[aria-selected='true']": {
            backgroundColor: `${theme.palette.background.default} !important`,
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.background.default}`,
          },
          "&[aria-selected='true']:hover, &.Mui-focused[aria-selected='true']": {
            backgroundColor: `${theme.palette.background.default} !important`,
            color: theme.palette.primary.main,
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
      styleOverrides: (theme) => `
     ${FONT_FACES_CSS}

     /* ✅ Universal scrollbar styling */
    * {
      scrollbar-width: thin;
      scrollbar-color: ${theme.palette.divider} transparent;
    }
    *::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    *::-webkit-scrollbar-thumb {
      background-color: ${theme.palette.divider};
      border-radius: 8px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    *::-webkit-scrollbar-track {
      background: transparent;
    }
  `,
    },
  } satisfies ThemeOptions["components"]);

export default generateComponentOverrides;
