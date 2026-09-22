import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

const main = "#F2A64B";
const mainLight = "#A65200";

const GraphOrange = {
  dark: {
    primary: {
      main: main,
      dark: alpha(main, 0.7),
      light: alpha(main, 0.5),
      contrastText: common.black,
    },
  },
  light: {
    // The app colour shifts per mode rather than splitting into a
    // second token, so components keep reading primary alone.
    // contrastThreshold 4.5 resolves #FFF on mainLight (5.49:1).
    //
    // dark / light are ramp steps, not alpha: over a LIGHT ground
    // alpha(mainLight, 0.7) resolves lighter than main, so .dark
    // would read as a tint. Dark mode does not have that problem,
    // which is why it keeps alpha() above.
    primary: {
      main: mainLight, // 700
      dark: "#874300", // 800 — pressed, link hover
      light: "#C06806", // 600 — still 4.02:1, safe on borders
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F0F2F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1D21",
      secondary: "#5A6172", // 5.53:1 on default, 6.20:1 on paper
    },
    divider: "rgba(26, 29, 33, 0.12)",
    action: {
      hover: "rgba(26, 29, 33, 0.04)",
    },
  },
};

export default GraphOrange;
