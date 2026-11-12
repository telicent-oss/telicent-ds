import { common } from "@mui/material/colors";

const main = "#F2A64B";
const mainLight = "#C24D00";

// Dark / light ramp steps are picked to match MUI's auto-derivation
// (darken(main, 0.2) / lighten(main, 0.2)) — the same spread MD ramps
// apply between the 500/700/300 steps — pinned as explicit hex so that
// `.dark` reliably reads darker than `.main` on a light ground (needed
// for Button contained hover direction and ButtonGroup dividers).
const GraphOrange = {
  dark: {
    primary: {
      main,
      dark: "#C1843C",
      light: "#F4B76F",
      contrastText: common.black,
    },
  },
  light: {
    // Known trade-off: `mainLight` is tuned for brand recognition and does
    // not clear WCAG 2.2 AA (4.5:1) in every component context — notably
    // established patterns like the Secondary button variant where it
    // renders as foreground on light surfaces. Shipped per explicit product
    // direction, prioritising brand fidelity over universal AA
    // conformance for this specific token. The gap is documented here
    // rather than silently carried; revisit against the system-wide target
    // in docs/adr/0001-wcag-2.2-aa.md if a brand or component update
    // closes it.
    //
    // The app colour shifts per mode rather than splitting into a second
    // token, so components keep reading primary alone. contrastThreshold
    // 4.5 resolves #FFF on mainLight (5.49:1).
    primary: {
      main: mainLight,
      dark: "#9B3D00",
      light: "#CE7033",
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
