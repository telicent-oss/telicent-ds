import { default as React } from '../../../../node_modules/react';
import { ToggleButtonProps as MUIToggleButtonProps } from '@mui/material/ToggleButton';
export interface TooltipToggleButtonProps extends Omit<MUIToggleButtonProps, "sx" | "classes" | "color"> {
    /**
     * Tooltip text
     */
    tooltip?: string;
}
declare const TooltipToggleButton: React.FC<TooltipToggleButtonProps>;
export default TooltipToggleButton;
