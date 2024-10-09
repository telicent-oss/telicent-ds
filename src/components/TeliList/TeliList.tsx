import React, { type FC } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  ListItemProps,
  ListItemText,
  ListProps,
} from "@mui/material";
import classNames from "classnames";

export type TeliListProps = React.HTMLAttributes<HTMLUListElement> &
  Partial<{
    dense: ListProps["dense"];
    disablePadding: ListProps["disablePadding"];
    subheader: ListProps["subheader"];
  }>;

const TeliList: FC<TeliListProps> = ({
  dense,
  disablePadding,
  subheader,
  children,
  ...ulProps
}) => (
  <List
    dense={dense}
    disablePadding={disablePadding}
    subheader={subheader}
    {...ulProps}
  >
    {children}
  </List>
);

type TeliListItemButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  Partial<{
    alignItems: ListItemButtonProps["alignItems"];
    autoFocus: ListItemButtonProps["autoFocus"];
    dense: ListItemButtonProps["dense"];
    disabled: ListItemButtonProps["disabled"];
    disableGutters: ListItemButtonProps["disableGutters"];
    divider: ListItemButtonProps["divider"];
    selected: ListItemButtonProps["selected"];
  }>;
const TeliListItemButton: FC<TeliListItemButtonProps> = ({
  className,
  children,
  ...props
}) => (
  <ListItemButton
    component="button"
    disableRipple
    className={classNames("flex gap-x-3", className)}
    {...props}
  >
    {children}
  </ListItemButton>
);

type TeliListItemProps = React.HTMLAttributes<HTMLLIElement> &
  Partial<{
    alignItems: ListItemProps["alignItems"];
    children: ListItemProps["children"];
    dense: ListItemProps["dense"];
    disableGutters: ListItemProps["disableGutters"];
    disablePadding: ListItemProps["disablePadding"];
    divider: ListItemProps["divider"];
    secondaryAction: ListItemProps["secondaryAction"];
  }>;
const TeliListItem: FC<TeliListItemProps> = ({ children, ...props }) => (
  <ListItem {...props}>{children}</ListItem>
);

export { TeliList, TeliListItemButton, TeliListItem };
