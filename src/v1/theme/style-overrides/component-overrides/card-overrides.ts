import { alpha, ThemeOptions } from "@mui/material";
import THEME_COLORS, { UITheme } from "../../colors/theme-colors";

const generateCardOverrides = (uiTheme: UITheme) =>
  ({
    MuiCard: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderWidth: 1,
            borderStyle: "solid",
            borderColor:
              uiTheme === "light" || uiTheme === "dark"
                ? "inherit"
                : alpha(THEME_COLORS[uiTheme][200], 0.4),
          },
        },
      ],
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(1),
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(3),
          ":last-child": {
            padding: theme.spacing(3),
          },
        }),
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: 0,
          flexDirection: "row-reverse",
          width: "100%",
        },
      },
    },
  } satisfies ThemeOptions["components"]);

export default generateCardOverrides;
