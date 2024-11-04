import DraggableFloatingPanel from "./DraggableFloatingPanel";
import FloatingPanelDock from "./FloatingPanelDock";
import FloatingPanelDockItem from "./FloatingPanelDockItem";
import { FloatingPanelProvider } from "./FloatingPanelProvider";
import FloatingPanelToggleButton from "./FloatingPanelToggleButton";

export const FloatingPanel = {
  Dock: FloatingPanelDock,
  DockItem: FloatingPanelDockItem,
  DraggablePanel: DraggableFloatingPanel,
  Provider: FloatingPanelProvider,
  ToggleButton: FloatingPanelToggleButton,
};

export * from "./DraggableFloatingPanel";
export * from "./FloatingPanelDock";
export * from "./FloatingPanelDockItem";
export * from "./FloatingPanelProvider";
export * from "./FloatingPanelToggleButton";
