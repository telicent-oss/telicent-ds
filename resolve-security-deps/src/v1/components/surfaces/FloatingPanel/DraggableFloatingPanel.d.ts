import { default as React, HTMLAttributes } from '../../../../../node_modules/react';

interface DraggableFloatingPanelProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The id target reference for the toggle button.
     */
    targetId: string;
    /**
     * 	Panel title.
     */
    title: string;
    /**
     * Specifies movement boundaries. Accepted values:
     *
     * parent restricts movement
     * within the node's offsetParent (nearest node with position relative or
     * absolute), window, body, Selector like .fooClassName or Element.
     */
    bounds?: "parent" | "window" | "body" | string | Element;
    /**
     * Total number of items
     */
    count?: number;
    /**
     * Component content
     */
    children?: React.ReactNode;
    /**
     * Specifies a selector to be used as the handle that initiates drag. Example:
     * drag-handle.
     */
    dragHandleClassName?: string;
    /**
     * The icon to be displayed before the title
     */
    icon?: React.ReactNode;
    /**
     * The x and y property is used to set the default position of the component.
     */
    defaultPosition?: {
        x: number;
        y: number;
    };
}
declare const DraggableFloatingPanel: React.FC<DraggableFloatingPanelProps>;
export default DraggableFloatingPanel;
export type { DraggableFloatingPanelProps };
