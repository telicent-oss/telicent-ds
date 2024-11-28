import { default as React, HTMLAttributes } from '../../../../../node_modules/react';

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The id target reference for the toggle button.
     */
    targetId: string;
    /**
     * 	Panel title.
     */
    title: string;
    /**
     * Total number of items
     */
    count?: number;
    /**
     * Component content
     */
    children?: React.ReactNode;
    /**
     *
     */
    dragHandle?: React.ReactNode;
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
    /**
    * Is the panel visible
    */
    visible?: boolean;
}
declare const Panel: React.FC<PanelProps>;
export default Panel;
export type { PanelProps };
