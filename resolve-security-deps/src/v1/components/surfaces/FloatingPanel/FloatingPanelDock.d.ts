import { default as React, HTMLAttributes, PropsWithChildren } from '../../../../../node_modules/react';

interface FloatingPanelDockProps extends PropsWithChildren<HTMLAttributes<HTMLUListElement>> {
}
/**
 * Appears at the bottom of the screen. Holds `FloatingPanelItem` items
 */
declare const FloatingPanelDock: React.FC<FloatingPanelDockProps>;
export default FloatingPanelDock;
export type { FloatingPanelDockProps };
