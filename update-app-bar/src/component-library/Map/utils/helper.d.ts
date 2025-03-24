import { Geometry, Feature } from 'geojson';
import { ResultMarker } from '../ResultsMarkers';

export declare const getIconLabel: (uri: string) => string;
export declare const getLabelCharacters: (label: string) => string;
export declare const checkIsValidPosition: (arr: unknown[]) => boolean;
export declare const recursiveFlatten: (array: any[]) => any;
export declare const getCoordinates: (geometry: Geometry) => any;
export declare const calculateBounds: (markers?: ResultMarker[], polygons?: Feature[]) => import('maplibre-gl').LngLatBounds;
