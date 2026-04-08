import { default as React } from '../../../../../node_modules/react';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
export type TextButtonProps = Omit<MUIButtonProps, "variant">;
declare const TextButton: React.ForwardRefExoticComponent<Omit<TextButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default TextButton;
