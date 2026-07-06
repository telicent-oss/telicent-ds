import { alpha, ThemeOptions } from "@mui/material";
import { UITheme } from "../../colors/theme-colors";

const generateCardOverrides = (_uiTheme: UITheme) =>
  ({
    MuiCard: {
      variants: [
        {
          props: { variant: "outlined" },
          style: ({ theme }) => ({
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: alpha(theme.palette.primary.main, 0.4),
          }),
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
