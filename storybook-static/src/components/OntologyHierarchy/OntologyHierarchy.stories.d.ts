import { default as React } from '../../../node_modules/react';
import { StoryObj } from '@storybook/react';

/**
This is a simple hierarchy menu which features in the telicent-ontology-app.

There are 2 required props:

 - **instanceId**: must be unique within the parent app
 - **data**: complete hierarchical dataset

 Optional props are:
  - **descendantCount**: defaults to false, pass in true and it won't be shown
 - **isDraggable + dragEvent**: if isDraggable, dragEvent will trigger on drag
 - **isClickable + clickEvent**: if isClickable, clickEvent will trigger on click
 - **baseKey**: if you pass in an id which is included in the dataset, the component will reset the data and use this as the base
 - **filterIds**: an array of ids.  Data will be filtered to show only these ids (if valid) and their ancestors, ids will be highlighted
 - **expandAll**: defaults to false, pass in true and the hierarchy will be fully expanded - only advised with small datasets or in conjunction with baseKey or filterIds
 - **expandElement**: custom expand for IES ontology data - will only expand if Element is at depth 0 or 1


 **NB**: baseKey + filterIds cannot be used together - baseKey takes priority, filterIds will be ignored if both provided
 **NB**: expandAll + expandElement cannot be used together - expandAll takes priority, expandElement will be ignored if both provided

 */
declare const meta: {
    component: React.FC<import('./OntologyHierarchy').OntologyHierarchyProps>;
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        instanceId: string;
        data: import('./OntologyHierarchy').OntologyInputHierarchy;
        descendantCount?: boolean | undefined;
        isDraggable?: boolean | undefined;
        dragEvent?: ((event: React.DragEvent<HTMLElement>, nodeType: string) => void) | undefined;
        isClickable?: boolean | undefined;
        clickEvent?: ((nodeId: string) => void) | undefined;
        baseKey?: string | undefined;
        filterIds?: string[] | undefined;
        expandAll?: boolean | undefined;
        expandElement?: boolean | undefined;
    }>) => import("@emotion/react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BasicStory: Story;
export declare const Draggable: Story;
export declare const ExpandElement: Story;
export declare const BaseKeyAndExpandAll: Story;
export declare const NoDescendantCount: Story;
export declare const FilterIdsAndClickableAndExpandAll: Story;
