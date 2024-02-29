import React from "react";
import TeliButton from "../TeliButton/TeliButton";
import TeliUserAvatar, {
  TeliUserAvatarProps,
} from "../TeliAvatar/TeliUserAvatar";

interface TeliUserProfileButtonProps extends Partial<TeliUserAvatarProps> {
  /**
   * Is the menu component opened?
   */
  open: boolean;
  /**
   * Callback function fired when the button is clicked
   * @returns void
   */
  onClick: (event: React.SyntheticEvent) => void;
}

const TeliUserProfileButton: React.FC<TeliUserProfileButtonProps> = ({
  open,
  onClick,
  ...userAvatarProps
}) => (
  <TeliButton
    id="user-profile-button"
    aria-controls={open ? "user-profile-menu" : undefined}
    aria-haspopup="true"
    aria-expanded={open ? "true" : undefined}
    aria-label="user-profile"
    onClick={onClick}
  >
    <TeliUserAvatar {...userAvatarProps} />
  </TeliButton>
);

export default TeliUserProfileButton;
