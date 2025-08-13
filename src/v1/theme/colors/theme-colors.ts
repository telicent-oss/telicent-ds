import zod from "zod";
import DATA_NAVY from "./data-navy";
import DOCUMENT_PINK from "./document-pink";
import GRAPH_ORANGE from "./graph-orange";
import ADMIN_BLUE from "./admin-blue";
import BLANK from "./blank";

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
  DataNavy: {
    ...DATA_NAVY,
  },
  DocumentPink: {
    ...DOCUMENT_PINK,
  },
  GraphOrange: {
    ...GRAPH_ORANGE,
  },
  AdminBlue: {
    ...ADMIN_BLUE,
  },
  Blank: {
    ...BLANK,
  },
};

export default THEME_COLORS;
