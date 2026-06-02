jest.mock("ol/Map", () => jest.fn());
jest.mock("ol/layer/Base", () => jest.fn());

jest.mock("../../primitives/MapCanvas/MapCanvas", () => ({
	MapCanvasV2: jest.fn(() => <div id="map-canvas" />)
}));

jest.mock("../../primitives/LayerSelector/LayerSelector", () => ({
	LayerSelectorV2: jest.fn(() => <div id="layer-selector" />)
}));

jest.mock("../../utils/ensureLayers", () => ({
	ensureLayers: jest.fn(() => Promise.resolve([])),
}));

import React from "react";
import { render, act, waitFor } from "@testing-library/react";
import { BasicMapV2 } from "./BasicMap";
import { MapCanvasV2 } from "../../primitives/MapCanvas/MapCanvas";
import { LayerSelectorV2 } from "../../primitives/LayerSelector/LayerSelector";
import { BasicMapProperties, BasicMapV2Handle } from "../../types/map-types";
import { LayerConfig, OverlayVectorLayerConfig } from "../../types/layers";
import { ensureLayers } from "../../utils/ensureLayers";
import { mapLegacyConfigToLayers } from "../../utils/legacy";
import { PATH_LAYER_ID } from "../../utils/layers";


const makeProps = (overrides?: Partial<BasicMapProperties>): BasicMapProperties => ({
	zoom: 5,
	center: [0, 0],
	...overrides,
	markers: [],
	polygons: [],
	paths: []
});

// Do I still need this if I have tested the children separately.
// Perhaps I need to just test how features and polygons end up.
describe.skip("BasicMapV2", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders MapCanvasV2 and LayerSelector", () => {
		render(<BasicMapV2 zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} />);

		expect(MapCanvasV2).toHaveBeenCalled();
		expect(LayerSelectorV2).toHaveBeenCalled();
	});

	it("calls ensureLayers with effectiveLayers", () => {
		const darkModeLayer: LayerConfig = {
			id: "Streets",
			kind: "base-vector-tiles",
			provider: "mapbox",
			url: "https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/arcgis/streets-night?token=<TOKEN_HERE>",
			visible: true,
			previewImage: "imagehash",
			label: "Streets"
		};

		const props = makeProps({ layers: [darkModeLayer] })
		render(<BasicMapV2 {...props} />);
		expect(ensureLayers).toHaveBeenCalled();
	});

	it("calls mapLegacyConfigToLayers when mapStyleOptions are provided", () => {
		const mapStyleOption = {
			vectorStyles: {
				label: 'default',
				uri: "http://gohere.com",
				image: "imagehash",
			},
		}

		const props = makeProps({ mapStyleOptions: mapStyleOption })
		render(<BasicMapV2 {...props} />);
		expect(mapLegacyConfigToLayers).toHaveBeenCalled();
	});
});

describe("BasicMapV2 pathStyle", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("passes pathStyle to the path overlay-vector layer config", () => {
		const pathStyleFn = jest.fn();

		const { unmount } = render(
			<BasicMapV2
				zoom={5}
				center={[0, 0]}
				markers={[]}
				polygons={[]}
				paths={[]}
				pathStyle={pathStyleFn}
			/>
		);

		expect(ensureLayers).toHaveBeenCalled();
		const configs = (ensureLayers as jest.Mock).mock.calls[0][0] as LayerConfig[];
		const pathLayerConfig = configs.find(
			(c): c is OverlayVectorLayerConfig =>
				c.kind === "overlay-vector" && c.id === PATH_LAYER_ID
		);

		expect(pathLayerConfig).toBeDefined();
		expect(pathLayerConfig!.style).toBe(pathStyleFn);
		unmount();
	});

	it("does not set style on path layer when pathStyle is omitted", () => {
		const { unmount } = render(
			<BasicMapV2
				zoom={5}
				center={[0, 0]}
				markers={[]}
				polygons={[]}
				paths={[]}
			/>
		);

		const configs = (ensureLayers as jest.Mock).mock.calls[0][0] as LayerConfig[];
		const pathLayerConfig = configs.find(
			(c): c is OverlayVectorLayerConfig =>
				c.kind === "overlay-vector" && c.id === PATH_LAYER_ID
		);

		expect(pathLayerConfig).toBeDefined();
		expect(pathLayerConfig!.style).toBeUndefined();
		unmount();
	});
});

const makeMockLayer = (id: string) => {
	let opacity = 1;
	const props: Record<string, unknown> = { id };
	return {
		get: (key: string) => props[key],
		set: (key: string, val: unknown) => { props[key] = val; },
		setOpacity: (v: number) => { opacity = v; },
		getOpacity: () => opacity,
		setVisible: jest.fn(),
		getVisible: () => true,
		setZIndex: jest.fn(),
		getZIndex: () => 0,
		setDeclutter: jest.fn(),
		getSource: () => ({ clear: jest.fn(), addFeatures: jest.fn(), getFeatures: () => [] }),
		changed: jest.fn(),
	};
};

describe("BasicMapV2 setLayerOpacity", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("sets opacity on a matching layer", async () => {
		const mockLayer = makeMockLayer("osm");
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([mockLayer]));

		const ref = React.createRef<BasicMapV2Handle>();

		await act(async () => {
			render(
				<BasicMapV2
					ref={ref}
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={[]}
				/>
			);
		});

		act(() => {
			ref.current!.setLayerOpacity("osm", 0.4);
		});

		expect(mockLayer.getOpacity()).toBe(0.4);
	});

	it("no-ops when layer id does not match", async () => {
		const mockLayer = makeMockLayer("osm");
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([mockLayer]));

		const ref = React.createRef<BasicMapV2Handle>();

		await act(async () => {
			render(
				<BasicMapV2
					ref={ref}
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={[]}
				/>
			);
		});

		act(() => {
			ref.current!.setLayerOpacity("nonexistent", 0.5);
		});

		expect(mockLayer.getOpacity()).toBe(1);
	});

	it("clamps opacity to 0–1 range", async () => {
		const mockLayer = makeMockLayer("osm");
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([mockLayer]));

		const ref = React.createRef<BasicMapV2Handle>();

		await act(async () => {
			render(
				<BasicMapV2
					ref={ref}
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={[]}
				/>
			);
		});

		act(() => { ref.current!.setLayerOpacity("osm", -0.5); });
		expect(mockLayer.getOpacity()).toBe(0);

		act(() => { ref.current!.setLayerOpacity("osm", 1.5); });
		expect(mockLayer.getOpacity()).toBe(1);
	});
});
