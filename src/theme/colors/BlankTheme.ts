import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

const main = "#000000";
const darkMain = "#FFFFFF";

export const Blank = {
  light: {
    primary: {
      main,
      dark: alpha(main, 0.7),
      light: alpha(main, 0.5),
      contrastText: common.white,
    },
  },
  dark: {
    primary: {
      main: darkMain,
      dark: alpha(darkMain, 0.7),
      light: alpha(darkMain, 0.5),
      contrastText: common.black,
    },
  },
};

export default Blank;
