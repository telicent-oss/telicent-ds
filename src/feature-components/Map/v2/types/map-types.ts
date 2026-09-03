import { Coordinate } from "ol/coordinate";
import BaseLayer from "ol/layer/Base";
import { OverlayFeatureConfig } from "./overlays";
import { LayerConfig } from "./layers";
import { MarkerFeature } from "./markers";
import { Map } from "ol";
import { PathFeature } from "./paths";
import { PolygonFeature } from "./polygons";
import { StyleLike } from "ol/style/Style";

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

export type FeatureEvent = {
  pixel: [number, number];
};

export type OnFeatureClick = (ids: string[], event?: FeatureEvent) => void;

export type OnFeatureHover = (
  id: string | null,
  event?: FeatureEvent
) => void;

export type MapCanvasV2Props = {
  layers: BaseLayer[];
  mapInstanceRef: MapInstanceRef;
  onFeatureClick?: OnFeatureClick;
  onFeatureHover?: OnFeatureHover;
  zoom: number;
  center: Coordinate;
  controls?: Partial<MapControlsConfig>;
};

export type BasicMapV2Handle = {
  zoomIn: () => void;
  zoomOut: () => void;
  panToFeature: (id: string) => void;
  panToFeatures: (ids: string[]) => void;
  setLayerOpacity: (layerId: string, opacity: number) => void;
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
  paths?: PathFeature[];
  pathStyle?: StyleLike;
  onFeatureClick?: OnFeatureClick;
  onFeatureHover?: OnFeatureHover;
  onLayersReady?: (isReady: boolean) => void;
  /**
   * Called on an async failure the map survives: layer setup or marker icon
   * loading. Nothing is cleared, so whatever was already drawn stays — an
   * empty map if this was the first load, an out-of-date one otherwise.
   * Without a handler the error is only logged, so pass this if the app needs
   * to show that the map is stale.
   *
   * Malformed feature coordinates do not come through here. They are a config
   * mistake, so they throw during render as a `MalformedFeatureError` for the
   * nearest error boundary to handle — routing a render throw into a callback
   * would make React report the same error more than once.
   */
  onError?: (error: Error) => void;
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
