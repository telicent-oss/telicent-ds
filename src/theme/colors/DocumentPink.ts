import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

const main = "#F56AAA";

const DocumentPink = {
  primary: {
    main: "#F56AAA",
    dark: alpha(main, 0.7),
    light: alpha(main, 0.5),
    contrastText: common.black,
  },
};

export default DocumentPink;
