import { default as React } from 'react';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';

export type ButtonProps = Omit<MUIButtonProps, "color" | "classes" | "component" | "disableFocusRipple" | "disableRipple" | "href" | "sx" | "variant"> & Partial<{
    variant: "primary" | "secondary" | "tertiary" | "link";
}>;
declare const Button: React.FC<ButtonProps>;
export default Button;
