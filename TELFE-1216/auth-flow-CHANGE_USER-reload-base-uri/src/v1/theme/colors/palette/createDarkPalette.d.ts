import { ThemeOptions } from '@mui/material';
import { UITheme } from '../theme-colors';

declare const createDarkPalette: (uiTheme: UITheme) => ThemeOptions["palette"];
export default createDarkPalette;
