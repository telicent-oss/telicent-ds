import { default as React } from '../../../node_modules/react';
import { FeatureCollection } from 'geojson';
import { ResultMarker } from './ResultsMarkers';

export declare const GEOJSON = "geojson";
export declare const FEATURE_COLLECTION = "FeatureCollection";
declare const initialView: {
    latitude: number;
    longitude: number;
    zoom: number;
    maxZoom: number;
};
type StyleOption = {
    label: string;
    uri: string;
    image: string;
};
export type ClassIcon = {
    backgroundColor: string;
    color: string;
    classUri: string;
    iconFallbackText: string;
    alt: string;
    faIcon?: string | undefined;
    faUnicode?: string | undefined;
    shape?: string | undefined;
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
