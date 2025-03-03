import { default as React } from '../../../../../node_modules/react';
import { IconButtonProps as MUIIconButtonProps } from '@mui/material/IconButton';

declare const IconButton: React.ForwardRefExoticComponent<Omit<MUIIconButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;
