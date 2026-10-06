import { common } from "@mui/material/colors";

const main = "#F56AAA";
const mainLight = "#B70071";

const DocumentPink = {
  dark: {
    primary: {
      main,
      dark: "#C45488",
      light: "#F787BB",
      contrastText: common.black,
    },
  },
  light: {
    primary: {
      main: mainLight,
      dark: "#92005A",
      light: "#C5338D",
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
    divider: "rgba(26, 29, 33, 0.12)",
    action: {
      hover: "rgba(26, 29, 33, 0.04)",
    },
  },
};

export default DocumentPink;
