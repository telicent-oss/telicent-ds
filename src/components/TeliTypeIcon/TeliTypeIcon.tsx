import React from "react";
import { Avatar } from "@mui/material";

import {
  getDisabledStyles,
  getSizeProps,
  TeliTypeIconSizeProp,
} from "./type-icon-utils";
import {
  FlattenedStyleType,
  FlattenedStyleTypeForFindIcon,
} from "@telicent-oss/ontologyservice";

export type TeliTypeIconProps = {
  icon: FlattenedStyleTypeForFindIcon | FlattenedStyleType;
} & Partial<{
  /**
   * Can be used to override the border color defined in the ontology
   */
  borderColor: string;
  /**
   * If true, the component will be rendered in a disabled state
   */
  disabled: boolean;
  /**
   * Used to control the size of the component
   */
  size: TeliTypeIconSizeProp;
}>;

/**
 * This component can be used to display type/class iconography defined in the
 * ontology. If the styles cannot be found, the initials will be rendered as a
 * fallback as demonstrated in the stories.
 */
const TeliTypeIcon: React.FC<TeliTypeIconProps> = ({
  icon,
  borderColor,
  disabled = false,
  size = "base",
}) => {
  const hasIcon = "faIcon" in icon && Boolean(icon.faIcon);

  return (
    <Avatar
      alt={icon.alt}
      aria-label={icon.alt}
      sx={{
        borderWidth: 2,
        bordericon: "solid",
        borderColor: borderColor ?? icon.color,
        color: icon.color,
        backgroundColor: icon.backgroundColor,
        ...getDisabledStyles(disabled),
        ...getSizeProps(size),
      }}
    >
      {hasIcon ? (
        <i className={icon.faIcon} title={`${icon.alt}-icon`} />
      ) : (
        <p>{icon.iconFallbackText}</p>
      )}
    </Avatar>
  );
};

export default TeliTypeIcon;
