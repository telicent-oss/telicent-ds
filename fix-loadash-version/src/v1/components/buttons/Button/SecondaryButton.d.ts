import { default as React } from '../../../../../node_modules/react';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
export type SecondaryButtonProps = Omit<MUIButtonProps, "variant" | "color">;
export declare const SecondaryButton: React.ForwardRefExoticComponent<Omit<SecondaryButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default SecondaryButton;
