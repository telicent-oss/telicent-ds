import DraggableFloatingPanel from "./DraggableFloatingPanel";
import { FloatingPanelProvider } from "./FloatingPanelProvider";
import FloatingPanelToggleButton from "./FloatingPanelToggleButton";

export const FloatingPanel = {
  DraggablePanel: DraggableFloatingPanel,
  Provider: FloatingPanelProvider,
  ToggleButton: FloatingPanelToggleButton,
};

export * from "./DraggableFloatingPanel";
export * from "./FloatingPanelProvider";
export * from "./FloatingPanelToggleButton";
export { default as useFloatingPanels } from "./useFloatingPanels";
