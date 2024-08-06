import React from "react";
import MUIList, { ListProps as MUIListProps } from "@mui/material/List";
import MUIListItem, {
  ListItemProps as MUIListItemProps,
} from "@mui/material/ListItem";
import MUIListItemButton, {
  ListItemButtonProps as MUIListItemButtonProps,
} from "@mui/material/ListItemButton";
import MUIListItemIcon, {
  ListItemIconProps as MUIListItemIconProps,
} from "@mui/material/ListItemIcon";

export const List: React.FC<MUIListProps> = (listProps) => (
  <MUIList {...listProps} />
);

export const ListItem: React.FC<MUIListItemProps> = (listItemProps) => (
  <MUIListItem {...listItemProps} />
);

export const ListItemButton: React.FC<MUIListItemButtonProps> = (
  listItemButtonProps
) => <MUIListItemButton {...listItemButtonProps} />;

export const ListItemIcon: React.FC<MUIListItemIconProps> = (
  listItemIconProps
) => <MUIListItemIcon {...listItemIconProps} />;
