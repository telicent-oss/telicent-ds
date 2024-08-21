import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

const FloppyDiskIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none">
      <path
        d="M10.5845 0.626953H2.08713C1.30112 0.626953 0.670898 1.26426 0.670898 2.04319V11.9568C0.670898 12.7357 1.30112 13.373 2.08713 13.373H12.0008C12.7797 13.373 13.417 12.7357 13.417 11.9568V3.45942L10.5845 0.626953ZM7.04395 11.9568C5.86847 11.9568 4.9196 11.0079 4.9196 9.83247C4.9196 8.65699 5.86847 7.70812 7.04395 7.70812C8.21942 7.70812 9.16829 8.65699 9.16829 9.83247C9.16829 11.0079 8.21942 11.9568 7.04395 11.9568ZM9.16829 4.87565H2.08713V2.04319H9.16829V4.87565Z"
        fill="currentColor"
      />
    </svg>
  </MUISvgIcon>
);

export default FloppyDiskIcon;
