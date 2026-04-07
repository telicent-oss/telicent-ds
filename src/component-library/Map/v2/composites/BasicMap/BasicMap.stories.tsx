import { useRef, useState, useCallback } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { BasicMapV2 } from "./BasicMap";
import { BasicMapProperties, BasicMapV2Handle } from "../../types/map-types";
import { LayerConfig } from "../../types/layers";
import { PathFeature } from "../../types/paths";
import { Stroke, Style } from "ol/style";
import { FeatureLike } from "ol/Feature";
import { PATH_LAYER_ID } from "../../utils/layers";


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
];

export const allArgs: BasicMapProperties = {
	zoom: 5,
	center: [0, 0],
	layers: baseLayers,
	mapStyleOptions: undefined,
	markers: [],
	polygons: [],
	paths: []
};

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
	args: allArgs,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Template: Story = {
	args: {
		layers: baseLayers
	}
};

const samplePaths: PathFeature[] = [
	{
		id: "path-1",
		type: "LineString",
		name: "Route A",
		coordinates: [
			[-0.1278, 51.5074],
			[2.3522, 48.8566],
			[13.405, 52.52],
		],
		style: {
			color: "#FF6600",
			width: 3,
		},
	},
	{
		id: "path-2",
		type: "LineString",
		name: "Route B (dashed)",
		coordinates: [
			[-3.1883, 55.9533],
			[-1.6178, 54.9783],
			[-1.5491, 53.8008],
		],
		style: {
			color: "#0066FF",
			width: 2,
			lineDash: [10, 5],
		},
	},
];

export const WithPaths: Story = {
	args: {
		layers: baseLayers,
		paths: samplePaths,
	},
};

export const WithMarkersAndPaths: Story = {
	args: {
		layers: baseLayers,
		markers: [],
		paths: samplePaths,
	},
};

// Edinburgh → London, hot (newest) → cold (oldest)
const movementTrailCoordinates: [number, number][] = [
	[-3.19, 55.95],   // Edinburgh
	[-2.24, 55.86],   // somewhere east
	[-1.62, 54.98],   // Newcastle
	[-1.29, 54.57],   // Durham
	[-1.55, 53.80],   // Leeds
	[-1.47, 53.38],   // Sheffield
	[-1.15, 52.95],   // Nottingham
	[-1.09, 52.62],   // Leicester
	[-0.78, 52.04],   // Northampton
	[-0.46, 51.75],   // NW of London
	[-0.13, 51.51],   // London
];

function interpolateColor(
	t: number
): { r: number; g: number; b: number } {
	// t: 0 (cold/blue) → 1 (hot/red)
	return {
		r: Math.round(30 + 225 * t),      // 30 → 255
		g: Math.round(80 * (1 - t)),       // 80 → 0
		b: Math.round(220 * (1 - t) + 30), // 250 → 30
	};
}

const movementTrailPaths: PathFeature[] = movementTrailCoordinates
	.slice(0, -1)
	.map((coord, i, arr) => {
		const t = i / (arr.length - 1); // 0 (oldest) → 1 (newest)
		const { r, g, b } = interpolateColor(t);
		const opacity = 0.3 + 0.7 * t;   // 0.3 → 1.0
		const width = 2 + 4 * t;         // 2 → 6

		return {
			id: `trail-${i}`,
			type: "LineString" as const,
			name: `Segment ${i + 1}`,
			coordinates: [coord, movementTrailCoordinates[i + 1]],
			style: {
				color: `rgba(${r}, ${g}, ${b}, ${opacity})`,
				width,
				lineCap: "round" as const,
				lineJoin: "round" as const,
			},
		};
	});

export const MovementTrail: Story = {
	args: {
		zoom: 6,
		center: [-1.5, 53.5],
		layers: baseLayers,
		paths: movementTrailPaths,
	},
};

// Omitting `marker` defaults to triangle.
const triangleDirectedPaths: PathFeature[] = [
	{
		id: "tri-1",
		type: "LineString",
		name: "London → Paris → Berlin",
		coordinates: [
			[-0.1278, 51.5074],
			[2.3522, 48.8566],
			[13.405, 52.52],
		],
		style: {
			color: "#FF6600",
			width: 3,
			direction: {
				marker: { type: "triangle" },
				color: "#FF6600",
				size: 12,
			},
		},
	},
	{
		id: "tri-2",
		type: "LineString",
		name: "Edinburgh → Newcastle → Leeds",
		coordinates: [
			[-3.1883, 55.9533],
			[-1.6178, 54.9783],
			[-1.5491, 53.8008],
		],
		style: {
			color: "#0066FF",
			width: 3,
			direction: {
				marker: { type: "triangle" },
				color: "#003399",
				size: 10,
			},
		},
	},
];

export const DirectionTriangle: Story = {
	args: {
		zoom: 5,
		center: [2, 52],
		layers: baseLayers,
		paths: triangleDirectedPaths,
	},
};

// SVG should point east at rest; OL rotates to match segment bearing.
const chevronSvg = [
	`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">`,
	`<path d="M8 4 L16 12 L8 20" fill="none" stroke="#FF6600" stroke-width="3"`,
	` stroke-linecap="round" stroke-linejoin="round"/>`,
	`</svg>`,
].join("");

const svgDirectedPaths: PathFeature[] = [
	{
		id: "svg-1",
		type: "LineString",
		name: "London → Paris → Berlin",
		coordinates: [
			[-0.1278, 51.5074],
			[2.3522, 48.8566],
			[13.405, 52.52],
		],
		style: {
			color: "#FF6600",
			width: 3,
			direction: {
				marker: { type: "svg", markup: chevronSvg },
				size: 16,
			},
		},
	},
];

export const DirectionSvg: Story = {
	args: {
		zoom: 5,
		center: [5, 51],
		layers: baseLayers,
		paths: svgDirectedPaths,
	},
};

const directedTrailPaths: PathFeature[] = movementTrailCoordinates
	.slice(0, -1)
	.map((coord, i, arr) => {
		const t = i / (arr.length - 1);
		const { r, g, b } = interpolateColor(t);
		const opacity = 0.3 + 0.7 * t;
		const width = 2 + 4 * t;
		const color = `rgba(${r}, ${g}, ${b}, ${opacity})`;

		return {
			id: `dtrail-${i}`,
			type: "LineString" as const,
			name: `Segment ${i + 1}`,
			coordinates: [coord, movementTrailCoordinates[i + 1]],
			style: {
				color,
				width,
				lineCap: "round" as const,
				lineJoin: "round" as const,
				direction: {
					marker: { type: "triangle" as const },
					color,
					size: 4 + 6 * t,
				},
			},
		};
	});

export const MovementTrailWithDirection: Story = {
	args: {
		zoom: 6,
		center: [-1.5, 53.5],
		layers: baseLayers,
		paths: directedTrailPaths,
	},
};

const dimmedBaseLayers: LayerConfig[] = [
	{
		id: "osm-dimmed",
		kind: "base-raster",
		provider: "xyz",
		label: "OpenStreetMap (dimmed)",
		url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
		previewImage: "/images/street.png",
		visible: true,
		opacity: 0.4,
	},
];

export const ConfigDrivenOpacity: Story = {
	args: {
		zoom: 5,
		center: [0, 0],
		layers: dimmedBaseLayers,
		paths: samplePaths,
	},
};

const RuntimeOpacityDemo = () => {
	const mapRef = useRef<BasicMapV2Handle>(null);

	return (
		<Box sx={{ width: "100%", height: "100%" }}>
			<Stack direction="row" spacing={1} sx={{ p: 1, position: "absolute", zIndex: 10 }}>
				<Button
					variant="contained"
					size="small"
					onClick={() => mapRef.current?.setLayerOpacity("osm", 0.3)}
				>
					Dim base layer
				</Button>
				<Button
					variant="contained"
					size="small"
					onClick={() => mapRef.current?.setLayerOpacity("osm", 1)}
				>
					Restore base layer
				</Button>
			</Stack>
			<BasicMapV2
				ref={mapRef}
				zoom={5}
				center={[0, 0]}
				layers={[
					{
						id: "osm",
						kind: "base-raster",
						provider: "xyz",
						label: "OpenStreetMap",
						url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
						previewImage: "/images/street.png",
						visible: true,
					},
				]}
				markers={[]}
				polygons={[]}
				paths={samplePaths}
			/>
		</Box>
	);
};

export const RuntimeOpacity: Story = {
	render: () => <RuntimeOpacityDemo />,
};

// Selection changes via ref, not paths[] rebuild — no fitToFeatures re-trigger.
const pathStylePaths: PathFeature[] = [
	{
		id: "path-a",
		type: "LineString",
		name: "Route A",
		coordinates: [
			[-0.1278, 51.5074],
			[2.3522, 48.8566],
			[13.405, 52.52],
		],
	},
	{
		id: "path-b",
		type: "LineString",
		name: "Route B",
		coordinates: [
			[-3.1883, 55.9533],
			[-1.6178, 54.9783],
			[-1.5491, 53.8008],
		],
	},
];

const PathStyleFunctionDemo = () => {
	const selectedRef = useRef<string | null>(null);
	const [selectedLabel, setSelectedLabel] = useState<string>("none");
	const mapRef = useRef<BasicMapV2Handle>(null);

	const pathStyle = useCallback(
		(feature: FeatureLike) => {
			const id = feature.getId?.() ?? feature.get?.("id");
			const isSelected = id === selectedRef.current;
			return new Style({
				stroke: new Stroke({
					color: isSelected ? "#FF6600" : "#999999",
					width: isSelected ? 5 : 2,
				}),
			});
		},
		[]
	);

	const select = (id: string | null) => {
		selectedRef.current = id;
		setSelectedLabel(id ?? "none");
		// Force OL to re-render styles
		const pathLayer = mapRef.current?.layers.find(
			(l) => l.get("id") === PATH_LAYER_ID
		);
		pathLayer?.changed();
	};

	return (
		<Box sx={{ width: "100%", height: "100%" }}>
			<Stack direction="row" spacing={1} sx={{ p: 1, position: "absolute", zIndex: 10 }}>
				<Button variant="contained" size="small" onClick={() => select("path-a")}>
					Select Route A
				</Button>
				<Button variant="contained" size="small" onClick={() => select("path-b")}>
					Select Route B
				</Button>
				<Button variant="outlined" size="small" onClick={() => select(null)}>
					Clear selection
				</Button>
				<Box sx={{ alignSelf: "center", color: "#fff", pl: 1 }}>
					Selected: {selectedLabel}
				</Box>
			</Stack>
			<BasicMapV2
				ref={mapRef}
				zoom={5}
				center={[2, 52]}
				layers={baseLayers}
				markers={[]}
				polygons={[]}
				paths={pathStylePaths}
				pathStyle={pathStyle}
			/>
		</Box>
	);
};

export const PathStyleFunction: Story = {
	render: () => <PathStyleFunctionDemo />,
};
