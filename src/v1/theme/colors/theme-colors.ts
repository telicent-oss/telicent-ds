import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import zod from "zod";
import DATA_NAVY from "./data-navy";
import DOCUMENT_PINK from "./document-pink";
import GRAPH_ORANGE from "./graph-orange";
import ADMIN_BLUE from "./admin-blue";

export const UIThemeSchema = zod.enum(["light", "dark", "DataNavy", "DocumentPink", "GraphOrange", "AdminBlue"]);
export type UITheme = zod.infer<typeof UIThemeSchema>;

const lightMain = common.white;

const THEME_COLORS = {
  DataNavy: {
    ...DATA_NAVY,
    main: DATA_NAVY[500],
    light: DATA_NAVY[400],
    dark: DATA_NAVY[600],
    contrastText: common.white,
  },
  light: {
    main: lightMain,
    light: alpha(lightMain, 0.5),
    dark: alpha(lightMain, 0.9),
    contrastText: common.black,
  },
  dark: {
    main: lightMain,
    light: alpha(lightMain, 0.5),
    dark: alpha(lightMain, 0.9),
    contrastText: common.white,
  },
  DocumentPink: {
    ...DOCUMENT_PINK,
    main: DOCUMENT_PINK[500],
    contrastText: common.black,
  },
  GraphOrange: {
    ...GRAPH_ORANGE,
    main: GRAPH_ORANGE[500],
    contrastText: common.black,
  },
  AdminBlue: {
    ...ADMIN_BLUE,
    main: ADMIN_BLUE[500],
    contrastText: common.black,
  },
};

export default THEME_COLORS;
