import { ThemeOptions } from '@mui/material';
import { UITheme } from './colors/theme-colors';

declare const createTheme: (themeColor: UITheme) => ThemeOptions;
export default createTheme;
