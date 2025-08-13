import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

const main = "#000000";

const BLANK = {
  primary: {
    main: main,
    dark: alpha(main, 0.7),
    light: alpha(main, 0.5),
    contrastText: common.white,
  },
};

// const BLANK = {
//   50: alpha(main, 0.1),
//   100: alpha(main, 0.2),
//   200: alpha(main, 0.3),
//   400: alpha(main, 0.5),
//   500: main,
//   600: alpha(main, 0.7),
// };

export default BLANK;
