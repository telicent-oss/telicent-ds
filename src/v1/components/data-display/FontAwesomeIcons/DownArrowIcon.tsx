import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles";

type DownArrowIconProps = Omit<FontAwesomeIconProps, "icon"> & {
  color?: "primary" | "inherit";
};

const DownArrow: React.FC<DownArrowIconProps> = ({ color, ...iconProps }) => {
  const theme = useTheme();

  return (
    <FontAwesomeIcon
      icon={faAngleDown}
      css={{
        color: color === "primary" ? theme.palette.primary.main : "inherit",
      }}
      {...iconProps}
    />
  );
};

export default DownArrow;
