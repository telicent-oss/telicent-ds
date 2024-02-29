import React, { useEffect, useState } from "react";
import Avatar, { AvatarProps } from "@mui/material/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./user-avatar.css";

export interface TeliUserAvatarProps {
  /**
   * Provides an alt attribute for the rendered img element.
   */
  alt: AvatarProps["alt"];
  /**
   * User's first name
   */
  firstName: string;
  /**
   * User's last name
   */
  lastName: string;
  /**
   * The src attribute for the img element.
   */
  src: AvatarProps["src"];
}

const TeliUserAvatar: React.FC<Partial<TeliUserAvatarProps>> = ({
  alt,
  firstName = "",
  lastName = "",
  src,
}) => {
  const [initials, setInitials] = useState("");

  let children: React.ReactNode = (
    <FontAwesomeIcon id="user-avatar-icon" icon={faUser} size="sm" />
  );
  if (Boolean(initials)) children = <>{initials}</>;
  if (Boolean(src)) children = null;

  useEffect(() => {
    const fName = firstName.trim();
    const lName = lastName.trim();

    if (Boolean(fName) && Boolean(lName)) {
      setInitials(`${fName.charAt(0)}${lName.charAt(0)}`);
      return;
    }
  }, [firstName, lastName]);

  return (
    <Avatar id="user-avatar" src={src} alt={alt} sx={{ width: 35, height: 35 }}>
      {children}
    </Avatar>
  );
};

export default TeliUserAvatar;
