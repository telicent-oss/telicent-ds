import { MapRef } from 'react-map-gl/maplibre';
import { FeatureCollection } from 'geojson';
import { ResultMarker } from '../ResultsMarkers/ResultsMarkers';
export declare function useMapCanvas(params: {
    markers: ResultMarker[];
    geoPolygons: FeatureCollection;
    selected: string[];
}): {
    mapRef: import('../../../../../node_modules/react').RefObject<MapRef>;
    cursor: string;
    onDragStart: () => void;
    onDragEnd: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onLoad: () => void;
    setOffset: (off: [number, number]) => void;
};
