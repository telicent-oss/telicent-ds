import { default as React } from '../../../../node_modules/react';
import { DrawerPresentationalProps } from '../primitives/DrawerPresentational';
import { DrawerController } from '../primitives/useDrawer';
import { SxProps, Theme } from '@mui/material';
export { useDrawer, type DrawerController } from '../primitives/useDrawer';
export interface DrawerProps extends Omit<DrawerPresentationalProps, "open" | "onClose" | "ref"> {
    /** (default: true) */
    initialOpen?: boolean;
    onVisibilityChange?: (open: boolean) => void;
    PaperSx?: SxProps<Theme>;
}
export declare const Drawer: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<DrawerController>>;
