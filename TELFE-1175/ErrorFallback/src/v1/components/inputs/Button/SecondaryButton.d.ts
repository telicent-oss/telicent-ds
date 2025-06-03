import { default as React } from '../../../../../node_modules/react';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';

type SecondaryButtonProps = Omit<MUIButtonProps, "variant" | "color">;
declare const SecondaryButton: React.ForwardRefExoticComponent<Omit<SecondaryButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default SecondaryButton;
