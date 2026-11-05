import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

import { FloatingPanelContext } from "../../../../../components/surfaces/FloatingPanel";
import type { LayerConfig } from "../../types/layers";
import { MapPanel } from "./MapPanel";

const baseLayers: LayerConfig[] = [
  {
    id: "OpenStreetMap",
    kind: "base-raster",
    provider: "xyz",
    label: "OpenStreetMap",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    previewImage: "/images/street.png",
    visible: true,
  },
  {
    id: "Satellite",
    kind: "base-raster",
    provider: "xyz",
    label: "Satellite",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    previewImage: "/images/satellite.png",
    visible: false,
  },
];

const meta: Meta<typeof MapPanel> = {
  title: "Component Library/Map/composites/MapPanel",
  component: MapPanel,
  tags: ["map", "panel", "autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
### Overview
\`MapPanel\` bundles \`FloatingPanel.DraggablePanel\` + \`BasicMapV2\` +
\`LayerSelectorV2\` (lifted into the panel's \`menu\` slot) — the composition
used in \`apps/graph/src/components/MapPanel/MapPanel.tsx\`.

### Requirements
Wrap the subtree in \`FloatingPanel.Provider\` so panel visibility state is
tracked.

### Theming
Panel chrome and the lifted LayerSelector button both read
\`theme.palette.background.paper\` / \`text.primary\` — flip the theme to
verify.
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <FloatingPanelContext.Provider
        value={{
          panels: { map: { visible: true, minimised: false } },
          toggleVisibility: () => {},
          get: () => false,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            bgcolor: "background.default",
          }}
        >
          <Story />
        </Box>
      </FloatingPanelContext.Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Map",
    targetId: "map",
    bounds: "parent",
    zoom: 5,
    center: [0, 0],
    layers: baseLayers,
    markers: [],
    polygons: [],
  },
};

export const WithCount: Story = {
  args: {
    ...Default.args,
    title: "Map",
    count: 42,
  },
};
