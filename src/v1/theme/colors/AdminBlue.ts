import { alpha } from "@mui/material/styles";
import { common } from "@mui/material/colors";

const main = "#20BCFA";

const AdminBlue = {
  primary: {
    main: main,
    dark: alpha(main, 0.7),
    light: alpha(main, 0.5),
    contrastText: common.black,
  },
};

export default AdminBlue;
