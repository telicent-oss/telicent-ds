import { default as React, HTMLAttributes } from '../../../../../node_modules/react';

interface FloatingPanelItemProps extends HTMLAttributes<HTMLLIElement> {
    /**
     * The item label
     */
    label: string;
    /**
     * The id target reference for the toggle button.
     */
    targetId: string;
    /**
     * The icon to be displayed before the title
     */
    icon?: React.ReactNode;
    /**
     * Total number of items
     */
    count?: number;
    /**
     * If false, the component will be hidden
     */
    visible?: boolean;
}
declare const FloatingPanelItem: React.FC<FloatingPanelItemProps>;
export default FloatingPanelItem;
export type { FloatingPanelItemProps };
