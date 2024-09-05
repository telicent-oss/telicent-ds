import React, { FC } from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

type DownloadIconProps = Omit<FontAwesomeIconProps, "icon">;

const Download: FC<DownloadIconProps> = (iconProps) => (
  <FontAwesomeIcon icon={faDownload} {...iconProps} />
);

export default Download;
