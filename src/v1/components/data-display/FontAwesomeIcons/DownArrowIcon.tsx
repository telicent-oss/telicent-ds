import React from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type DownArrowIconProps = Omit<FontAwesomeIconProps, "icon">;

const DownArrow: React.FC<DownArrowIconProps> = (iconProps) => (
  <FontAwesomeIcon icon={faAngleDown} {...iconProps} />
);

export default DownArrow;
