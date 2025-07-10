import { FeatureCollection } from "geojson";

export const DEFAULT_VIEW = {
  latitude: 53.42148743839479,
  longitude: -3.863068679356047,
  zoom: 3,
  maxZoom: 16,
};
export const DEFAULT_GEO_POLYGONS:FeatureCollection = { type: "FeatureCollection", features: [] }