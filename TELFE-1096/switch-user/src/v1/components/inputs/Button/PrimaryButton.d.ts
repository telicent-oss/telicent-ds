import { default as React } from '../../../../../node_modules/react';
import { ButtonProps } from '@mui/material';

type PrimaryButtonProps = Omit<ButtonProps, "variant" | "color">;
declare const PrimaryButton: React.ForwardRefExoticComponent<Omit<PrimaryButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default PrimaryButton;
