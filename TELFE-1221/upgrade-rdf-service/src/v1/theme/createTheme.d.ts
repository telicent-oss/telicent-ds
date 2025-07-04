import { ThemeOptions } from '@mui/material/styles';
import { UITheme } from './colors/theme-colors';
import { default as generateComponentOverrides } from './style-overrides/components';

export type ComponentOverrides = ReturnType<typeof generateComponentOverrides>;
export declare const createThemePure: (uiTheme: UITheme, palette: ThemeOptions["palette"]) => import('@mui/material/styles').Theme;
export declare const createTheme: (uiTheme: UITheme, dark: boolean, skipCache?: boolean) => import('@mui/material/styles').Theme;
export default createTheme;
