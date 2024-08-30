import { default as React } from '../../../../../node_modules/react';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';

export type ButtonProps = Omit<MUIButtonProps, "color" | "classes" | "component" | "disableFocusRipple" | "disableRipple" | "href" | "sx" | "variant"> & Partial<{
    variant: "primary" | "secondary" | "tertiary" | "link" | "text";
    color: "primary" | "inherit";
}>;
declare const Button: React.FC<ButtonProps>;
export default Button;
