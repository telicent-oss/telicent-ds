// src/features/mapCanvas/MapCanvasContext.tsx
// TODO rename AppWideMapCanvasProvider
import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
  ReactNode,
} from "react";
import { z } from "zod";

import { StyleOption } from "../../utils/schema";
import { LayerOption } from "../LayerSelector/primitives/LayerSelectorPresentational";


export const MapBoxSourceSchema = z.object({
  label: z.string(),
  uri: z.string(),
  image: z.string(),
});
type MapBoxSource = z.infer<typeof MapBoxSourceSchema>;

interface MapStyleConfig {
  vectorStyles?: StyleOption | StyleOption[];
  tileSets?: StyleOption[];
}
type MapCanvasConfig = {
  tileSets: StyleOption[];
  vectorStyles?: StyleOption | StyleOption[];
};

interface StyleSelectorState {
  selected: MapBoxSource | null;
  mapConfig: MapCanvasConfig;
  props: {
    onChange: (v: LayerOption) => void;
    data: StyleOption[];
  };
}

export interface MapCanvasState {
  styleSelector: StyleSelectorState;
  // add more global state here (zoom, center, overlays…)
}

const MapCanvasContext = createContext<MapCanvasState | undefined>(undefined);

/**
 * For state that is shared throughout the app
 */
export const MapCanvasProvider: React.FC<{
  initialMapStyleConfig: MapStyleConfig;
  children: ReactNode;
}> = ({ initialMapStyleConfig, children }) => {
  const [selected, setSelected] = useState<MapBoxSource | null>(null);
  const [mapConfig] = useState<MapCanvasConfig>(() => ({
    tileSets: [],
    ...initialMapStyleConfig,
  }));
  const onChange = useCallback((v: LayerOption) => setSelected(v), []);
  const data = useMemo(() => {
    const vectorStylesArr = Array.isArray(mapConfig.vectorStyles)
      ? mapConfig.vectorStyles
      : mapConfig.vectorStyles
      ? [mapConfig.vectorStyles]
      : [];
    return [...vectorStylesArr, ...mapConfig.tileSets];
  }, [mapConfig.vectorStyles, mapConfig.tileSets]);

  return (
    <MapCanvasContext.Provider
      value={{
        styleSelector: { selected, mapConfig, props: { onChange, data } },
      }}
    >
      {children}
    </MapCanvasContext.Provider>
  );
};

export const useMapCanvasContext = (): MapCanvasState => {
  const ctx = useContext(MapCanvasContext);
  if (!ctx) throw new Error("useMapCanvas must be used within MapCanvasProvider");
  return ctx;
};
