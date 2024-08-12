import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import zod from "zod";
import DATA_NAVY from "./data-navy";
import DOCUMENT_PINK from "./document-pink";

export const UIThemeSchema = zod.enum(["light", "DataNavy", "DocumentPink"]);
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
  DocumentPink: {
    ...DOCUMENT_PINK,
    main: DOCUMENT_PINK[500],
    light: DOCUMENT_PINK[400],
    dark: DOCUMENT_PINK[600],
    contrastText: common.black,
  },
};

export default THEME_COLORS;
