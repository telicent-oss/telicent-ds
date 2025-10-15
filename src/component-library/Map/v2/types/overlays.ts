import { MarkerStyle } from "./markers";

export type OverlayFeatureConfig = {
  type: "Point" | "Polygon" | "MultiPolygon";
  coordinates: number[] | number[][] | number[][][];
  label?: string;
  id?: string;
  marker?: string | MarkerStyle;
  meta?: Record<string, any>;
};
