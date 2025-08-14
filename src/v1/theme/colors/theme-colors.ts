import zod from "zod";
import DataNavy from "./DataNavy";
import DocumentPink from "./DocumentPink";
import GraphOrange from "./GraphOrange";
import AdminBlue from "./AdminBlue";
import Blank from "./BlankTheme";

export const UIThemeSchema = zod.enum(["DataNavy", "DocumentPink", "GraphOrange", "AdminBlue", "Blank"]);
export type UITheme = zod.infer<typeof UIThemeSchema>;

const THEME_COLORS: Record<
  UITheme,
  {
    primary: {
      main: string;
      dark: string;
      light: string;
      contrastText: string;
    };
    secondary?: {
      main?: string;
      dark?: string;
      light?: string;
      contrastText?: string;
    };
  }
> = {
  DataNavy,
  DocumentPink,
  GraphOrange,
  AdminBlue,
  Blank,
};

export default THEME_COLORS;
