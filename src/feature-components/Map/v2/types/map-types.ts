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
   * Sets one layer's opacity, 0 to 1. Throws on a value outside that range and
   * reports an unknown `layerId` through `onError`.
   *
   * For the overlays use the exported `MARKER_LAYER_ID`, `POLYGON_LAYER_ID` and
   * `PATH_LAYER_ID` rather than the literal strings. The value survives a
   * layer rebuild; it is re-applied whenever the layers are replaced.
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
   * Base layers, drawn under the markers, polygons and paths. Wins over the
   * deprecated `mapStyleOptions` when both are passed. Omit both and the map
   * draws with no basemap.
   *
   * A layer's `opacity` must be a number from 0 to 1. Unlike a bad feature
   * record, a bad opacity throws rather than reporting through `onError`: the
   * value is written by a developer in a prop or a deployment config, so it is
   * a mistake to surface at once rather than data to skip.
   */
  layers?: LayerConfig[];
  controls?: Partial<MapControlsConfig>;
  /**
   * @deprecated Use `layers` instead. This prop will be removed in a future release.
   */
  mapStyleOptions?: LegacyMapConfig;
  /**
   * Feature ids share one namespace with `polygons` and `paths`. `panToFeature`
   * and `onFeatureClick` key on the id alone, and a lookup takes the first
   * match with the marker layer searched first, so an id reused across the
   * three collections resolves to the marker.
   */
  markers: MarkerFeature[];
  polygons: PolygonFeature[];
  /**
   * Route lines. Each `PathFeature.id` becomes the OpenLayers feature id, so
   * `feature.getId()` is what `pathStyle` receives and what `panToFeature`
   * matches on.
   *
   * A path may carry its own `style`. Supplying `pathStyle` below replaces it
   * for every path -- see there.
   */
  paths?: PathFeature[];
  /**
   * Style for the whole path layer: a single style, or a function called per
   * feature.
   *
   * `pathStyle` wins outright. It applies to every path, including paths that
   * set their own `style`, and those paths lose that appearance while it is
   * set. To keep a path's own look and still respond to selection, branch on
   * the id inside this function and return the style you want.
   *
   * Omit it and each path renders with its own `style`, or the default overlay
   * style if it has none.
   *
   * For selection-driven restyling, just close over state and compare ids:
   *
   * ```tsx
   * const [selected, setSelected] = useState<string | null>(null);
   * const pathStyle = (feature: FeatureLike) =>
   *   feature.getId() === selected ? SELECTED : UNSELECTED;
   * ```
   *
   * A new function identity is re-applied to the layer, which redraws it, so
   * no manual refresh is needed. The flip side is that a new identity on every
   * render redraws on every render: memoise it on the state it reads if that
   * matters. Hoist the `Style` objects themselves — the function runs per
   * feature per frame.
   *
   * Changing this does not rebuild the layers or move the viewport.
   */
  pathStyle?: StyleLike;
  onFeatureClick?: OnFeatureClick;
  onFeatureHover?: OnFeatureHover;
  /**
   * `true` once the base layers have resolved, and again after any rebuild.
   * `false` on unmount, and when layer setup fails -- in which case `onError`
   * fires too.
   *
   * Ready means the layers exist. Markers, polygons and paths are added just
   * after, so the map may still be empty on the first call.
   */
  onLayersReady?: (isReady: boolean) => void;
  /**
   * Called on a failure the map survives. Nothing is ever cleared, so whatever
   * was already drawn stays — an empty map if this was the first load, an
   * out-of-date one otherwise. Without a handler the error is only logged, so
   * pass this if the app needs to show that the map is incomplete.
   *
   * Three cases reach it:
   *
   * - layer setup failed
   * - marker icons failed to load
   * - a `polygons` or `paths` record has `coordinates` that contradict its
   *   `type`. That record is skipped and the rest of the map still draws. The
   *   error is a `MalformedFeatureError` naming the `featureId`, so an app can
   *   decide between a toast and a throw.
   *
   * A malformed record is reported once per mounted map. Remounting reports it
   * again, so an app that survives a route or tab switch should key on
   * `featureId` itself rather than count calls.
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
