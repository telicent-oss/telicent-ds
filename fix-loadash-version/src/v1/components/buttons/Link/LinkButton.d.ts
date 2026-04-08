import { default as React } from '../../../../../node_modules/react';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
type LinkButtonProps = Omit<MUIButtonProps, "variant" | "color">;
declare const Link: React.ForwardRefExoticComponent<Omit<LinkButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Link;
