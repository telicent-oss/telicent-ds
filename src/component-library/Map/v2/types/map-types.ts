import { Coordinate } from "ol/coordinate";
import BaseLayer from "ol/layer/Base";
import { OverlayFeatureConfig } from "./overlays";
import { LayerConfig } from "./layers";
import { MarkerFeature } from "./markers";
import { Map } from "ol";
import { PolygonFeature } from "./polygons";

export type LegacyTileSet = {
  label: string;
  uri: string;
  image: string;
  attribution?: string;
};

export type LegacyVectorStyle = {
  label: string;
  uri: string;
  image: string;
};

export type LegacyMapConfig = {
  vectorStyles?: LegacyVectorStyle;
  tileSets?: LegacyTileSet[];
};

export type StyleConfig =
  | Partial<{
      fillColor: string;
      strokeColor: string;
      strokeWidth: number;
      radius: number;
      text?: string;
    }>
  | ((feature: unknown) => StyleConfig);

export type LayersRef = React.MutableRefObject<BaseLayer[] | null>;
export type MapInstanceRef = React.MutableRefObject<Map | null>;

export type MapCanvasV2Props = {
  layers: BaseLayer[];
  mapInstanceRef: MapInstanceRef;
  onFeatureClick?: (ids: string[]) => void;
  zoom: number;
  center: Coordinate;
  controls?: Partial<MapControlsConfig>;
};

export type BasicMapV2Handle = {
  zoomIn: () => void;
  zoomOut: () => void;
  panToFeature: (id: string) => void;
  panToFeatures: (ids: string[]) => void;
  layers: BaseLayer[];
  // zoomInAsync: () => Promise<void>;
  // zoomOutAsync: () => Promise<void>;
  // panToAsync: (ids: string[]) => Promise<void>;
};

export interface MapControlsConfig {
  showZoom: boolean;
  showRotate: boolean;
  showFullScreen: boolean;
  showLayerSelector: boolean;
}

export interface BasicMapProperties {
  zoom: number;
  center: number[];
  layers?: LayerConfig[];
  controls?: Partial<MapControlsConfig>;
  /**
   * @deprecated Use `layers` instead. This prop will be removed in a future release.
   */
  mapStyleOptions?: LegacyMapConfig;
  markers: MarkerFeature[];
  polygons: PolygonFeature[];
  onFeatureClick?: (ids: string[]) => void;
  onLayersReady?: (isReady: boolean) => void;
}

export interface LayerSelectorProps {
  layers: BaseLayer[];
  style?: React.CSSProperties;
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
