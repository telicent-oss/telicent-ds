import { default as React, ReactNode } from '../../../../node_modules/react';
import { DrawerProps as MuiMuiDrawerProps } from '@mui/material/Drawer';
import { SxProps, Theme } from '@mui/material/styles';
export declare const NAME = "drawer-presentational";
export interface DrawerPresentationalProps extends Omit<MuiMuiDrawerProps, "PaperProps">, React.HTMLAttributes<HTMLDivElement> {
    PaperProps?: MuiMuiDrawerProps["PaperProps"];
    PaperSx?: SxProps<Theme>;
    drawerWidth?: number;
    children: ReactNode;
    onToggle?: React.MouseEventHandler<HTMLButtonElement>;
    id?: string;
}
export declare const resolveWidth: (drawerWidth?: number, styleWidth?: number | string, defaultWidth?: number) => number;
export declare const DrawerPresentational: React.ForwardRefExoticComponent<Omit<DrawerPresentationalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
