import { default as React, HTMLAttributes } from '../../../../../node_modules/react';

interface FloatingPanelItemProps extends HTMLAttributes<HTMLLIElement> {
    label: string;
    icon: React.ReactNode;
    count?: number;
    onRemove?: React.MouseEventHandler;
    onMaximise?: React.MouseEventHandler;
}
declare const FloatingPanelItem: React.FC<FloatingPanelItemProps>;
export default FloatingPanelItem;
export type { FloatingPanelItemProps };
