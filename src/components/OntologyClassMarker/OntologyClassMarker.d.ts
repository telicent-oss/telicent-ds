import { default as React } from '../../../node_modules/react';
import { MarkerEvent, MarkerInstance } from 'react-map-gl/dist/esm/types';
import { FlattenedStyleType, FlattenedStyleTypeForFindIcon } from '@telicent-oss/ontologyservice';

type Feature = GeoJSON.Feature<GeoJSON.Point, OntologyClassMarkerProperties>;
export type OntologyClassMarkerProperties<FeatureProperties = unknown> = FeatureProperties & {
    uri: string;
    classUri: string;
    id: string;
    icon: FlattenedStyleTypeForFindIcon | FlattenedStyleType;
} & Partial<{
    selected: boolean;
}>;
export type OntologyClassMarkerProps = Partial<{
    features: Feature[];
    onClick: (event: MarkerEvent<MarkerInstance, MouseEvent>, feature: Feature) => void;
}>;
declare const OntologyClassMarker: React.FC<OntologyClassMarkerProps>;
export default OntologyClassMarker;
