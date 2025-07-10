import { default as zod } from 'zod';

export declare const UIThemeSchema: zod.ZodEnum<["DataNavy", "DocumentPink", "GraphOrange", "AdminBlue", "Blank"]>;
export type UITheme = zod.infer<typeof UIThemeSchema>;
declare const THEME_COLORS: Record<UITheme, {
    50: string;
    100: string;
    200: string;
    400: string;
    500: string;
    600: string;
    main: string;
    light: string;
    dark: string;
    contrastText: string;
}>;
export default THEME_COLORS;
