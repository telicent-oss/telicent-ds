import { default as React } from '../../../node_modules/react';
import { StoryObj } from '@storybook/react/*';
import { ResultMarker } from './ResultsMarkers';

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
    };
    decorators: (Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react/*').ReactRenderer, {
        mapStyleOptions: {
            vectorStyles?: import('./utils/schema').StyleOption | import('./utils/schema').StyleOption[];
            tileSets?: import('./utils/schema').StyleOption[];
        };
        initialViewState?: {
            latitude: number;
            longitude: number;
            zoom: number;
            maxZoom: number;
        } | undefined;
        markers?: ResultMarker[] | undefined;
        geoPolygons?: import('geojson').FeatureCollection | undefined;
        selected: string[];
        onClickMarker?: ((marker: ResultMarker) => void) | undefined;
        findByClassUri: (maybeClassUri: string) => import('./utils/schema').ClassIcon;
        theme?: import('../../export').UITheme | undefined;
        defaultStyle?: string | undefined;
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
