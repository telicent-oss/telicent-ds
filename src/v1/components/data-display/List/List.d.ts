import { default as React } from '../../../../../node_modules/react';
import { ListProps as MUIListProps } from '@mui/material/List';
import { ListItemProps as MUIListItemProps } from '@mui/material/ListItem';
import { ListItemButtonProps as MUIListItemButtonProps } from '@mui/material/ListItemButton';
import { ListItemIconProps as MUIListItemIconProps } from '@mui/material/ListItemIcon';
import { ListItemTextProps as MUIListItemTextProps } from '@mui/material/ListItemText';

export declare const List: React.FC<MUIListProps>;
export declare const ListItem: React.FC<MUIListItemProps>;
export declare const ListItemButton: React.FC<MUIListItemButtonProps>;
export declare const ListItemIcon: React.FC<MUIListItemIconProps>;
interface ListItemTextProps extends Omit<MUIListItemTextProps, "primaryTypographyProps" | "secondaryTypographyProps" | "sx"> {
}
export declare const ListItemText: React.FC<ListItemTextProps>;
export {};
