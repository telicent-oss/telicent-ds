import { default as React } from '../../../node_modules/react';
import { FeatureCollection } from 'geojson';
import { StyleOption, ClassIcon } from './utils/schema';
import { ResultMarker } from './ResultsMarkers';

export declare const GEOJSON = "geojson";
export declare const FEATURE_COLLECTION = "FeatureCollection";
declare const initialView: {
    latitude: number;
    longitude: number;
    zoom: number;
    maxZoom: number;
};
export interface FeatureMapProps {
    mapStyleOptions?: {
        vectorStyles?: StyleOption | StyleOption[];
        tileSets?: StyleOption[];
    };
    initialViewState?: typeof initialView;
    markers?: ResultMarker[];
    geoPolygons?: FeatureCollection;
    selected: string[];
    onClickMarker?: (marker: ResultMarker) => void;
    findByClassUri: (maybeClassUri: string) => ClassIcon;
    theme?: "DocumentPink" | "dark" | "light" | "DataNavy" | "GraphOrange";
    defaultStyle?: string;
    attributionControl?: boolean;
}
declare const FeatureMap: React.FC<FeatureMapProps>;
export default FeatureMap;
