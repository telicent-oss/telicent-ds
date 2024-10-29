import { useContext } from "react";
import { FloatingPanelContext } from "./FloatingPanelProvider";

/**
 * Should be used to internal components only
 */
const useFloatingPanelContext = () => {
  const context = useContext(FloatingPanelContext);

  if (!context) {
    throw new Error(
      "FloatingPanel.ToggleButton must be used within a FloatingPanel.Provider"
    );
  }

  return context;
}

export default useFloatingPanelContext;