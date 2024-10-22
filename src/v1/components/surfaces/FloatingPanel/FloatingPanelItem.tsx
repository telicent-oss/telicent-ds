import React, { HTMLAttributes } from "react";
import useTheme from "@mui/material/styles/useTheme";
import MUIListItem from "@mui/material/ListItem/ListItem";
import MUIListItemButton from "@mui/material/ListItemButton/ListItemButton";
import MUIListItemText from "@mui/material/ListItemText/ListItemText";

import IconButton from "../../inputs/Button/IconButton";
import { CloseIcon, DownArrowIcon } from "../../data-display";

interface FloatingPanelItemProps extends HTMLAttributes<HTMLLIElement> {
  label: string;
  icon: React.ReactNode;
  count?: number;
  onRemove?: React.MouseEventHandler;
  onMaximise?: React.MouseEventHandler;
}

const FloatingPanelItem: React.FC<FloatingPanelItemProps> = ({
  count,
  label,
  icon,
  onRemove,
  onMaximise,
  ...props
}) => {
  const theme = useTheme();

  const backgroundColor =
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[300];

  return (
    <MUIListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="close"
          size="small"
          sx={{ fontSize: 14 }}
          onClick={onRemove}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
      disablePadding
      sx={{
        backgroundColor,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        width: "fit-content"
      }}
      {...props}
    >
      <MUIListItemButton
        dense
        sx={{ color: theme.palette.primary.main }}
        onClick={onMaximise}
      >
        <DownArrowIcon
          rotation={180}
          css={{ marginRight: 6 }}
        />
        {icon}
        <MUIListItemText
          sx={{
            marginLeft: 1,
            whiteSpace: "nowrap",
            color:
              theme.palette.mode === "dark"
                ? theme.palette.common.white
                : theme.palette.common.black,
          }}
        >
          {label}
          {count ? (
            <span css={{ color: theme.palette.primary.main }}> ({count})</span>
          ) : null}
        </MUIListItemText>
      </MUIListItemButton>
    </MUIListItem>
  );
};

export default FloatingPanelItem;
export type { FloatingPanelItemProps };
