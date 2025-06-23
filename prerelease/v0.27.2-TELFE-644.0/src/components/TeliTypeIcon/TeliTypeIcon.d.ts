import { default as React } from '../../../node_modules/react';
import { TeliTypeIconSizeProp } from './type-icon-utils';
import { FlattenedStyleType, FlattenedStyleTypeForFindIcon } from '@telicent-oss/ontologyservice';

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
declare const TeliTypeIcon: React.FC<TeliTypeIconProps>;
export default TeliTypeIcon;
