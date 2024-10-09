import resolveConfig from "tailwindcss/resolveConfig";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Config } from "tailwindcss/types/config";

import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig as Config);
const twFontFamily = fullConfig.theme?.fontFamily as {
  [key: string]: Array<string>;
};

const typography: TypographyOptions = {
  fontFamily: twFontFamily["teli-body"].join(","),
  htmlFontSize: 14,
  body1: {
    fontSize: 14,
  },
  button: {
    fontWeight: 400,
  },
};

export default typography;
