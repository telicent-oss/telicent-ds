import { MarkerStyle } from '../types/markers';
import { default as Style } from 'ol/style/Style';
import { default as Feature } from 'ol/Feature';
import { default as Point } from 'ol/geom/Point';
type InternalMarkerStyle = MarkerStyle & {
    innerSvg?: string;
};
export declare const extractPathD: (rawSvg: string) => string;
/**
 * Compute the bounding box of a path `d` string.
 */
export declare const getPathBBox: (d: string) => {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    width: number;
    height: number;
};
export declare const makeCircleSvg: ({ size, backgroundColor, color, strokeWidth, innerSvg, }: InternalMarkerStyle) => string;
export declare const getGeneratedOlIcon: (style?: MarkerStyle, feature?: Feature) => Style;
export declare const createOlMarker: (id: string, coords: [number, number], style: MarkerStyle) => Feature<Point>;
export {};
