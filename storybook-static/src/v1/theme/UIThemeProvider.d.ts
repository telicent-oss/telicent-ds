import { default as React } from 'react';
import { UITheme } from './colors/theme-colors';

type UIThemeProviderProps = React.PropsWithChildren & {
    theme: UITheme;
};
declare const UIThemeProvider: React.FC<UIThemeProviderProps>;
export default UIThemeProvider;
