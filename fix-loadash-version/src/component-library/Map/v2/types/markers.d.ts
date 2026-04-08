export declare enum MarkerAnchor {
    CENTER = "center",
    BOTTOM_MIDDLE = "bottom-middle",
    TOP_MIDDLE = "top-middle"
}
export declare const anchorMap: Record<MarkerType, MarkerAnchor>;
export type MarkerType = "pin" | "circle" | "icon" | string;
export interface MarkerStyle {
    fallbackText?: string;
    markerType?: MarkerType;
    color?: string;
    strokeWidth?: number;
    backgroundColor?: string;
    faIcon?: string;
    borderColor?: string;
    size?: number;
    zIndex?: number;
}
export interface MarkerFeature {
    id: string;
    geohash: string;
    type?: string;
    name?: string;
    uri?: string;
    meta?: Record<string, any>;
    style?: MarkerStyle;
}
