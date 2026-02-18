import React from "react";
import MUISvgIcon, { SvgIconProps as MUISvgIconProps } from "@mui/material/SvgIcon";

const GridIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps} viewBox="0 0 44 44">
    <path d="M25.6673 7.33337H18.334V14.6667H25.6673V7.33337Z" fill="currentColor" />
    <path d="M14.6673 18.3334H7.33398V25.6667H14.6673V18.3334Z" fill="currentColor" />
    <path d="M25.6673 18.3334H18.334V25.6667H25.6673V18.3334Z" fill="currentColor" />
    <path d="M36.6673 18.3334H29.334V25.6667H36.6673V18.3334Z" fill="currentColor" />
    <path d="M18.334 29.3334H25.6673V36.6667H18.334V29.3334Z" fill="currentColor" />
    <path
      d="M7.33398 9.16671C7.33398 8.15419 8.1548 7.33337 9.16732 7.33337H14.6673V14.6667H7.33398V9.16671Z"
      fill="currentColor"
    />
    <path
      d="M14.6673 29.3334H7.33398V34.8334C7.33398 35.8459 8.1548 36.6667 9.16732 36.6667H14.6673V29.3334Z"
      fill="currentColor"
    />
    <path
      d="M29.334 29.3334H36.6673V34.8334C36.6673 35.8459 35.8465 36.6667 34.834 36.6667H29.334V29.3334Z"
      fill="currentColor"
    />
    <path
      d="M34.834 7.33337H29.334V14.6667H36.6673V9.16671C36.6673 8.15419 35.8465 7.33337 34.834 7.33337Z"
      fill="currentColor"
    />
  </MUISvgIcon>
);

export default GridIcon;
