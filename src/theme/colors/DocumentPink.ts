import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

const main = "#F56AAA";
const mainLight = "#C41C6B";

const DocumentPink = {
  dark: {
    primary: {
      main: main,
      dark: alpha(main, 0.7),
      light: alpha(main, 0.5),
      contrastText: common.black,
    },
  },
  light: {
    primary: {
      main: mainLight, // 700
      dark: "#A11757", // 800 — pressed, link hover
      light: "#E4217C", // 600 — 4.37:1, safe on borders
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F9F9F9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1D21",
      secondary: "#5A6172",
    },
    tertiary: {
      main: "#5A6172",
      dark: "#454B59",
      light: "#767E90",
      contrastText: "#FFFFFF",
    },
    divider: "rgba(26, 29, 33, 0.12)",
    action: {
      hover: "rgba(26, 29, 33, 0.04)",
    },
  },
};

export default DocumentPink;
