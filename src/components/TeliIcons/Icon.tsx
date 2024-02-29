import React from "react";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type TeliIconProps = React.HTMLAttributes<SVGElement> & {
  /**
   * Can be used to control the size of the icon
   */
  size: SizeProp;
};

interface IconProps extends Partial<TeliIconProps> {
  faIcon: IconProp;
}

const Icon: React.FC<IconProps> = ({ faIcon, id, size, ...otherIconProps }) => {
  return (
    <FontAwesomeIcon
      aria-label={otherIconProps["aria-label"]}
      id={id}
      icon={faIcon}
      size={size}
    />
  );
};

export default Icon;
