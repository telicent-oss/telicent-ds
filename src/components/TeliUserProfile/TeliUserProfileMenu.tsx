import React from "react";
import { Divider, MenuProps } from "@mui/material";

import { TeliMenu, TeliMenuItem } from "../TeliMenu/TeliMenu";

export interface TeliUserProfileMenuProps {
  anchorEl: MenuProps["anchorEl"];
  firstName?: string;
  lastName?: string;
  open: boolean;
  onClose: () => void;
  /**
   * Callback fired when the settings menu item is clicked
   * @param event
   * @returns
   */
  onSettingsClick?: (event: React.SyntheticEvent) => void;
}

const TeliUserProfileMenu: React.FC<TeliUserProfileMenuProps> = ({
  anchorEl,
  firstName,
  lastName,
  open,
  onClose,
  onSettingsClick,
}) => {
  const hasName = Boolean(firstName?.trim()) && Boolean(lastName?.trim());

  const handleSettingsClick = (event: React.SyntheticEvent) => {
    onClose();
    if (onSettingsClick) onSettingsClick(event);
  };

  return (
    <TeliMenu
      id="user-profile-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "user-avatar-button",
      }}
    >
      {hasName && (
        <li role="menuitem">
          <p className="pb-2">
            {firstName} {lastName}
          </p>
          <Divider />
        </li>
      )}
      <TeliMenuItem onClick={handleSettingsClick}>Settings</TeliMenuItem>
    </TeliMenu>
  );
};

export default TeliUserProfileMenu;
