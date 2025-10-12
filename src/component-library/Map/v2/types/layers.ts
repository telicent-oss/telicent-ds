import { StyleLike } from "ol/style/Style";
import { OverlayFeatureConfig } from "./overlays";

export type BaseVectorTileLayerConfig = {
  id: string;
  kind: "base-vector-tiles";
  provider?: "mapbox" | "maptiler" | "arcgis" | "custom";
  url: string;
  styleUrl?: string; // e.g. Mapbox/MapTiler JSON
  accessToken?: string;
  visible?: boolean;
  previewImage: string;
  label: string;
};

export type BaseRasterLayerConfig = {
  id: string;
  kind: "base-raster";
  provider?: "osm" | "xyz" | "wmts";
  attribution?: string; // TODO: Possibly overwritten?
  url?: string;
  visible?: boolean;
  previewImage: string;
  label: string;
};

export type OverlayVectorLayerConfig = {
  id: string;
  kind: "overlay-vector";
  data: OverlayFeatureConfig[];
  style?: StyleLike;
  visible?: boolean;
  zIndex?: number;
};

export type LayerConfig =
  | BaseRasterLayerConfig
  | BaseVectorTileLayerConfig
  | OverlayVectorLayerConfig;

export type LayerMeta = {
  label: string;
  image: string;
  visible: boolean;
};
