import { default as React, HTMLAttributes } from '../../../../../node_modules/react';

interface DraggableFloatingPanelProps extends HTMLAttributes<HTMLDivElement> {
    bounds?: "parent" | "window" | "body" | string | Element;
    count?: number;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    onMinimise?: React.MouseEventHandler;
    title: string;
}
declare const DraggableFloatingPanel: React.FC<DraggableFloatingPanelProps>;
export default DraggableFloatingPanel;
export type { DraggableFloatingPanelProps };
