import { alpha } from "@mui/material/styles";
import { common } from "@mui/material/colors";

const darkMain = "#20BCFA";
const lightMain = "#2F44CA";

const AdminBlue = {
  dark: {
    main: darkMain,
    dark: alpha(darkMain, 0.7),
    light: alpha(darkMain, 0.5),
    contrastText: common.black,
  },
  light: {
    main: lightMain,
    dark: alpha(lightMain, 0.7),
    light: alpha(lightMain, 0.5),
    contrastText: "#FFFFFF",
  },
};

export default AdminBlue;
