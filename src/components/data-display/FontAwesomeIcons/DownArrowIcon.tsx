import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { useTheme } from "@mui/material/styles";
import React from "react";

type DownArrowIconProps = Omit<FontAwesomeIconProps, "icon"> & {
  color?: "primary" | "inherit";
};

const DownArrow: React.FC<DownArrowIconProps> = ({ color, ...iconProps }) => {
  const theme = useTheme();

  return (
    <FontAwesomeIcon
      icon={faAngleDown}
      size="sm"
      css={{
        color: color === "primary" ? theme.palette.primary.main : "inherit",
      }}
      {...iconProps}
    />
  );
};

export default DownArrow;
