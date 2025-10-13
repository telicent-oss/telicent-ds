import { Coordinate } from "ol/coordinate";
import BaseLayer from "ol/layer/Base";
import { OverlayFeatureConfig } from "./overlays";
import { LayerConfig } from "./layers";
import { MarkerFeature } from "./markers";
import { Map } from "ol";

export type LegacyTileSet = {
  label: string;
  uri: string;
  image: string;
  attribution: string;
};

export type LegacyVectorStyle = {
  label: string;
  uri: string;
  image: string;
};

export type LegacyMapConfig =
  | { vectorStyles: LegacyVectorStyle; tileSets?: LegacyTileSet[] }
  | { tileSets: LegacyTileSet[] }
  | { vectorStyles: LegacyVectorStyle };

export type StyleConfig =
  | Partial<{
      fillColor: string;
      strokeColor: string;
      strokeWidth: number;
      radius: number;
      text?: string;
    }>
  | ((feature: unknown) => StyleConfig);

export type LayersRef = React.MutableRefObject<BaseLayer[]>;
export type MapInstanceRef = React.MutableRefObject<Map | null>;

export type MapCanvasV2Props = {
  layersRef: LayersRef;
  mapInstanceRef: MapInstanceRef;
  zoom: number;
  center: Coordinate;
};

export interface BasicMapProperties {
  zoom: number;
  center: number[];
  layers?: LayerConfig[];
  /**
   * @deprecated Use `layers` instead. This prop will be removed in a future release.
   */
  mapStyleOptions?: LegacyMapConfig;
  markers: MarkerFeature[];
}

export interface LayerSelectorProps {
  layersRef: LayersRef;
}

export type OverlayType = "tile" | "geojson" | "vector";

export interface OverlayConfig {
  id: string;
  type: OverlayType;
  source: string | GeoJSON.FeatureCollection;
  visible?: boolean;
  zIndex?: number;
  opacity?: number;
  style?: Record<string, any>;
  data?: OverlayFeatureConfig[];
}
