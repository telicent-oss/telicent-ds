import { default as React } from '../../../../../node_modules/react';
import { UITheme } from '../../../../export';
import { MapCanvasProps } from '../../primitives/MapCanvas/MapCanvas';
type Picked = Pick<MapCanvasProps, "initialViewState" | "defaultStyle" | "attributionControl" | "markers" | "geoPolygons" | "selected" | "onClickMarker" | "findByClassUri">;
type Optional = Pick<Picked, "initialViewState" | "geoPolygons" | "attributionControl">;
type Optionalized = Partial<Optional>;
type RequiredRest = Omit<Picked, keyof Optional>;
export interface FeatureMapProps extends RequiredRest, // everything except initialViewState & geoPolygons
Optionalized {
    theme?: UITheme;
    polygonLayers?: (mapboxgl.FillLayer | mapboxgl.LineLayer | mapboxgl.SymbolLayer)[];
}
declare const FeatureMap: React.FC<FeatureMapProps>;
export default FeatureMap;
