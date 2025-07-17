// src/components/MapCanvas/MapCanvas.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MapCanvas, MapCanvasProps } from './MapCanvas';
import { MapCanvasProvider } from './MapCanvasProvider';
import { MapProvider } from 'react-map-gl/maplibre';
import { DEFAULT_VIEW, DEFAULT_GEO_POLYGONS } from '../../constants';
import type { FeatureCollection } from 'geojson';
import { calculateBounds } from '../../utils/helper/helper';
import { ResultMarker } from '../ResultsMarkers/ResultsMarkers';
import { ARGA_ATTACK, BOULAY_ATTACK } from '../../utils/sampleData/markers';
import { AUSTRIA, MOLDOVA } from '../../utils/sampleData';
import { SUPER_OBVIOUS_POLYGON_LAYERS } from '../../primitives/MapCanvas/storyconfig';
import type { MapRef } from 'react-map-gl/maplibre';

const DEFAULT_STYLE = 'https://demotiles.maplibre.org/style.json';
const sampleMarkers: ResultMarker[] = [ARGA_ATTACK, BOULAY_ATTACK];

const samplePolygons: FeatureCollection = {
  type: 'FeatureCollection',
  features: [AUSTRIA, MOLDOVA],
};

// Pre‐compute bounds so we can fit exactly once on load
const initialBounds = calculateBounds(sampleMarkers, samplePolygons.features);

const meta: Meta<MapCanvasProps> = {
  title: 'Component Library/Map/primitives/MapCanvas',
  component: MapCanvas,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MapCanvasProvider initialMapStyleConfig={{ tileSets: [], vectorStyles: [] }}>
        <MapProvider>
          <div style={{ width: 400, height: 300 }}>
            <Story />
          </div>
        </MapProvider>
      </MapCanvasProvider>
    ),
  ],
  argTypes: {
    markers: { control: 'object' },
    geoPolygons: { control: 'object' },
    selected: { control: 'object' },
  },
};
export default meta;

type Story = StoryObj<MapCanvasProps>;

// Base args for both stories
const baseArgs: Partial<MapCanvasProps> = {
  mapRef: React.createRef<MapRef>(),
  initialViewState: DEFAULT_VIEW,
  defaultStyle: DEFAULT_STYLE,
  attributionControl: true,
  findByClassUri: () => ({
    backgroundColor: 'white',
    color: 'black',
    classUri: '',
    alt: '',
    iconFallbackText: '',
  }),
  onClickMarker: () => {},
  cursor: 'auto',
  onDragStart: () => {},     // no‐ops so you can drag freely
  onDragEnd: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};

export const Default: Story = {
  args: {
    ...baseArgs,
    markers: [],
    geoPolygons: DEFAULT_GEO_POLYGONS,
    selected: [],
    polygonLayers: [],
    // Fit only on load for default as well
    onLoad: () => {
      const map = (baseArgs.mapRef as React.RefObject<MapRef>).current;
      map?.fitBounds(initialBounds, { padding: 20, maxZoom: 8, duration: 0 });
    },
  },
};

export const Interactive: Story = {
  args: {
    ...baseArgs,
    markers: sampleMarkers,
    geoPolygons: samplePolygons,
    selected: [],
    polygonLayers: SUPER_OBVIOUS_POLYGON_LAYERS,
    onLoad: () => {
      const map = (baseArgs.mapRef as React.RefObject<MapRef>).current;
      map?.fitBounds(initialBounds, { padding: 20, maxZoom: 8, duration: 0 });
    },
  },
};
