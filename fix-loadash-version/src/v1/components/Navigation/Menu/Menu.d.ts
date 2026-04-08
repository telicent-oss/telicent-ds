import { default as MUIMenu } from '@mui/material/Menu';
import { SxProps } from '@mui/material';
import { Theme } from '@emotion/react';
import * as React from "react";
export type MenuOption = {
    id: string;
    label: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    href?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    dividerAbove?: boolean;
    selected?: boolean;
};
type MenuProps = {
    "aria-label"?: string;
    button: (props: {
        onClick: (e: React.MouseEvent<HTMLElement>) => void;
        "aria-controls": string | undefined;
        "aria-haspopup": true;
        "aria-expanded": boolean | undefined;
    }) => React.ReactNode;
    options: MenuOption[];
    onSelect?: (option: MenuOption) => void;
    onOpenChange?: (open: boolean) => void;
    menuId?: string;
    anchorOrigin?: React.ComponentProps<typeof MUIMenu>["anchorOrigin"];
    transformOrigin?: React.ComponentProps<typeof MUIMenu>["transformOrigin"];
    autoFocusSelected?: boolean;
    sx?: SxProps<Theme>;
};
export declare const Menu: React.FC<MenuProps>;
export {};
