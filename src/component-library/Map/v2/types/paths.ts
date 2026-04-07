export type DirectionMarker =
  | { type: "triangle" }
  | { type: "svg"; markup: string };

export interface DirectionStyle {
  color?: string;
  size?: number;
  marker?: DirectionMarker;
}

export interface PathStyle {
  color: string;
  width?: number;
  lineDash?: number[];
  lineCap?: CanvasLineCap;
  lineJoin?: CanvasLineJoin;
  direction?: DirectionStyle;
}

export type PathType = "LineString" | "MultiLineString";

export interface PathFeature {
  id: string;
  type: PathType;
  coordinates: number[][] | number[][][];
  name: string;
  meta?: Record<string, any>;
  style?: PathStyle;
}
