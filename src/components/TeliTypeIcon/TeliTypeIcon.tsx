import React from "react";
import { Avatar } from "@mui/material";

import {
  getDisabledStyles,
  getSizeProps,
  TeliTypeIconSizeProp,
} from "./type-icon-utils";
import { useOntologyStyles } from "../../contexts/OntologyStyles";

export type TeliTypeIconProps = Partial<{
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
  /**
   * Ontology type (class) uri or short uri
   */
  type: string;
}>;

/**
 * This component can be used to display type/class iconography defined in the
 * ontology. If the styles cannot be found, the initials will be rendered as a
 * fallback as demonstrated in the stories.
 */
const TeliTypeIcon: React.FC<TeliTypeIconProps> = ({
  type = "",
  borderColor,
  disabled = false,
  size = "base",
}) => {
  const { findIcon } = useOntologyStyles();

  const iconProps = findIcon(type);
  const hasIcon = Boolean(iconProps?.faIcon);

  return (
    <Avatar
      alt={iconProps.alt}
      aria-label={iconProps.alt}
      sx={{
        borderWidth: 2,
        bordericonProps: "solid",
        borderColor: borderColor ?? iconProps.color,
        color: iconProps.color,
        backgroundColor: iconProps.backgroundColor,
        ...getDisabledStyles(disabled),
        ...getSizeProps(size),
      }}
    >
      {hasIcon ? (
        <i className={iconProps.faIcon} title={`${iconProps.alt}-icon`} />
      ) : (
        <p>{iconProps.iconFallbackText}</p>
      )}
    </Avatar>
  );
};

export default TeliTypeIcon;
