import { ThemeOptions } from "@mui/material";

const BUTTON_OVERRIDES: ThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        paddingInline: theme.spacing(2),
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
};

export default BUTTON_OVERRIDES;
