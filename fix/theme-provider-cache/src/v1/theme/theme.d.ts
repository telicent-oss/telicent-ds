import { ThemeOptions } from '@mui/material/styles';
import { UITheme } from './colors/theme-colors';
import { default as generateComponentOverrides } from './style-overrides/components';

export type ComponentOverrides = ReturnType<typeof generateComponentOverrides>;
export declare const createTheme: (uiTheme: UITheme, palette: ThemeOptions["palette"]) => import('@mui/material/styles').Theme;
export declare const createThemeCached: (uiTheme: UITheme, dark: boolean, skipCache?: boolean) => import('@mui/material/styles').Theme;
export declare const EMPTY_THEME: UITheme;
export default createThemeCached;
