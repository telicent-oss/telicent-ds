import React, { useRef } from "react";
import { Box } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { BasicMapV2 } from "./BasicMap";
import { BasicMapProperties, LayerConfig } from "../../types";

export const allArgs: BasicMapProperties = {
	zoom: 5,
	center: [0, 0],
	layers: [],
	mapStyleOptions: undefined
};

const partialArgs: Partial<BasicMapProperties> = allArgs;
// Example base layers
const baseLayers: LayerConfig[] = [
	{
		kind: "base-raster",
		provider: "xyz",
		label: "OpenStreetMap",
		url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
		previewImage: "/images/street.png",
		visible: false,
	},
];

const meta: Meta<typeof BasicMapV2> = {
	title: "Component Library/Map/composites/BasicMapV2",
	component: BasicMapV2,
	tags: ["map", "basic", "autodocs"],
	parameters: {
		docs: {
			description: {
				component: `
### Overview
BasicMapV2 is a React wrapper around OpenLayers that displays a map with selectable base layers and overlays. It integrates with the LayerSelector to let developers switch base layers without touching OpenLayers directly.

---

### Behaviour (intentional)
- **Single active base layer:** Only one base layer is visible at a time. This is the designed behaviour for base layers — overlays are intended to be independent and can be toggled on top of the selected base.

---

### Known limitations
- **View jumping / recentering:** Switching to certain base layers (notably some vector-tile sources) can cause the map view to change. This happens because some vector-tile styles or providers initialise layers with an extent or run internal fit logic.

- **Provider-specific behaviour:** Vector tile sources (Mapbox, MapTiler, ArcGIS, custom style JSON) may require an \`accessToken\` or a style URL. Some provider SDKs or style-application helpers (e.g. ol-mapbox-style) can perform extra initialisation that affects view or sublayers.
  - **Recommendation:** Use provider-appropriate config (provider field, styleUrl, accessToken) and test each provider in your target environment.

---

### Requirements
- Vector-tile providers often require credentials. Keep keys out of source code — supply via env/config.
- The first base layer in the supplied config is treated as the default visible layer. Set \`visible: true\` on the layer you want active initially (or programmatically set it before mounting).

---

### Quick usage
\`\`\`tsx
<BasicMapV2 zoom={5} center={[0,0]} />
// LayerSelector is rendered automatically by BasicMapV2
\`\`\`

This text documents the intended behaviour, the real limitations to watch for, and actionable workarounds so consumers of the component know exactly what to expect.
        `,
			},
		},
	},
	decorators: [
		(Story) => (
			<Box sx={{ width: "100vw", height: "100vh", margin: "auto" }}>
				{Story()}
			</Box>
		),
	],
	argTypes: {
	},
	args: partialArgs,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

// Story template
export const Template: Story = {
	args: {
		layers: baseLayers
	}
};


