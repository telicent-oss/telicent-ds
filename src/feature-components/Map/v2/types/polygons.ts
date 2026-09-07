export interface PolygonStyle {
  color: string;
  backgroundColor: string;
}

export type PolygonType = "Polygon" | "MultiPolygon";

export interface PolygonFeature {
  id: string;
  type: PolygonType;
  coordinates: number[][][] | number[][][][];
  name: string;
  meta?: Record<string, any>;
  style?: PolygonStyle;
}
