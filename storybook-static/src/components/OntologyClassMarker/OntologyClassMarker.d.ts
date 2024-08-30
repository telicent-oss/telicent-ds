import { default as React } from 'react';
import { MarkerEvent, MarkerInstance } from 'react-map-gl/dist/esm/types';

type Feature = GeoJSON.Feature<GeoJSON.Point, OntologyClassMarkerProperties>;
export type OntologyClassMarkerProperties<FeatureProperties = unknown> = FeatureProperties & {
    uri: string;
    classUri: string;
    id: string;
} & Partial<{
    selected: boolean;
}>;
export type OntologyClassMarkerProps = Partial<{
    features: Feature[];
    onClick: (event: MarkerEvent<MarkerInstance, MouseEvent>, feature: Feature) => void;
}>;
declare const OntologyClassMarker: React.FC<OntologyClassMarkerProps>;
export default OntologyClassMarker;
