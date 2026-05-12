import zod from "zod";
import DataNavy from "./DataNavy";
import DocumentPink from "./DocumentPink";
import GraphOrange from "./GraphOrange";
import AdminBlue from "./AdminBlue";
import Blank from "./BlankTheme";
import Wireframe from "./Wireframe";

export const UIThemeSchema = zod.enum(["DataNavy", "DocumentPink", "GraphOrange", "AdminBlue", "Blank", "Wireframe"]);
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
    tertiary?: {
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
  Wireframe,
};

export default THEME_COLORS;
