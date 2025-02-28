import { default as React } from '../../../node_modules/react';
import { ClassIcon } from './FeatureMap';

export declare const GEOJSON = "geojson";
export declare const FEATURE_COLLECTION = "FeatureCollection";
export type LocationFeature = {
    type: "Feature";
    properties: {
        id: string;
        longitude: number;
        latitude: number;
        name: string;
        types: string[];
        uri: string;
    };
    geometry: {
        type: "Point";
        coordinates: [number, number];
    };
};
type ResultsMarkersProps = {
    onClick?: (marker: ResultMarker) => void;
    selected: any;
    findByClassUri: (maybeClassUri: string) => ClassIcon;
    markers: ResultMarker[];
};
declare const ResultsMarkers: React.FC<ResultsMarkersProps>;
export type ResultMarker = {
    geohash: string;
    type: string;
    uri: string;
    name: string;
};
export default ResultsMarkers;
