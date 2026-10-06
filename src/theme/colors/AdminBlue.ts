import { common } from "@mui/material/colors";

const darkMain = "#20BCFA";
const lightMain = "#2F44CA";

// Dark / light values are the sRGB composites of the previous
// alpha(main, 0.7) / alpha(main, 0.5) overlays over each mode's
// background, pinned as explicit hex to match the pattern the other
// themes follow.
const AdminBlue = {
  dark: {
    primary: {
      main: darkMain,
      dark: "#1F8CB8",
      light: "#1F6D8C",
      contrastText: common.black,
    },
  },
  light: {
    primary: {
      main: lightMain,
      dark: "#6C7AD8",
      light: "#949FE2",
      contrastText: "#FFFFFF",
    },
  },
};

export default AdminBlue;
