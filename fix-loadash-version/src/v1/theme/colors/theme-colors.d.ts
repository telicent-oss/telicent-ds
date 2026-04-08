import { default as zod } from 'zod';
export declare const UIThemeSchema: zod.ZodEnum<["DataNavy", "DocumentPink", "GraphOrange", "AdminBlue", "Blank"]>;
export type UITheme = zod.infer<typeof UIThemeSchema>;
declare const THEME_COLORS: Record<UITheme, {
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
}>;
export default THEME_COLORS;
