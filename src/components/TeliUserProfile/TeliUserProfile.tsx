import React from "react";

import { TeliUserAvatarProps } from "../TeliAvatar/TeliUserAvatar";
import TeliUserProfileButton from "./TeliUserProfileButton";
import TeliUserProfileMenu, { TeliUserProfileMenuProps } from "./TeliUserProfileMenu";
import "./user-profile.css";

export interface TeliUserProfileProps extends Partial<TeliUserAvatarProps> {
  onSettingsClick: TeliUserProfileMenuProps["onSettingsClick"];
}

/**
 * @deprecated TeliUserProfile is deprecated and will be removed in a future release.
 */
const TeliUserProfile: React.FC<Partial<TeliUserProfileProps>> = ({
  firstName,
  lastName,
  onSettingsClick,
  ...userAvatarProps
}) => {
  console.warn("TeliUserProfile is deprecated and will be removed in a future release.");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget as any);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <TeliUserProfileButton
        firstName={firstName}
        lastName={lastName}
        open={open}
        onClick={handleClick}
        {...userAvatarProps}
      />
      <TeliUserProfileMenu
        anchorEl={anchorEl}
        firstName={firstName}
        lastName={lastName}
        open={open}
        onClose={handleClose}
        onSettingsClick={onSettingsClick}
      />
    </div>
  );
};

export default TeliUserProfile;
