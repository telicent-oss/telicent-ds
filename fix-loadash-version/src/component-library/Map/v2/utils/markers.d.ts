import { default as Feature } from 'ol/Feature';
import { default as Point } from 'ol/geom/Point';
import { MarkerFeature } from '../types/markers';
export declare enum MarkerAnchor {
    BOTTOM_MIDDLE = 0,
    TOP_MIDDLE = 1,
    CENTER = 2
}
/**
 * Convert MarkerFeature to OL Feature
 */
export declare const markerToOLFeature: (marker: MarkerFeature) => Feature<Point>;
/**
 * Convert MarkerAnchor enum to OL anchor fractions
 */
export declare const getAnchorFraction: (anchor: MarkerAnchor) => [number, number];
