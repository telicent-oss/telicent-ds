import { ThemeOptions } from "@mui/material";

const CARD_OVERRIDES: ThemeOptions["components"] = {
  MuiCard: {
    variants: [
      {
        props: { variant: "outlined" },
        style: {
          border: `1px solid #8D99E270`,
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
};

export default CARD_OVERRIDES;
