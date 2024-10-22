import React from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

type ClockIconProps = Omit<FontAwesomeIconProps, "icon">;

const ClockIcon: React.FC<ClockIconProps> = (iconProps) => (
  <FontAwesomeIcon icon={faClock} {...iconProps} />
);

export default ClockIcon;
