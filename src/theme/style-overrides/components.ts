import { ThemeOptions } from "@mui/material";

const COMPONENTS_STYLE_OVERRIDES: ThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        paddingInline: theme.spacing(2),
      }),
      outlinedPrimary: ({ theme }) => ({
        border: `1px solid ${theme.palette.primary.main}`,
      }),
    },
  },
};

export default COMPONENTS_STYLE_OVERRIDES;
