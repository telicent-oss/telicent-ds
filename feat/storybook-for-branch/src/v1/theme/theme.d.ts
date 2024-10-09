import { ThemeOptions } from '@mui/material';
import { UITheme } from './colors/theme-colors';

declare const createTheme: (themeColor: UITheme, dark: boolean) => ThemeOptions;
export default createTheme;
