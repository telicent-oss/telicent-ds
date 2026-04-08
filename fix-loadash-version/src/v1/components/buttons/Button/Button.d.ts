import { default as React } from '../../../../../node_modules/react';
import { ButtonBaseProps } from '@mui/material';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { ButtonVariant } from '../../../tokens/button-variants';
type SupportedVariant = ButtonVariant;
export type ButtonProps = Omit<MUIButtonProps, "variant"> & Omit<ButtonBaseProps, "style"> & {
    variant?: SupportedVariant;
};
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
