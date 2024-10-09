import resolveConfig from "tailwindcss/resolveConfig";
import { PaletteOptions } from "@mui/material/styles/createPalette";
import { PaletteMode } from "@mui/material";
import { Config } from "tailwindcss/types/config";

import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig as Config);
const colors = fullConfig.theme?.colors as { [key: string]: any };
const styles = getComputedStyle(document.body);

const whiteSmoke = {
  light: "#F5F5F5",
  main: colors.whiteSmoke[50],
  dark: colors.whiteSmoke[200],
};

const black = {
  light: colors.black[300],
  main: colors.black[100],
  dark: "#0A0A0A",
};

const getCssVar = (cssVar: string, defaultValue: string) => {
  if (styles?.getPropertyValue(cssVar) === "") return defaultValue;
  return `rgb(${styles.getPropertyValue(cssVar)})`;
};

const appColor100 = "--app-color-100";
const appColor500 = "--app-color-500";
const appColor800 = "--app-color-600";

const getThemePalette = (mode: PaletteMode) => {
  const darkPalette: PaletteOptions = {
    primary: whiteSmoke,
    secondary: {
      light: getCssVar(appColor100, whiteSmoke.light),
      main: getCssVar(appColor500, whiteSmoke.main),
      dark: getCssVar(appColor800, whiteSmoke.dark),
    },
  };

  const lightPalette: PaletteOptions = {
    primary: black,
    secondary: {
      light: getCssVar(appColor100, black.light),
      main: getCssVar(appColor500, black.main),
      dark: getCssVar(appColor800, black.dark),
    },
  };

  const palette: PaletteOptions = {
    mode,
    ...(mode === "dark" ? darkPalette : lightPalette),
    contrastThreshold: 4.5,
  };
  return palette;
};

export default getThemePalette;
