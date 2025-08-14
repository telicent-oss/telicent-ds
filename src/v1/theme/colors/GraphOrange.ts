import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

const main = "#F2A64B";

const GraphOrange = {
  primary: {
    main: main,
    dark: alpha(main, 0.7),
    light: alpha(main, 0.5),
    contrastText: common.black,
  },
};

export default GraphOrange;
