import { ThemeOptions } from '@mui/material/styles';
import { UITheme } from '../theme-colors';

declare const createLightPalette: (uiTheme: UITheme) => ThemeOptions["palette"];
export default createLightPalette;
