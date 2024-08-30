import { default as React } from 'react';
import { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';

export type AppBarProps = Partial<{
    appName: string;
    beta: boolean;
    userProfile: React.ReactNode;
    position: MUIAppBarProps["position"];
}>;
declare const AppBar: React.FC<AppBarProps>;
export default AppBar;
