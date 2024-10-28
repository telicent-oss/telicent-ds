import React, { createContext, useState } from "react";

interface PanelState {
  visible: boolean;
  minimised: boolean;
}

interface PanelsType extends Record<string, PanelState> {}

type ToggleFn = (id: string) => void;
type GetFn = (id: string, state: "visible" | "minimised") => boolean;

interface FloatingPanelContextType {
  toggleVisibility: ToggleFn;
  toggleMinimized: ToggleFn;
  get: GetFn;
  panels: PanelsType;
}

export const FloatingPanelContext = createContext<
  FloatingPanelContextType | undefined
>(undefined);

interface FloatingPanelProviderProps {
  children: React.ReactNode;
}

export const FloatingPanelProvider: React.FC<FloatingPanelProviderProps> = ({
  children,
}) => {
  const [panels, setPanels] = useState<PanelsType>({});

  const toggleMinimized: ToggleFn = (id) => {
    setPanels((prevStates) => ({
      ...prevStates,
      [id]: {
        ...prevStates[id],
        minimised: !prevStates[id]?.minimised,
      },
    }));
  };

  const toggleVisibility: ToggleFn = (id) => {
    setPanels((prevStates) => {
      return {
        ...prevStates,
        [id]: {
          ...prevStates[id],
          minimised: prevStates[id]?.minimised ?? false,
          visible: !prevStates[id]?.visible,
        },
      };
    });
  };

  const get: GetFn = (id, state) => !!panels[id]?.[state];

  return (
    <FloatingPanelContext.Provider
      value={{ panels, get, toggleMinimized, toggleVisibility }}
    >
      {children}
    </FloatingPanelContext.Provider>
  );
};

export type {
  FloatingPanelContextType,
  FloatingPanelProviderProps,
  PanelsType,
  PanelState,
  ToggleFn
};
