import React from 'react';
import FeatureMap from './FeatureMap';
import { Meta, StoryObj } from '@storybook/react/*';
import { Box } from '@mui/material';
import { ResultMarker } from './ResultsMarkers';
import { layerStyles } from './FeatureMap.storyconfig';
import { AUSTRIA, MOLDOVA } from './sampleData';
import { ARGA_ATTACK, BOULAY_ATTACK } from './sampleData/markers';
import { UIThemeSchema } from '../../export';

const meta = {
  title: 'Component Library/FeatureMap',
  component: FeatureMap,
  tags: ["map", "markers", "polygons", "autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
This map component automatically calculates optimal viewport bounds to ensure all specified markers and polygons are visible.

It dynamically adjusts panning and zoom levels to focus on selected features, providing an intuitive and comprehensive view of the mapped data.

> Note: Maps don't behave in the storybook quite as they would in an app. This is due to the variables being passed in not being controlled state.
`
      }
    },
    theme: "DocumentPink",
    selected: [],
    attributionControl: true,
    defaultStyle: "",
    geoPolygons: [],
    markers: [] as ResultMarker[],
    initialViewState: {},
    onClickMarker: () => { },
    findByClassUri: () => { }
  },
  argTypes: {
    theme: {
      control: "select",
      options: UIThemeSchema.options,
      description: `The layer picker has a border which derives it's colour from the theme. 

(This will be deprecated once the uplift work is completed)`
    },
    selected: {
      control: "multi-select",
      options: [],
      description: "Select by populating a list of uri's. The markers and polygons will then be checked against the markers and geoPolygons"
    },
    attributionControl: {
      control: "radio",
      "options": [true, false],
      description: "Show map attribution as per legal requirements. The ability to hide attribution was added because if you hide the map, it is still visible."
    },
    findByClassUri: {
      description: `Callback function used to obtain the icons for results. The icons will be shown on the map as a marker. 
This is designed to be used with ontology-service`
    },
    onClickMarker: {
      description: "Callback function to add custom behaviour. Triggered when a user selects a marker that is displayed on the map."
    }
  },
  decorators: (Story) => (
    <Box sx={{
      width: "50vw",
      height: "50vh",
      margin: "auto"
    }}>{
        Story()
      }</Box>
  )
} satisfies Meta<typeof FeatureMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MapWithMarkers: Story = {
  args: {
    theme: "DocumentPink",
    mapStyleOptions: layerStyles,
    attributionControl: true,
    selected: [],
    markers: [
      ARGA_ATTACK,
      BOULAY_ATTACK
    ],
    defaultStyle: "https://demotiles.maplibre.org/style.json",
    findByClassUri: (maybeClassUri: string) => ({
      backgroundColor: "white",
      color: "black",
      classUri: maybeClassUri,
      alt: "sample alt",
      iconFallbackText: "1"
    })
  }
}

export const MapWithPolygons: Story = {
  args: {
    theme: "DocumentPink",
    mapStyleOptions: layerStyles,
    geoPolygons: { type: 'FeatureCollection', features: [AUSTRIA] },
    attributionControl: true,
    selected: [],
    defaultStyle: "https://demotiles.maplibre.org/style.json",
    findByClassUri: (maybeClassUri: string) => ({
      backgroundColor: "white",
      color: "black",
      classUri: maybeClassUri,
      alt: "sample alt",
      iconFallbackText: "1"
    })
  }
}


export const MapWithMarkersAndPolygons: Story = {
  args: {
    theme: "DocumentPink",
    mapStyleOptions: layerStyles,
    attributionControl: true,
    markers: [
      ARGA_ATTACK,
      BOULAY_ATTACK
    ],
    geoPolygons: { type: 'FeatureCollection', features: [AUSTRIA, MOLDOVA] },
    selected: [],
    defaultStyle: "https://demotiles.maplibre.org/style.json",
    findByClassUri: (maybeClassUri: string) => ({
      backgroundColor: "white",
      color: "black",
      classUri: maybeClassUri,
      alt: "sample alt",
      iconFallbackText: "1"
    })
  }
}

export const MapWithSelectedMarker: Story = {
  args: {
    theme: "DocumentPink",
    mapStyleOptions: layerStyles,
    attributionControl: true,
    markers: [
      ARGA_ATTACK,
      BOULAY_ATTACK
    ],
    geoPolygons: { type: "FeatureCollection", features: [AUSTRIA, MOLDOVA] },
    selected: [ARGA_ATTACK.uri],
    defaultStyle: "https://demotiles.maplibre.org/style.json",
    findByClassUri: (maybeClassUri: string) => ({
      backgroundColor: "white",
      color: "black",
      classUri: maybeClassUri,
      alt: "sample alt",
      iconFallbackText: "1"
    })
  }
}


export const MapWithoutLayers: Story = {
  args: {
    theme: "DocumentPink",
    attributionControl: true,
    selected: [],
    defaultStyle: "https://demotiles.maplibre.org/style.json",
    findByClassUri: (maybeClassUri: string) => ({
      backgroundColor: "white",
      color: "black",
      classUri: maybeClassUri,
      alt: "sample alt",
      iconFallbackText: "1"
    })
  }
}

