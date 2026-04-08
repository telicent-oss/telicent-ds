import { default as React, ReactNode } from '../../../node_modules/react';
import { TypeIconSizeProp } from './type-icon-utils';
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
declare const TypeIcon: React.FC<TypeIconProps>;
export default TypeIcon;
