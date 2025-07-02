import { default as React } from '../../../../../node_modules/react';
import { ToggleButtonProps as MUIToggleButtonProps } from '@mui/material/ToggleButton';

interface FloatingPanelToggleButtonProps extends Omit<MUIToggleButtonProps, "sx" | "classes" | "color" | "onClick" | "selected"> {
    /**
     * The unique identifier
     */
    id: string;
    /**
     * Tooltip title
     */
    tooltip?: string;
}
declare const FloatingPanelToggleButton: React.FC<FloatingPanelToggleButtonProps>;
export default FloatingPanelToggleButton;
export type { FloatingPanelToggleButtonProps };
