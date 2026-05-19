// src/components/BasicMap/BasicMap.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BasicMap, BasicMapProps } from "./BasicMap";
import { Box } from "@mui/material";
import { ARGA_ATTACK, BOULAY_ATTACK } from "../../utils/sampleData/markers";
import { AUSTRIA, MOLDOVA } from "../../utils/sampleData";

import { DEFAULT_VIEW, DEFAULT_GEO_POLYGONS } from "../../constants";
import { ResultMarker } from "../../primitives/ResultsMarkers/ResultsMarkers";
import { UIThemeSchema } from "../../../../export";
import { initialMapStyleConfig, SUPER_OBVIOUS_POLYGON_LAYERS } from "../../primitives/MapCanvas/storyconfig";
import { MapCanvasProvider } from "../../primitives/MapCanvas/MapCanvasProvider";

export const allArgs:BasicMapProps = {
  defaultStyle: "https://demotiles.maplibre.org/style.json",
  attributionControl: true,
  initialViewState: DEFAULT_VIEW,
  markers: [],
  geoPolygons: DEFAULT_GEO_POLYGONS,
  selected: [],
  onClickMarker: () => {},
  findByClassUri: () => ({
    backgroundColor: "#fff",
    color: "#000",
    classUri: "",
    alt: "",
    iconFallbackText: "",
  }),
  polygonLayers: SUPER_OBVIOUS_POLYGON_LAYERS,
};

// Storybook assumes partial
const partialArgs:Partial<BasicMapProps> = allArgs;
  



const meta: Meta<typeof BasicMap> = {
  title: "Component Library/Map/composites/BasicMap",
  component: BasicMap,
  tags: ["map", "basic", "autodocs"],
  decorators: [
    (Story) => (
      <Box sx={{ width: "100vw", height: "100vh", margin: "auto" }}>
        <MapCanvasProvider initialMapStyleConfig={initialMapStyleConfig}>
          {Story()}
        </MapCanvasProvider>
      </Box>
    ),
  ],
  argTypes: {
    theme: {
      control: "select",
      options: UIThemeSchema.options,
    },
    selected: {
      control: "multi-select",
      options: [],
    },
    attributionControl: {
      control: "boolean",
    },
  },
  args: partialArgs,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const WithMarkers: Story = {
  args: {
    markers: [ARGA_ATTACK, BOULAY_ATTACK] as ResultMarker[],
  },
};

export const WithPolygons: Story = {
  args: {
    geoPolygons: { type: "FeatureCollection", features: [AUSTRIA, MOLDOVA] },
  },
};

export const WithPolygonsAndMarkers: Story = {
  args: {
    markers: [ARGA_ATTACK, BOULAY_ATTACK],
    geoPolygons: { type: "FeatureCollection", features: [AUSTRIA, MOLDOVA] },
  },
};

export const SelectedMarker: Story = {
  args: {
    markers: [ARGA_ATTACK, BOULAY_ATTACK],
    geoPolygons: { type: "FeatureCollection", features: [AUSTRIA, MOLDOVA] },
    selected: [ARGA_ATTACK.uri],
  },
};
