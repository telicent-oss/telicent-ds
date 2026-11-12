import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useMemo } from "react";

import type { BaseRasterLayerConfig } from "../../types/layers";
import { getBaseRasterLayer } from "../../utils/layers";
import { LayerSelectorV2 } from "./LayerSelector";

const baseLayerConfigs: BaseRasterLayerConfig[] = [
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

const meta: Meta<typeof LayerSelectorV2> = {
  title: "Component Library/Map/primitives/LayerSelectorV2",
  component: LayerSelectorV2,
  tags: ["map", "autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
### Overview
Standalone \`LayerSelectorV2\` — the base-layer picker normally rendered by
\`BasicMapV2\` or lifted into \`FloatingPanel.DraggablePanel\`'s \`menu\` slot
(see \`BasicMapV2 in FloatingPanel\`).

Needs at least two base layers to render — it returns \`null\` otherwise.

Button chrome follows \`theme.palette.background.paper\` /
\`text.primary\`; use the theme switcher to verify the light/dark flip.
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, bgcolor: "background.default" }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const WithRealLayers: React.FC = () => {
  const layers = useMemo(
    () => baseLayerConfigs.map(getBaseRasterLayer),
    []
  );
  return <LayerSelectorV2 layers={layers} />;
};

export const Default: Story = {
  render: () => <WithRealLayers />,
};
