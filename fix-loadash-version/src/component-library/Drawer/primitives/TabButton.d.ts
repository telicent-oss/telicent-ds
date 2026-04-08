import { default as React } from '../../../../node_modules/react';
import { BoxProps, IconButtonProps, SxProps, Theme } from '@mui/material';
export type TabButtonProps = {
    id: string;
    BoxSx: BoxProps["sx"];
    onClick: IconButtonProps["onClick"];
    children: React.ReactNode;
    PaperSx?: SxProps<Theme>;
};
export declare const TabButton: React.FC<TabButtonProps>;
