import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

const main = "#9DDD31";

const GeoGreen = {
  dark: {
    primary: {
      main,
      dark: alpha(main, 0.7),
      light: alpha(main, 0.5),
      contrastText: common.black,
    },
    // Near-black page surface per the GeoGreen spec; paper stays at the base
    // #252525 for elevation contrast.
    background: {
      default: "#080808",
    },
  },
};

export default GeoGreen;
