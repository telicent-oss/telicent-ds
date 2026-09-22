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
   * Sets one layer's opacity; see `OpacitySchema` in types/opacity.ts. Reports
   * an unknown `layerId` through `onError`; for the overlays use
   * `MARKER_LAYER_ID`, `POLYGON_LAYER_ID` and `PATH_LAYER_ID`. It applies from
   * `onLayersReady(true)` until the next layer rebuild; set `opacity` on the
   * `layers` config to survive that rebuild.
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
   * through to it, and omitting both draws no basemap. A layer's `opacity`
   * throws if invalid; see `OpacitySchema` in types/opacity.ts.
   */
  layers?: LayerConfig[];
  controls?: Partial<MapControlsConfig>;
  /**
   * @deprecated Use `layers` instead. This prop will be removed in a future release.
   */
  mapStyleOptions?: LegacyMapConfig;
  /**
   * Feature ids share one namespace with `polygons` and `paths`. `panToFeature`
   * and `panToFeatures` take the first match, marker layer first; `onFeatureClick`
   * cannot disambiguate a reused id.
   */
  markers: MarkerFeature[];
  polygons: PolygonFeature[];
  /**
   * Route lines. Each `PathFeature.id` becomes the OpenLayers feature id, so
   * `feature.getId()` is what `pathStyle` reads and what `panToFeature` matches.
   */
  paths?: PathFeature[];
  /**
   * Style for the whole path layer: one style, or a function called per feature.
   * It overrides every path's own `style`, direction arrows included. Omit it
   * and each path renders with its own `style`, or the default overlay style.
   * Changing it restyles the path layer without rebuilding layers or moving the
   * viewport; memoise it and hoist the `Style` objects, as the function runs
   * once per feature per layer render. A path's own `style` stays readable
   * under `originalStyle`, `undefined` if it set none:
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
   * `true` once the base layers have resolved, and again after any rebuild;
   * `false` on unmount and when layer setup fails, which also fires `onError`.
   * Ready means the layers exist; markers, polygons and paths follow, so the
   * map may still be empty on the first call.
   */
  onLayersReady?: (isReady: boolean) => void;
  /**
   * Called on a failure the map survives; nothing already drawn is cleared, and
   * without a handler the error is only logged. Five cases reach it:
   *
   * - layer setup failed
   * - marker icons failed to load
   * - `setLayerOpacity` was called with an unknown layer id
   * - `setLayerOpacity` was called before `onLayersReady(true)`, so there were
   *   no layers to search
   * - a `polygons` or `paths` record could not be turned into geometry: a
   *   `MalformedFeatureError` naming the `featureId`, that record skipped. An
   *   unconvertible `markers` record instead aborts that render's update.
   *
   * Reported once per mounted map per message, so key on `featureId`.
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
