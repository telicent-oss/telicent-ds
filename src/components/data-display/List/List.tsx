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
import MUIListItemText, {
  ListItemTextProps as MUIListItemTextProps,
} from "@mui/material/ListItemText";
import React from "react";

export const List: React.FC<MUIListProps> = (listProps) => (
  <MUIList {...listProps} />
);

export const ListItem: React.FC<MUIListItemProps> = (listItemProps) => (
  <MUIListItem {...listItemProps} />
);

// Re-exported as-is so MUI's OverridableComponent typing survives — this is
// what lets `<ListItemButton component="a" href={...}>` narrow onClick to
// anchor events. Wrapping it in React.FC would strip the generic.
export const ListItemButton = MUIListItemButton;

export const ListItemIcon: React.FC<MUIListItemIconProps> = (
  listItemIconProps
) => <MUIListItemIcon {...listItemIconProps} />;

interface ListItemTextProps
  extends Omit<
    MUIListItemTextProps,
    "primaryTypographyProps" | "secondaryTypographyProps" | "sx"
  > {}
export const ListItemText: React.FC<ListItemTextProps> = (props) => (
  <MUIListItemText {...props} />
);
