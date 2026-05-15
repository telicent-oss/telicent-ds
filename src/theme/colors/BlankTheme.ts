import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

const main = "#000000";

const Blank = {
  primary: {
    main: main,
    dark: alpha(main, 0.7),
    light: alpha(main, 0.5),
    contrastText: common.white,
  },
};

export default Blank;
