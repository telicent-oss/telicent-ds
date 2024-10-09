import { Components } from "@mui/material";
import resolveConfig from "tailwindcss/resolveConfig";
import { Config } from "tailwindcss/types/config";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig as Config);
const colors = fullConfig.theme?.colors as { [key: string]: string };

const getThemeComponents = () => {
  const components: Components = {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          ":hover": {
            backgroundColor: colors.black[300],
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "0.25rem",
          ":focus": {
            color: colors["app-color"][500],
          },
        },
      },
    },
  };
  return components;
};

export default getThemeComponents;
