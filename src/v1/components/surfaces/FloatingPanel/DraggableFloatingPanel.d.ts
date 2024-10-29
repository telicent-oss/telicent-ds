import { default as React, HTMLAttributes } from '../../../../../node_modules/react';

interface DraggableFloatingPanelProps extends HTMLAttributes<HTMLDivElement> {
    targetId: string;
    title: string;
    bounds?: "parent" | "window" | "body" | string | Element;
    count?: number;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    visible?: boolean;
    defaultPosition?: {
        x: number;
        y: number;
    };
}
declare const DraggableFloatingPanel: React.FC<DraggableFloatingPanelProps>;
export default DraggableFloatingPanel;
export type { DraggableFloatingPanelProps };
