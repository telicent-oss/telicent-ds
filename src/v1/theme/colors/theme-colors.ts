import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import zod from "zod";
import DATA_NAVY from "./data-navy";
import DOCUMENT_PINK from "./document-pink";
import GRAPH_ORANGE from "./graph-orange";
import ADMIN_BLUE from "./admin-blue";

export const UIThemeSchema = zod.enum(["DataNavy", "DocumentPink", "GraphOrange", "AdminBlue", "Blank"]);
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
    main: lightMain, // TODO fix dark theme
    light: alpha(lightMain, 0.5),
    dark: alpha(lightMain, 0.9),
    contrastText: common.white,
  },
  DocumentPink: {
    ...DOCUMENT_PINK,
    main: DOCUMENT_PINK[500],
    light: DOCUMENT_PINK[400],
    dark: DOCUMENT_PINK[600],
    contrastText: common.black,
  },
  GraphOrange: {
    ...GRAPH_ORANGE,
    main: GRAPH_ORANGE[500],
    light: GRAPH_ORANGE[400],
    dark: GRAPH_ORANGE[600],
    contrastText: common.black,
  },
  AdminBlue: {
    ...ADMIN_BLUE,
    main: ADMIN_BLUE[500],
    light: ADMIN_BLUE[400],
    dark: ADMIN_BLUE[600],
    contrastText: common.black,
  },
};

export default THEME_COLORS;
