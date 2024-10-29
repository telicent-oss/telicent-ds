import { useContext } from "react";
import { FloatingPanelContext } from "./FloatingPanelProvider";


const useFloatingPanels = () => {
  const context = useContext(FloatingPanelContext);

  if (!context) {
    throw new Error(
      "FloatingPanel.ToggleButton must be used within a FloatingPanel.Provider"
    );
  }

  return { panels: context.panels }
}

export default useFloatingPanels;