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
   * Sets one layer's opacity. Throws on NaN, Infinity, or a value outside 0 to
   * 1, and reports an unknown `layerId` through `onError`.
   *
   * For the overlays use the exported `MARKER_LAYER_ID`, `POLYGON_LAYER_ID` and
   * `PATH_LAYER_ID` rather than the literal strings.
   *
   * A valid value does nothing until `onLayersReady(true)`. It then lasts until
   * the next layer rebuild, which happens whenever `layers` changes identity:
   * every render if the parent passes an array literal. For an opacity that
   * persists, set it on the `layers` config instead.
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
   * Base layers, drawn under the markers, polygons and paths. A non-empty
   * `layers` overrides the deprecated `mapStyleOptions`; an empty array falls
   * through to it. Omit both and the map draws with no basemap.
   *
   * A layer's `opacity` must be a number from 0 to 1. A bad opacity throws,
   * where a bad feature record is reported through `onError` instead: opacity
   * comes from a prop or a deployment config, not from runtime data.
   */
  layers?: LayerConfig[];
  controls?: Partial<MapControlsConfig>;
  /**
   * @deprecated Use `layers` instead. This prop will be removed in a future release.
   */
  mapStyleOptions?: LegacyMapConfig;
  /**
   * Feature ids share one namespace with `polygons` and `paths`.
   * `panToFeature` and `panToFeatures` take the first match, searching the
   * marker layer first, so an id reused across the three collections resolves
   * to the marker. `onFeatureClick` reports ids, so a reused id does not
   * identify which feature was clicked.
   */
  markers: MarkerFeature[];
  polygons: PolygonFeature[];
  /**
   * Route lines. Each `PathFeature.id` becomes the OpenLayers feature id, so
   * `feature.getId()` is what `pathStyle` receives and what `panToFeature`
   * matches on.
   *
   * A path may carry its own `style`, which `pathStyle` overrides. See
   * `pathStyle`.
   */
  paths?: PathFeature[];
  /**
   * Style for the whole path layer: a single style, or a function called per
   * feature.
   *
   * It overrides every path's own `style`, direction arrows included, since the
   * arrows are part of that style. Omit it and each path renders with its own
   * `style`, or the default overlay style if it has none.
   *
   * Changing it restyles and redraws the path layer. It does not rebuild the
   * layers or move the viewport. A new function identity on every render
   * redraws on every render, so memoise it on the state it reads, and hoist the
   * `Style` objects: the function runs once per feature per layer render.
   *
   * For selection-driven restyling, compare ids inside the function:
   *
   * ```tsx
   * const [selected, setSelected] = useState<string | null>(null);
   * const pathStyle = (feature: FeatureLike) =>
   *   feature.getId() === selected ? SELECTED : UNSELECTED;
   * ```
   *
   * A path's own `style` stays readable on the feature under the
   * `originalStyle` key, so a function can fall through to it:
   *
   * ```tsx
   * const pathStyle = (feature: FeatureLike) =>
   *   feature.getId() === selected
   *     ? SELECTED
   *     : (feature.get("originalStyle") as Style | Style[] | undefined) ??
   *       UNSELECTED;
   * ```
   *
   * It is `undefined` for a path that set no `style` of its own, so that case
   * needs a fallback.
   */
  pathStyle?: StyleLike;
  onFeatureClick?: OnFeatureClick;
  onFeatureHover?: OnFeatureHover;
  /**
   * `true` once the base layers have resolved, and again after any rebuild.
   * `false` on unmount, and when layer setup fails, in which case `onError`
   * fires too.
   *
   * Ready means the layers exist. Markers, polygons and paths are added just
   * after, so the map may still be empty on the first call.
   */
  onLayersReady?: (isReady: boolean) => void;
  /**
   * Called on a failure the map survives. Nothing already drawn is cleared, so
   * the map is left empty if this was the first load and out of date
   * otherwise. Without a handler the error is only logged.
   *
   * Four cases reach it:
   *
   * - layer setup failed
   * - marker icons failed to load
   * - `setLayerOpacity` was called with an unknown layer id
   * - a `polygons` or `paths` record could not be turned into geometry, most
   *   often because its `coordinates` contradict its `type`. That record is
   *   skipped and the rest of the map still draws. The error is a
   *   `MalformedFeatureError` naming the `featureId`.
   *
   * Skipping covers `polygons` and `paths` only. A `markers` record that
   * cannot be converted aborts that render's update, so its polygons and paths
   * are not added either.
   *
   * A malformed record is reported once per mounted map, per message.
   * Remounting reports it again, so an app that survives a route or tab switch
   * should key on `featureId` rather than count calls.
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
