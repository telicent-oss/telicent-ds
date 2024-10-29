import { default as React, HTMLAttributes } from '../../../../../node_modules/react';

interface FloatingPanelItemProps extends HTMLAttributes<HTMLLIElement> {
    label: string;
    targetId: string;
    icon?: React.ReactNode;
    count?: number;
    visible?: boolean;
}
declare const FloatingPanelItem: React.FC<FloatingPanelItemProps>;
export default FloatingPanelItem;
export type { FloatingPanelItemProps };
