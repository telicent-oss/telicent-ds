import { Coordinate } from "ol/coordinate";
import BaseLayer from "ol/layer/Base";
import { StyleLike } from "ol/style/Style";

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

export type BaseRasterLayerConfig = {
  kind: "base-raster";
  provider?: "osm" | "xyz" | "wmts";
  attribution?: string; // TODO: Possibly overwritten?
  url?: string;
  visible?: boolean;
  previewImage: string;
  label: string;
};

export type MapCanvasV2Props = {
  layersRef: LayersRef;
  zoom: number;
  center: Coordinate;
};

export type BaseVectorTileLayerConfig = {
  kind: "base-vector-tiles";
  provider?: "mapbox" | "maptiler" | "arcgis" | "custom";
  url: string;
  styleUrl?: string; // e.g. Mapbox/MapTiler JSON
  accessToken?: string;
  visible?: boolean;
  previewImage: string;
  label: string;
};

export type OverlayVectorLayerConfig = {
  kind: "overlay-vector";
  data: OverlayFeatureConfig[];
  style?: StyleLike;
  visible?: boolean;
};

export type LayerConfig = BaseRasterLayerConfig | BaseVectorTileLayerConfig;

export interface BasicMapProperties {
  zoom: number;
  center: number[];
  layers: LayerConfig[];
  /**
   * @deprecated Use `layers` instead. This prop will be removed in a future release.
   */
  mapStyleOptions: LegacyMapConfig;
}

export type OverlayFeatureConfig = {
  type: "Point" | "Polygon" | "MultiPolygon";
  coordinates: number[] | number[][] | number[][][];
  label?: string;
  id?: string;

  /** Optional extra metadata the app might need */
  meta?: Record<string, any>;
};

export interface LayerSelectorProps {
  layersRef: LayersRef;
}

export type LayerMeta = {
  label: string;
  image: string;
  visible: boolean;
};
