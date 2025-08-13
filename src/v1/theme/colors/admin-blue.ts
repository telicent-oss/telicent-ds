import { alpha } from "@mui/material/styles";
import { Primary } from "../../components/buttons/Button/Button.stories";
import { common } from "@mui/material/colors";

const main = "#20BCFA";

const ADMIN_BLUE = {
  primary: {
    main: main,
    dark: alpha(main, 0.7),
    light: alpha(main, 0.5),
    contrastText: common.black,
  },
};

// const ADMIN_BLUE = {
//   50: alpha(main, 0.1),
//   100: alpha(main, 0.2),
//   200: alpha(main, 0.3),
//   400: alpha(main, 0.5),
//   500: main,
//   600: alpha(main, 0.7),
// };

export default ADMIN_BLUE;
