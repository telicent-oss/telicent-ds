import { default as React } from '../../../../../node_modules/react';
import { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';
export type AppBarProps = Partial<{
    appName: string;
    beta: boolean;
    startChild: React.ReactNode;
    endChild: React.ReactNode;
    position: MUIAppBarProps["position"];
    version: string;
    href: string;
    target: React.HTMLAttributeAnchorTarget;
    isElevated: boolean;
    disableBrand: boolean;
}>;
declare const AppBar: React.FC<AppBarProps>;
export default AppBar;
