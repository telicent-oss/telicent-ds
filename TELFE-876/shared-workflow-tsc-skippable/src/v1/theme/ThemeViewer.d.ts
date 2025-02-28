import { default as React } from '../../../node_modules/react';

export interface ThemeViewerProps {
    theme: Record<string, any>;
}
/**
 * A bit like JSON.stringify(), but with colour swatches
 */
declare const ThemeViewer: React.FC<ThemeViewerProps>;
export default ThemeViewer;
