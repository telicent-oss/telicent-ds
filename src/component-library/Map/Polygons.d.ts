import { FeatureCollection } from 'geojson';
import { default as React } from '../../../node_modules/react';

interface PolygonMarkersProps {
    geometryCollection: FeatureCollection;
}
declare const PolygonMarkers: React.FC<PolygonMarkersProps>;
export default PolygonMarkers;
