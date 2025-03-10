import React, { HTMLAttributes, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import MUIListItem from "@mui/material/ListItem";
import MUIListItemButton from "@mui/material/ListItemButton";
import MUIListItemText from "@mui/material/ListItemText";

import IconButton from "../../inputs/Button/IconButton";
import { CloseIcon, DownArrowIcon } from "../../data-display";
import { useFloatingPanelContext } from "./useFloatingPanelContext";

interface FloatingPanelItemProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * The item label
   */
  label: string;
  /**
   * The id target reference for the toggle button.
   */
  targetId: string;
  /**
   * The icon to be displayed before the title
   */
  icon?: React.ReactNode;
  /**
   * Total number of items
   */
  count?: number;
}

const FloatingPanelItem: React.FC<FloatingPanelItemProps> = ({
  count = 0,
  label,
  icon,
  targetId,
  ...props
}) => {
  const theme = useTheme();
  const context = useFloatingPanelContext();
  const visible =
    (context.panels[targetId]?.minimised &&
      context.panels[targetId]?.visible) ||
    false;

  const backgroundColor =
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[300];

  return (
    <MUIListItem
      disablePadding
      sx={{
        backgroundColor,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        width: "fit-content",
        visibility: visible ? "visible" : "hidden",
      }}
      {...props}
    >
      <MUIListItemButton
        dense
        sx={{ color: theme.palette.primary.main }}
        onClick={() => context.toggleMinimised(targetId)}
      >
        <DownArrowIcon rotation={180} css={{ marginRight: 6 }} />
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
          {count > 0 ? (
            <span css={{ color: theme.palette.primary.main }}> ({count})</span>
          ) : null}
        </MUIListItemText>
      </MUIListItemButton>
    </MUIListItem>
  );
};

export default FloatingPanelItem;
export type { FloatingPanelItemProps };
