import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { useTheme } from "@mui/material/styles";
import React from "react";

type ClockIconProps = Omit<FontAwesomeIconProps, "icon"> & {
  color?: "primary" | "inherit";
};

const ClockIcon: React.FC<ClockIconProps> = ({ color, ...iconProps }) => {
  const theme = useTheme();

  return (
    <FontAwesomeIcon
      icon={faClock}
      css={{
        color: color === "primary" ? theme.palette.primary.main : "inherit",
      }}
      {...iconProps}
    />
  );
};

export default ClockIcon;
