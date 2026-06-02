import React, { FC } from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles";

type DownloadIconProps = Omit<FontAwesomeIconProps, "icon"> & {
  color?: "primary" | "inherit";
};

const Download: FC<DownloadIconProps> = ({ color, ...iconProps }) => {
  const theme = useTheme();

  return (
    <FontAwesomeIcon
      icon={faDownload}
      css={{
        color: color === "primary" ? theme.palette.primary.main : "inherit",
      }}
      {...iconProps}
    />
  );
};

export default Download;
