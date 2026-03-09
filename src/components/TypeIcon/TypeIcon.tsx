import React, { ReactNode } from "react";
import { Avatar } from "@mui/material";

// Note: You might want to rename TeliTypeIconSizeProp to TypeIconSizeProp in your utils eventually!
import {
  getDisabledStyles,
  getSizeProps,
  TypeIconSizeProp,
} from "./type-icon-utils";

export interface TypeIconProps {
  /** Text for screen readers and tooltips */
  alt: string;
  /** Initials or text to show if no icon node is provided */
  fallbackText?: string;
  /** Primary color for the icon/text */
  color?: string;
  /** Background color for the avatar */
  backgroundColor?: string;
  /** Overrides the default border color */
  borderColor?: string;
  /** Accepts ANY valid React element (SVG, Material Icon, FontAwesome wrapper, etc.) */
  iconNode?: ReactNode;
  /** If true, the component will be rendered in a disabled state */
  disabled?: boolean;
  /** Controls the size of the component */
  size?: TypeIconSizeProp;
}

const TypeIcon: React.FC<TypeIconProps> = ({
  alt,
  fallbackText = "",
  color,
  backgroundColor,
  borderColor,
  iconNode,
  disabled = false,
  size = "base",
}) => {
  return (
    <Avatar
      alt={alt}
      aria-label={alt}
      sx={{
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: borderColor ?? color,
        color: color,
        backgroundColor: backgroundColor,
        ...getDisabledStyles(disabled),
        ...getSizeProps(size),
      }}
    >
      {/* It just renders whatever you give it, or falls back to text */}
      {iconNode ? iconNode : <p>{fallbackText}</p>}
    </Avatar>
  );
};

export default TypeIcon;
