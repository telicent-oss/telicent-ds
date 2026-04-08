import { default as React } from '../../../../../node_modules/react';
import { StoryObj } from '@storybook/react/*';
import { ResultMarker } from '../../primitives/ResultsMarkers/ResultsMarkers';
declare const meta: {
    title: string;
    component: React.FC<import('./FeatureMap').FeatureMapProps>;
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
        theme: string;
        selected: never[];
        attributionControl: boolean;
        defaultStyle: string;
        geoPolygons: never[];
        markers: ResultMarker[];
        initialViewState: {};
        onClickMarker: () => void;
        findByClassUri: () => void;
    };
    argTypes: {
        theme: {
            control: "select";
            options: ["DataNavy", "DocumentPink", "GraphOrange", "AdminBlue", "Blank"];
            description: string;
        };
        selected: {
            control: "multi-select";
            options: never[];
            description: string;
        };
        attributionControl: {
            control: "radio";
            options: boolean[];
            description: string;
        };
        findByClassUri: {
            description: string;
        };
        onClickMarker: {
            description: string;
        };
        polygonLayers: {
            description: string;
        };
    };
    decorators: (Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react/*').ReactRenderer, {
        theme?: import('../../../../export').UITheme | undefined;
        polygonLayers?: (mapboxgl.FillLayer | mapboxgl.LineLayer | mapboxgl.SymbolLayer)[] | undefined;
        selected: string[];
        markers: ResultMarker[];
        findByClassUri: (u: string) => any;
        defaultStyle?: string | undefined;
        onClickMarker?: ((m: ResultMarker) => void) | undefined;
        geoPolygons?: import('geojson').FeatureCollection<import('geojson').Geometry, import('geojson').GeoJsonProperties> | undefined;
        initialViewState?: {
            latitude: number;
            longitude: number;
            zoom: number;
            maxZoom: number;
        } | undefined;
        attributionControl?: boolean | undefined;
    }>) => import("@emotion/react/jsx-runtime").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const MapWithMarkers: Story;
export declare const MapWithPolygons: Story;
export declare const MapWithMarkersAndPolygons: Story;
export declare const MapWithSelectedMarker: Story;
export declare const MapWithoutLayers: Story;
