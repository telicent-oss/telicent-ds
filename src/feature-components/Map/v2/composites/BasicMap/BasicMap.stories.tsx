import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react-vite";
import { BasicMapV2 } from "./BasicMap";
import { BasicMapProperties } from "../../types/map-types";
import { LayerConfig } from "../../types/layers";
import { MarkerFeature } from "../../types/markers";


export const allArgs: BasicMapProperties = {
	zoom: 5,
	center: [0, 0],
	layers: [],
	mapStyleOptions: undefined,
	markers: [],
	polygons: []
};

const partialArgs: Partial<BasicMapProperties> = allArgs;
// Example base layers
const baseLayers: LayerConfig[] = [
	{
		id: "OpenStreetMap",
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

const eventMarkers: MarkerFeature[] = [
	{
		id: "marker-a",
		geohash: "gcpvj0",
		name: "Marker A (London)",
		style: { markerType: "pin", color: "#ff6600" },
	},
	{
		id: "marker-b",
		geohash: "u09tvw",
		name: "Marker B (Paris)",
		style: { markerType: "pin", color: "#0066ff" },
	},
];

/**
 * Both `onFeatureHover` and `onFeatureClick` are wired to a debug panel that
 * shows the raw id + pixel the DS emits. Callback contract:
 *
 * - `onFeatureHover(id, { pixel })` fires when the pointer enters a marker.
 * - `onFeatureHover(null)` fires when the pointer leaves the last-hovered
 *   marker (no pixel is included).
 * - Moving the pointer **within** the same marker does not re-fire.
 * - Moving directly from marker A to marker B fires once, with B's id and
 *   pixel — the id change implicitly signals A is no longer hovered.
 *
 * The DS emits events only. The consuming app owns any popover / cursor /
 * highlight / throttling behaviour built on top of these events.
 */
export const FeatureEvents: Story = {
	args: {
		zoom: 5,
		center: [2, 49],
		layers: baseLayers.map((l) => ({ ...l, visible: true })),
		markers: eventMarkers,
		polygons: [],
	},
	render: (args) => {
		const [log, setLog] = useState<string[]>([]);
		const push = (line: string) =>
			setLog((prev) => [line, ...prev].slice(0, 12));

		return (
			<Box sx={{ position: "relative", width: "100%", height: "100%" }}>
				<BasicMapV2
					{...args}
					onFeatureHover={(id, event) => {
						const line = id === null
							? "hover: null"
							: `hover: ${id} @ [${event?.pixel[0]}, ${event?.pixel[1]}]`;
						console.log(line);
						push(line);
					}}
					onFeatureClick={(ids, event) => {
						const line = `click: [${ids.join(", ")}]` +
							(event ? ` @ [${event.pixel[0]}, ${event.pixel[1]}]` : "");
						console.log(line);
						push(line);
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						top: 8,
						right: 8,
						minWidth: 260,
						maxHeight: 220,
						overflow: "auto",
						padding: 1,
						background: "rgba(0,0,0,0.75)",
						color: "#fff",
						font: "12px/1.4 monospace",
						borderRadius: 1,
						zIndex: 10,
						pointerEvents: "none",
					}}
				>
					<div style={{ fontWeight: 600, marginBottom: 4 }}>
						Feature events (newest first)
					</div>
					{log.length === 0 && <div>Hover or click a marker…</div>}
					{log.map((line, i) => (
						<div key={i}>{line}</div>
					))}
				</Box>
			</Box>
		);
	},
};


