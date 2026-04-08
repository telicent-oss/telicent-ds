import { default as React } from '../../../../../node_modules/react';
import { MapRef } from 'react-map-gl/maplibre';
import { ResultMarker } from '../ResultsMarkers/ResultsMarkers';
export interface MapCanvasProps {
    mapRef: React.RefObject<MapRef>;
    initialViewState: {
        latitude: number;
        longitude: number;
        zoom: number;
        maxZoom: number;
    };
    cursor?: string;
    onDragStart: () => void;
    onDragEnd: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onLoad: () => void;
    defaultStyle?: string;
    attributionControl: boolean;
    markers: ResultMarker[];
    geoPolygons: GeoJSON.FeatureCollection;
    selected: string[];
    onClickMarker?: (m: ResultMarker) => void;
    findByClassUri: (u: string) => any;
    polygonLayers?: (mapboxgl.FillLayer | mapboxgl.LineLayer | mapboxgl.SymbolLayer)[];
}
export declare const MapCanvas: React.FC<MapCanvasProps>;
