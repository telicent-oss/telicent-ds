export type OverlayFeatureConfig = {
  type: "Point" | "Polygon" | "MultiPolygon";
  coordinates: number[] | number[][] | number[][][];
  label?: string;
  id?: string;
  meta?: Record<string, any>;
};
