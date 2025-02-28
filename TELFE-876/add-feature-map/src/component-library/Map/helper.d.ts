import { Geometry } from 'geojson';
import { ResultMarker } from '../ResultsMarkers';

export declare const getIconLabel: (uri: string) => any;
export declare const getLabelCharacters: (label: string) => string;
interface Feature {
    type: "Feature";
    geometry: Geometry;
}
export interface FeatureCollection {
    type: "FeatureCollection";
    features: Feature[];
}
export declare const checkIsValidPosition: (arr: any[]) => boolean;
export declare const recursiveFlatten: (array: any[]) => any;
export declare const getCoordinates: (geometry: Geometry) => any;
export declare const calculateBounds: (markers?: ResultMarker[], polygons?: Feature[]) => import('maplibre-gl').LngLatBounds;
export {};
