import { default as React } from '../../../../../node_modules/react';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
type TertiaryButtonProps = Omit<MUIButtonProps, "variant" | "color">;
export declare const TertiaryButton: React.ForwardRefExoticComponent<Omit<TertiaryButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default TertiaryButton;
