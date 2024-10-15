import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

const ClockRotateLeft: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon fontSize="inherit" {...iconProps}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="29"
      viewBox="0 0 27 29"
      fill="none"
    >
      {/* <mask
        id="mask0_2361_2473"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="27"
        height="29"
      >
        <path
          d="M8.50139 13.6688L0 7.66787L4.41738 1.33355L12.502 0L21.0033 3.16716L26.3375 9.58485L24.5872 22.8369L14.3356 28.6712L3.83396 24.4205L8.83475 19.3364L16.7527 21.3367L18.6696 13.1687L14.5857 8.75138L8.50139 13.6688Z"
          fill="#D9D9D9"
        />
      </mask> */}
      <g mask="url(#mask0_2361_2473)">
        <circle
          cx="12.8882"
          cy="14.9673"
          r="9.80535"
          stroke="currentColor"
          stroke-width="1.8396"
        />
      </g>
      <path
        d="M12.6514 10.583L12.6514 15.6712"
        stroke="currentColor"
        stroke-width="1.51823"
        stroke-linecap="round"
      />
      <path
        d="M16.1045 18.2617L12.651 15.6716"
        stroke="currentColor"
        stroke-width="1.51823"
        stroke-linecap="round"
      />
      <path
        d="M2.79179 11.8954L3.04676 6.82835L8.04528 11.4128L2.79179 11.8954Z"
        fill="currentColor"
      />
    </svg>
  </MUISvgIcon>
);

export default ClockRotateLeft;
