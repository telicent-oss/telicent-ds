export enum MarkerAnchor {
  CENTER = "center",
  BOTTOM_MIDDLE = "bottom-middle",
  TOP_MIDDLE = "top-middle",
  // add more if needed
}

export const anchorMap: Record<MarkerType, MarkerAnchor> = {
  pin: MarkerAnchor.BOTTOM_MIDDLE,
  circle: MarkerAnchor.CENTER,
  icon: MarkerAnchor.CENTER,
};

// types/MarkerFeature.ts
export type MarkerType = "pin" | "circle" | "icon" | string;

export interface MarkerStyle {
  fallbackText?: string;
  markerType?: MarkerType;
  color?: string; // e.g. "#ff6600"
  strokeWidth?: number;
  backgroundColor?: string; // e.g. "#ffffff"
  faIcon?: string;
  borderColor?: string;
  size?: number; // in px (for reference scale)
  zIndex?: number;
}

export interface MarkerFeature {
  id: string;
  geohash: string;
  type?: string; // semantic type, e.g. vandalism / accident
  name?: string;
  uri?: string;
  meta?: Record<string, any>;
  style?: MarkerStyle;
}
