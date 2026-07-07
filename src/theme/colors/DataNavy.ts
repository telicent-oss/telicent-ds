import { alpha } from "@mui/material/styles";

const main = "#2F44CA";

const DataNavy = {
  light: {
    primary: {
      main,
      dark: alpha(main, 0.7),
      light: alpha(main, 0.5),
      contrastText: "#FFFFFF",
    },
  },
};

export default DataNavy;
