import { useFloatingPanelContext } from "./useFloatingPanelContext";

const useFloatingPanels = () => {
  const context = useFloatingPanelContext();

  const getPanels = () => {
    return Object.keys(context.panels);
  };

  return { panels: getPanels() };
};

export default useFloatingPanels;
