import { default as React } from '../../../node_modules/react';
import { StoryObj } from '@storybook/react';
import { default as OntologyClassMarker, OntologyClassMarkerProperties } from './OntologyClassMarker';

declare const meta: {
    component: React.FC<Partial<{
        features: import('geojson').Feature<import('geojson').Point, OntologyClassMarkerProperties<unknown>>[];
        onClick: (event: import('react-map-gl/dist/esm/types').MarkerEvent<import('react-map-gl/maplibre').MarkerInstance, MouseEvent>, feature: import('geojson').Feature<import('geojson').Point, OntologyClassMarkerProperties<unknown>>) => void;
    }>>;
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        features?: import('geojson').Feature<import('geojson').Point, OntologyClassMarkerProperties<unknown>>[] | undefined;
        onClick?: ((event: import('react-map-gl/dist/esm/types').MarkerEvent<import('react-map-gl/maplibre').MarkerInstance, MouseEvent>, feature: import('geojson').Feature<import('geojson').Point, OntologyClassMarkerProperties<unknown>>) => void) | undefined;
    }>) => import("@emotion/react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof OntologyClassMarker>;
export declare const Example: Story;
export declare const Selected: Story;
