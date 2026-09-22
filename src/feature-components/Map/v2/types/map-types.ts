import { Coordinate } from "ol/coordinate";
import BaseLayer from "ol/layer/Base";
import type * as GeoJSON from "geojson";
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
  /**
   * Sets one layer's opacity. `opacity` must be 0 to 1; anything else throws.
   * Overlay layer ids are `"marker-layer"`, `"polygon-layer"` and `"path-layer"`.
   * An unknown id, or a call before `onLayersReady(true)`, is reported to `onError`.
   * A layer rebuild resets the opacity. Set `opacity` in `layers` to keep it.
   */
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
  /**
   * Base layers, drawn under markers, polygons and paths.
   * A non-empty array replaces `mapStyleOptions`. An empty array is treated as omitted.
   * Omit both to draw no basemap.
   * A layer `opacity` must be 0 to 1; anything else throws.
   */
  layers?: LayerConfig[];
  controls?: Partial<MapControlsConfig>;
  /**
   * @deprecated Use `layers` instead. This prop will be removed in a future release.
   */
  mapStyleOptions?: LegacyMapConfig;
  /**
   * Keep ids unique across `markers`, `polygons` and `paths`.
   * `panToFeature` and `onFeatureClick` cannot tell a reused id apart.
   */
  markers: MarkerFeature[];
  polygons: PolygonFeature[];
  /**
   * Route lines. Each `id` becomes the OpenLayers feature id.
   */
  paths?: PathFeature[];
  /**
   * Style for every path. Overrides each path's own `style`, direction arrows included.
   * Omit it to draw each path with its own `style`, or the default style.
   * Changing it does not rebuild layers or move the viewport.
   * A function is called for each path in view each time the layer redraws its paths.
   * Create `Style` objects outside it.
   * A path's own `style` is available as `feature.get("originalStyle")`, `undefined` when not set:
   *
   * ```tsx
   * const pathStyle = (feature: FeatureLike) =>
   *   feature.getId() === selected
   *     ? SELECTED
   *     : (feature.get("originalStyle") as Style | Style[] | undefined) ??
   *       UNSELECTED;
   * ```
   */
  pathStyle?: StyleLike;
  onFeatureClick?: OnFeatureClick;
  onFeatureHover?: OnFeatureHover;
  /**
   * `true` when the layers exist. Called again after each rebuild.
   * `false` on unmount, and when layer setup fails (`onError` also fires).
   * Markers, polygons and paths are added after this call.
   */
  onLayersReady?: (isReady: boolean) => void;
  /**
   * Called on an error the map survives. Content already drawn stays.
   * Without a handler the error goes to `console.error`. Reported cases:
   *
   * - layer setup failed
   * - marker icons failed to load, or a marker could not be converted; that update is skipped
   * - `setLayerOpacity` called with an unknown id, or before `onLayersReady(true)`
   * - a polygon or path could not be converted: a `MalformedFeatureError` with `featureId`;
   *   that feature is skipped and the rest draw
   *
   * A malformed feature is reported once per mount for each distinct message.
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
