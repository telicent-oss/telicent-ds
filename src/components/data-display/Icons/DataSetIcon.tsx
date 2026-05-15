import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

/*
 * Needs to be scaled for a 24 x 24 grid
 */

const DataSetIcon: React.FC<SvgIconProps> = (iconProps) => (
  <SvgIcon {...iconProps}>
    <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="dataset icon">
        <rect
          id="Rectangle 2"
          x="1.0332"
          y="1.90381"
          width="16.9326"
          height="22.0233"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          id="Rectangle 3"
          x="3.82031"
          y="20.3071"
          width="11.3596"
          height="0.923972"
          fill="currentColor"
        />
        <rect
          id="Rectangle 4"
          x="3.82031"
          y="18.4595"
          width="11.3596"
          height="0.923972"
          fill="currentColor"
        />
        <rect
          id="Rectangle 5"
          x="3.82031"
          y="16.6113"
          width="11.3596"
          height="0.923972"
          fill="currentColor"
        />
        <rect
          id="Rectangle 6"
          x="3.82031"
          y="14.7632"
          width="11.3596"
          height="0.923972"
          fill="currentColor"
        />
        <rect
          id="Rectangle 14"
          x="3.82031"
          y="12.9155"
          width="4.73315"
          height="0.923972"
          fill="currentColor"
        />
      </g>
    </svg>
  </SvgIcon>
);

export default DataSetIcon;
