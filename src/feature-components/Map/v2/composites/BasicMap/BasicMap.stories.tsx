import { useRef, useState, useCallback } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react-vite";
import { BasicMapV2 } from "./BasicMap";
import { BasicMapProperties, BasicMapV2Handle } from "../../types/map-types";
import { LayerConfig } from "../../types/layers";
import { MarkerFeature } from "../../types/markers";
import { PathFeature } from "../../types/paths";
import { Stroke, Style } from "ol/style";
import { FeatureLike } from "ol/Feature";
import { MalformedFeatureError } from "../../utils/errors";
import {
	ErrorFallback,
	ErrorFallbackText,
	ErrorFallbackWrapper,
} from "../../../../../components/utils/ErrorFallback";


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
// markers and polygons are required; pass empty arrays for a bare map.
// LayerSelector is rendered automatically.
<BasicMapV2 zoom={5} center={[0, 0]} markers={[]} polygons={[]} />
\`\`\`

### Base layer shapes

Raster:
\`\`\`ts
{
  kind: "base-raster",
  provider: "xyz",        // "osm" | "xyz" | "wmts"
  url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  label: "OpenStreetMap",
  previewImage: "/images/street.png",
  visible: true,
}
\`\`\`

Vector tiles:
\`\`\`ts
{
  kind: "base-vector-tiles",
  provider: "mapbox",     // "mapbox" | "maptiler" | "arcgis" | "custom"
  url: "https://.../VectorTileServer",
  label: "ArcGIS Streets",
  accessToken: ARC_GIS_API_TOKEN,
  previewImage: "/images/satellite.png",
  visible: false,
}
\`\`\`

---

### Things to know

Feature ids are one namespace across \`markers\`, \`polygons\` and \`paths\`.
\`panToFeature\` and \`onFeatureClick\` key on the id alone, and the marker layer
is searched first, so an id reused across the three resolves to the marker.

A \`polygons\` or \`paths\` record whose \`coordinates\` contradict its \`type\` is
skipped and reported through \`onError\` as a \`MalformedFeatureError\` naming the
\`featureId\`. The rest of the map draws, so wire \`onError\` up: a map missing one
polygon looks like a complete one. Skipping does not cover \`markers\` -- a
marker that cannot be converted aborts that whole update, taking the polygons
and paths with it.

Clicking a marker flies the view to it. Clicking a polygon or a path reports
through \`onFeatureClick\` without moving the view. Changing the \`markers\`,
\`polygons\` or \`paths\` props still re-frames the view around everything drawn.

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

/** Markers, polygons and paths all report through the same event callbacks.
 * Look at which of the three moves the view. */
export const MarkerPolygonAndPathInteraction: Story = {
	args: {
		zoom: 6,
		center: [-1.5, 52.5],
		layers: baseLayers.map((l) => ({ ...l, visible: true })),
		markers: [
			{
				id: "marker-a",
				geohash: "gcpvj0",
				name: "Marker A (London)",
				style: { markerType: "pin", color: "#ff6600" },
			},
		],
		polygons: [
			{
				id: "polygon-a",
				type: "Polygon",
				name: "Polygon A (Midlands)",
				coordinates: [
					[
						[-2.8, 52.0],
						[-0.4, 52.0],
						[-0.4, 53.2],
						[-2.8, 53.2],
						[-2.8, 52.0],
					],
				],
				style: { color: "#cc0000", backgroundColor: "rgba(204,0,0,0.35)" },
			},
		],
		paths: [
			{
				id: "path-a",
				type: "LineString",
				name: "Path A (Bristol to Norwich)",
				coordinates: [
					[-2.6, 51.45],
					[-1.9, 52.48],
					[1.3, 52.63],
				],
				style: { color: "#00b3a4", width: 5 },
			},
		],
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
						push(line);
					}}
					onFeatureClick={(ids, event) => {
						const line = `click: [${ids.join(", ")}]` +
							(event ? ` @ [${event.pixel[0]}, ${event.pixel[1]}]` : "");
						push(line);
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						top: 8,
						right: 8,
						minWidth: 300,
						maxHeight: 260,
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
					<div style={{ color: "#ff9a4d" }}>
						Marker (orange pin): emits, and the map flies to it
					</div>
					<div style={{ color: "#ff6b6b" }}>
						Polygon (red): emits, and the viewport stays put
					</div>
					<div style={{ color: "#4fd1c5", marginBottom: 6 }}>
						Path (teal): emits, and the viewport stays put
					</div>
					{log.length === 0 && <div>Click or hover each one...</div>}
					{log.map((line, i) => (
						<div key={i}>{line}</div>
					))}
				</Box>
			</Box>
		);
	},
};

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

const movementTrailCoordinates: [number, number][] = [
	[-3.19, 55.95],
	[-2.24, 55.86],
	[-1.62, 54.98],
	[-1.29, 54.57],
	[-1.55, 53.80],
	[-1.47, 53.38],
	[-1.15, 52.95],
	[-1.09, 52.62],
	[-0.78, 52.04],
	[-0.46, 51.75],
	[-0.13, 51.51],
];

function interpolateColor(
	t: number
): { r: number; g: number; b: number } {
	return {
		r: Math.round(30 + 225 * t),
		g: Math.round(80 * (1 - t)),
		b: Math.round(220 * (1 - t) + 30),
	};
}

const movementTrailPaths: PathFeature[] = movementTrailCoordinates
	.slice(0, -1)
	.map((coord, i, arr) => {
		const t = i / (arr.length - 1);
		const { r, g, b } = interpolateColor(t);
		const opacity = 0.3 + 0.7 * t;
		const width = 2 + 4 * t;

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

// Drawing this markup pointing north breaks it: buildDirectionImage rotates by -π/2.
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

// Hoisted so the style function does not allocate a Style on each call.
const SELECTED_PATH_STYLE = new Style({
	stroke: new Stroke({ color: "#FF6600", width: 5 }),
});
const UNSELECTED_PATH_STYLE = new Style({
	stroke: new Stroke({ color: "#999999", width: 2 }),
});

const PathStyleFunctionDemo = () => {
	const [selected, setSelected] = useState<string | null>(null);

	const pathStyle = (feature: FeatureLike) =>
		feature.getId() === selected ? SELECTED_PATH_STYLE : UNSELECTED_PATH_STYLE;

	return (
		<Box sx={{ width: "100%", height: "100%" }}>
			<Stack direction="row" spacing={1} sx={{ p: 1, position: "absolute", zIndex: 10 }}>
				<Button variant="contained" size="small" onClick={() => setSelected("path-a")}>
					Select Route A
				</Button>
				<Button variant="contained" size="small" onClick={() => setSelected("path-b")}>
					Select Route B
				</Button>
				<Button variant="contained" size="small" onClick={() => setSelected(null)}>
					Clear selection
				</Button>
				<Box sx={{ alignSelf: "center", color: "#fff", pl: 1 }}>
					Selected: {selected ?? "none"}
				</Box>
			</Stack>
			<BasicMapV2
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

const mixedStylePaths: PathFeature[] = [
	{
		id: "path-a",
		type: "LineString",
		name: "Route A (pink)",
		style: { color: "#FF2D95", width: 4 },
		coordinates: [
			[-0.1278, 51.5074],
			[2.3522, 48.8566],
			[13.405, 52.52],
		],
	},
	{
		id: "path-b",
		type: "LineString",
		name: "Route B (blue)",
		style: { color: "#00AAFF", width: 4 },
		coordinates: [
			[-3.1883, 55.9533],
			[-1.6178, 54.9783],
			[-1.5491, 53.8008],
		],
	},
];

const PathStyleBeatsPerPathStyleDemo = () => {
	const [orangePath, setOrangePath] = useState<string | null>(null);
	const [pathStyleOn, setPathStyleOn] = useState(false);

	const pathStyle = (feature: FeatureLike) =>
		feature.getId() === orangePath ? SELECTED_PATH_STYLE : UNSELECTED_PATH_STYLE;

	return (
		<Box sx={{ width: "100%", height: "100%" }}>
			<Stack
				spacing={1}
				sx={{
					p: 1,
					m: 1,
					position: "absolute",
					zIndex: 10,
					color: "#fff",
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					borderRadius: 1,
				}}
			>
				<Stack direction="row" spacing={1} alignItems="center">
					<Button
						variant="contained"
						size="small"
						onClick={() => setPathStyleOn((on) => !on)}
					>
						{pathStyleOn ? "Remove pathStyle" : "Supply pathStyle"}
					</Button>
					<Box>
						pathStyle ={" "}
						{pathStyleOn
							? "a function (pink and blue are both overridden)"
							: "undefined (each path draws its own style)"}
					</Box>
				</Stack>

				<Stack
					direction="row"
					spacing={1}
					alignItems="center"
					sx={{ pl: 3, borderLeft: "2px solid rgba(255,255,255,0.4)" }}
				>
					<Button
						variant="contained"
						size="small"
						disabled={!pathStyleOn}
						onClick={() => setOrangePath("path-a")}
					>
						Set pathStyle orange: Route A (pink)
					</Button>
					<Button
						variant="contained"
						size="small"
						disabled={!pathStyleOn}
						onClick={() => setOrangePath("path-b")}
					>
						Set pathStyle orange: Route B (blue)
					</Button>
					<Button
						variant="contained"
						size="small"
						disabled={!pathStyleOn}
						onClick={() => setOrangePath(null)}
					>
						All grey
					</Button>
					<Box>orange: {orangePath ?? "none"}</Box>
				</Stack>
			</Stack>
			<BasicMapV2
				zoom={5}
				center={[2, 52]}
				layers={baseLayers}
				markers={[]}
				polygons={[]}
				paths={mixedStylePaths}
				pathStyle={pathStyleOn ? pathStyle : undefined}
			/>
		</Box>
	);
};

/** Toggles `pathStyle` on against two paths that carry their own `style`. */
// see pathStyle in map-types.ts
export const PathStyleBeatsPerPathStyle: Story = {
	render: () => <PathStyleBeatsPerPathStyleDemo />,
};

const malformedPath = {
	id: "bad-path",
	type: "LineString",
	name: "Malformed route",
	coordinates: [-0.1278, 51.5074],
} as unknown as PathFeature;

const goodPath: PathFeature = {
	id: "good-path",
	type: "LineString",
	name: "Intact route",
	style: { color: "#FF2D95", width: 4 },
	coordinates: [
		[-0.1278, 51.5074],
		[2.3522, 48.8566],
		[13.405, 52.52],
	],
};

const MalformedFeatureReportedDemo = () => {
	const [errors, setErrors] = useState<MalformedFeatureError[]>([]);
	const onError = useCallback((error: Error) => {
		if (error instanceof MalformedFeatureError) {
			setErrors((seen) => [...seen, error]);
		}
	}, []);

	return (
		<Stack sx={{ width: "100%", height: "100%" }}>
			<ErrorFallbackWrapper height={110}>
				<Stack spacing={0.5} alignItems="center">
					<ErrorFallbackText name="BasicMapV2" />
					<ErrorFallbackText message={`onError calls: ${errors.length}`} />
					{errors.map((error, index) => (
						<ErrorFallbackText
							key={`${error.featureId}-${index}`}
							message={`MalformedFeatureError, featureId: ${error.featureId}`}
						/>
					))}
				</Stack>
			</ErrorFallbackWrapper>
			<Box sx={{ flex: 1 }}>
				<BasicMapV2
					zoom={5}
					center={[2, 52]}
					layers={baseLayers}
					markers={[]}
					polygons={[]}
					paths={[malformedPath, goodPath]}
					onError={onError}
				/>
			</Box>
		</Stack>
	);
};

/** A malformed path is skipped and reported through `onError`.
 * Look at the panel count against the one path that still draws. */
export const MalformedFeatureReportedToOnError: Story = {
	render: () => <MalformedFeatureReportedDemo />,
};

const LayerSetupFailureDemo = () => {
	const [failure, setFailure] = useState<Error | null>(null);
	const onError = useCallback((error: Error) => setFailure(error), []);

	return (
		<Stack sx={{ width: "100%", height: "100%" }}>
			{failure && (
				<ErrorFallback
					name="BasicMapV2 layers"
					message={`onError: ${failure.message}`}
					height={96}
				/>
			)}
			<Box sx={{ flex: 1 }}>
				<BasicMapV2
					zoom={5}
					center={[0, 51]}
					layers={[{ kind: "not-a-real-kind" } as unknown as LayerConfig]}
					markers={[]}
					polygons={[]}
					paths={[]}
					onError={onError}
				/>
			</Box>
		</Stack>
	);
};

/** An unrecognised layer kind makes layer setup fail.
 * Look at the blank map behind the reported error. */
export const LayerSetupFailureReportsToOnError: Story = {
	render: () => <LayerSetupFailureDemo />,
};
