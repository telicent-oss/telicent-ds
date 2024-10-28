import { default as React } from '../../../../../node_modules/react';

interface PanelState {
    visible: boolean;
    minimised: boolean;
}
interface PanelsType extends Record<string, PanelState> {
}
type ToggleFn = (id: string) => void;
type GetFn = (id: string, state: "visible" | "minimised") => boolean;
interface FloatingPanelContextType {
    toggleVisibility: ToggleFn;
    toggleMinimized: ToggleFn;
    get: GetFn;
    panels: PanelsType;
}
export declare const FloatingPanelContext: React.Context<FloatingPanelContextType | undefined>;
interface FloatingPanelProviderProps {
    children: React.ReactNode;
}
export declare const FloatingPanelProvider: React.FC<FloatingPanelProviderProps>;
export type { FloatingPanelContextType, FloatingPanelProviderProps, PanelsType, PanelState, ToggleFn };
