// src/components/BasicMap/BasicMap.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import BasicMap, { BasicMapProps } from "./BasicMap";
import { Box } from "@mui/material";
import { ARGA_ATTACK, BOULAY_ATTACK } from "../sampleData/markers";
import { AUSTRIA, MOLDOVA } from "../sampleData";

import { DEFAULT_VIEW, DEFAULT_GEO_POLYGONS } from "../constants";
import { ResultMarker } from "../ResultsMarkers";
import { UIThemeSchema } from "../../../export";
import { layerStyles, SUPER_OBVIOUS_POLYGON_LAYERS } from "../MapCanvas/storyconfig";

const meta: Meta<typeof BasicMap> = {
  title: "Component Library/BasicMap",
  component: BasicMap,
  tags: ["map", "basic"],
  decorators: [
    (Story) => (
      <Box sx={{ width: "100vw", height: "100vh", margin: "auto" }}>
        {Story()}
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
  args: {
    theme: "DocumentPink",
    mapStyleOptions: layerStyles,
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
  },
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
