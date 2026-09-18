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

jest.mock("./interactions/addPanToFeature", () => ({
	getFeaturesById: jest.fn(() => []),
	fitToFeature: jest.fn(),
	fitToFeatures: jest.fn(),
}));

import React from "react";
import { render, act, waitFor } from "@testing-library/react";
import { BasicMapV2 } from "./BasicMap";
import { MapCanvasV2 } from "../../primitives/MapCanvas/MapCanvas";
import { LayerSelectorV2 } from "../../primitives/LayerSelector/LayerSelector";
import { BasicMapProperties, BasicMapV2Handle } from "../../types/map-types";
import { LayerConfig, OverlayVectorLayerConfig } from "../../types/layers";
import { ensureLayers } from "../../utils/ensureLayers";
import {
	getFeaturesById,
	fitToFeature,
	fitToFeatures,
} from "./interactions/addPanToFeature";
import { mapLegacyConfigToLayers } from "../../utils/legacy";
import { MARKER_LAYER_ID, PATH_LAYER_ID } from "../../utils/layers";
import { PathFeature } from "../../types/paths";
import { MalformedFeatureError } from "../../utils/errors";


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

	it("applies pathStyle to the live path layer", async () => {
		const pathStyleFn = jest.fn();
		const pathLayer = makeMockLayer(PATH_LAYER_ID);
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([pathLayer]));

		await act(async () => {
			render(
				<BasicMapV2
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={[]}
					pathStyle={pathStyleFn}
				/>
			);
		});

		expect(pathLayer.setStyle).toHaveBeenCalledWith(pathStyleFn);
	});

	it("falls back to the default overlay style when pathStyle is omitted", async () => {
		const pathLayer = makeMockLayer(PATH_LAYER_ID);
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([pathLayer]));

		await act(async () => {
			render(
				<BasicMapV2
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={[]}
				/>
			);
		});

		expect(pathLayer.setStyle).toHaveBeenCalledTimes(1);
		expect(pathLayer.setStyle).not.toHaveBeenCalledWith(undefined);
	});

	it("keeps pathStyle out of the layer configs so a new style identity does not rebuild layers", async () => {
		const pathLayer = makeMockLayer(PATH_LAYER_ID);
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([pathLayer]));

		const styleA = jest.fn();
		const styleB = jest.fn();

		const { rerender } = render(
			<BasicMapV2 zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} pathStyle={styleA} />
		);
		await waitFor(() => expect(pathLayer.setStyle).toHaveBeenCalledWith(styleA));

		const configs = (ensureLayers as jest.Mock).mock.calls[0][0] as LayerConfig[];
		const pathLayerConfig = configs.find(
			(c): c is OverlayVectorLayerConfig =>
				c.kind === "overlay-vector" && c.id === PATH_LAYER_ID
		);
		expect(pathLayerConfig).toBeDefined();
		// The config carries the default path style so a styled path draws
		// correctly on the first frame. What it must never carry is props.pathStyle
		// itself, which would put a new function identity into the config on every
		// render and rebuild every layer.
		expect(pathLayerConfig!.style).toBeDefined();
		expect(pathLayerConfig!.style).not.toBe(styleA);

		const rebuildsBefore = (ensureLayers as jest.Mock).mock.calls.length;

		// A fresh function identity each render is the case that used to spin.
		rerender(
			<BasicMapV2 zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} pathStyle={styleB} />
		);
		await waitFor(() => expect(pathLayer.setStyle).toHaveBeenLastCalledWith(styleB));

		expect((ensureLayers as jest.Mock).mock.calls.length).toBe(rebuildsBefore);
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
		setStyle: jest.fn(),
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

	it("rejects an out-of-range opacity instead of clamping it", async () => {
		const mockLayer = makeMockLayer("osm");
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([mockLayer]));

		const ref = React.createRef<BasicMapV2Handle>();

		await act(async () => {
			render(
				<BasicMapV2 ref={ref} zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} />
			);
		});

		// 50 is the percentage-for-fraction slip. Clamping it to 1 would leave a
		// permanently wrong-looking map with no indication of why.
		expect(() => ref.current!.setLayerOpacity("osm", 50)).toThrow();
		expect(() => ref.current!.setLayerOpacity("osm", -0.5)).toThrow();
		expect(mockLayer.getOpacity()).toBe(1);
	});

	it("rejects NaN and Infinity, which TypeScript cannot exclude from number", async () => {
		const mockLayer = makeMockLayer("osm");
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([mockLayer]));

		const ref = React.createRef<BasicMapV2Handle>();

		await act(async () => {
			render(
				<BasicMapV2 ref={ref} zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} />
			);
		});

		expect(() => ref.current!.setLayerOpacity("osm", NaN)).toThrow();
		expect(() => ref.current!.setLayerOpacity("osm", Infinity)).toThrow();
		expect(mockLayer.getOpacity()).toBe(1);
	});

	it("rejects a bad opacity on the layers prop during render", () => {
		const badLayer = {
			id: "osm",
			kind: "base-raster" as const,
			previewImage: "",
			label: "OSM",
			// 50 reads as a percentage; OpenLayers wants a 0-1 fraction.
			opacity: 50 as number,
		};

		const spy = jest.spyOn(console, "error").mockImplementation(() => undefined);
		expect(() =>
			render(
				<BasicMapV2 zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} layers={[badLayer]} />
			)
		).toThrow();
		spy.mockRestore();
	});

	it("accepts a valid opacity on the layers prop", async () => {
		const goodLayer = {
			id: "osm",
			kind: "base-raster" as const,
			previewImage: "",
			label: "OSM",
			opacity: 0.4,
		};
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([makeMockLayer("osm")]));

		await act(async () => {
			render(
				<BasicMapV2 zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} layers={[goodLayer]} />
			);
		});

		const configs = (ensureLayers as jest.Mock).mock.calls[0][0] as LayerConfig[];
		expect(configs[0]).toMatchObject({ id: "osm", opacity: 0.4 });
	});

	it("accepts the documented 0-1 range", async () => {
		const mockLayer = makeMockLayer("osm");
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([mockLayer]));

		const ref = React.createRef<BasicMapV2Handle>();

		await act(async () => {
			render(
				<BasicMapV2 ref={ref} zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} />
			);
		});

		act(() => { ref.current!.setLayerOpacity("osm", 0); });
		expect(mockLayer.getOpacity()).toBe(0);

		act(() => { ref.current!.setLayerOpacity("osm", 0.3); });
		expect(mockLayer.getOpacity()).toBe(0.3);

		act(() => { ref.current!.setLayerOpacity("osm", 1); });
		expect(mockLayer.getOpacity()).toBe(1);
	});
});

const makeMockVectorLayer = (id: string) => {
	const source = {
		clear: jest.fn(),
		addFeatures: jest.fn(),
		getFeatures: () => [],
	};
	const props: Record<string, unknown> = { id };
	return {
		layer: {
			get: (key: string) => props[key],
			set: (key: string, val: unknown) => { props[key] = val; },
			getSource: () => source,
			setStyle: jest.fn(),
			setOpacity: jest.fn(),
		},
		source,
	};
};

describe("BasicMapV2 error handling", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		// Default so a test that doesn't care about layers still gets past the
		// layer effects; tests that assert on sources override it.
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([]));
		// resetMocks: true in jest.config.cjs wipes the module factory, so the
		// stand-in has to be re-installed here. It must populate mapInstanceRef
		// or the effect that fills the sources early-returns.
		(MapCanvasV2 as unknown as jest.Mock).mockImplementation(
			(canvasProps: { mapInstanceRef?: { current: unknown } }) => {
				if (canvasProps?.mapInstanceRef) {
					canvasProps.mapInstanceRef.current =
						canvasProps.mapInstanceRef.current ?? {};
				}
				return <div id="map-canvas" />;
			}
		);
	});

	const malformedPath = {
		// number[] where the declared LineString needs number[][]
		id: "bad-path",
		type: "LineString",
		name: "Bad",
		coordinates: [0, 0],
	} as unknown as PathFeature;

	const goodPath: PathFeature = {
		id: "good-path",
		type: "LineString",
		name: "Good",
		coordinates: [
			[0, 0],
			[1, 1],
		],
	};

	it("reports a malformed path to onError instead of throwing", async () => {
		const onError = jest.fn();

		await act(async () => {
			render(
				<BasicMapV2
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={[malformedPath]}
					onError={onError}
				/>
			);
		});

		expect(onError).toHaveBeenCalledTimes(1);
		const reported = onError.mock.calls[0][0];
		expect(reported).toBeInstanceOf(MalformedFeatureError);
		expect((reported as MalformedFeatureError).featureId).toBe("bad-path");
	});

	it("reports a null vertex instead of taking the map down", async () => {
		// The converters only check the nesting of the first coordinate. A null
		// vertex further in makes OpenLayers throw a bare TypeError, which is the
		// ordinary shape of a bad record from an API adapter.
		const nullVertexPath = {
			id: "null-vertex",
			type: "LineString",
			name: "Null vertex",
			coordinates: [[0, 0], null],
		} as unknown as PathFeature;
		const onError = jest.fn();

		await act(async () => {
			render(
				<BasicMapV2
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={[nullVertexPath]}
					onError={onError}
				/>
			);
		});

		expect(onError).toHaveBeenCalledTimes(1);
		const reported = onError.mock.calls[0][0];
		expect(reported).toBeInstanceOf(MalformedFeatureError);
		expect((reported as MalformedFeatureError).featureId).toBe("null-vertex");
	});

	it("still adds the features that parsed", async () => {
		const marker = makeMockVectorLayer(MARKER_LAYER_ID);
		const path = makeMockVectorLayer(PATH_LAYER_ID);
		(ensureLayers as jest.Mock).mockReturnValue(
			Promise.resolve([marker.layer, path.layer])
		);
		const onError = jest.fn();

		await act(async () => {
			render(
				<BasicMapV2
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={[malformedPath, goodPath]}
					onError={onError}
				/>
			);
		});

		// One bad record out of two costs that record, not the map.
		expect(onError).toHaveBeenCalledTimes(1);
		const added = (path.source.addFeatures as jest.Mock).mock.calls[0][0];
		expect(added).toHaveLength(1);
	});

	it("reports the same malformed feature only once across re-renders", async () => {
		const onError = jest.fn();
		const paths = [malformedPath];

		let rerender: (ui: React.ReactElement) => void = () => undefined;
		await act(async () => {
			({ rerender } = render(
				<BasicMapV2
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={paths}
					onError={onError}
				/>
			));
		});

		expect(onError).toHaveBeenCalledTimes(1);

		// A fresh array identity each render is what a parent building the list
		// inline produces. The same broken record must not re-report forever.
		await act(async () => {
			rerender(
				<BasicMapV2
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={[malformedPath]}
					onError={onError}
				/>
			);
		});

		expect(onError).toHaveBeenCalledTimes(1);
	});

	it("tells onLayersReady the map is not ready when layer setup fails", async () => {
		// Without this an app that spins until onLayersReady(true) spins forever:
		// the failure only reached onError.
		(ensureLayers as jest.Mock).mockReturnValue(
			Promise.reject(new Error("ensureLayers boom"))
		);
		const consoleError = jest
			.spyOn(console, "error")
			.mockImplementation(() => undefined);
		const onLayersReady = jest.fn();

		await act(async () => {
			render(
				<BasicMapV2
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={[]}
					onError={jest.fn()}
					onLayersReady={onLayersReady}
				/>
			);
		});

		expect(onLayersReady).toHaveBeenCalledWith(false);
		consoleError.mockRestore();
	});

	it("reports an unknown layer id from setLayerOpacity", async () => {
		// A typo in the id used to do nothing at all, which was indistinguishable
		// from layers that had not resolved yet.
		const marker = makeMockVectorLayer(MARKER_LAYER_ID);
		(ensureLayers as jest.Mock).mockReturnValue(
			Promise.resolve([marker.layer])
		);
		const onError = jest.fn();
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
					onError={onError}
				/>
			);
		});

		act(() => {
			ref.current?.setLayerOpacity("no-such-layer", 0.5);
		});

		expect(onError).toHaveBeenCalledTimes(1);
		expect(onError.mock.calls[0][0].message).toContain("no-such-layer");
	});

	it("stays quiet when setLayerOpacity is called before the layers resolve", async () => {
		// Layers are empty until ensureLayers settles. A call that early is a
		// timing mistake, not a wrong id, so reporting it would cry wolf.
		let resolveLayers: (layers: unknown[]) => void = () => undefined;
		(ensureLayers as jest.Mock).mockReturnValue(
			new Promise((resolve) => {
				resolveLayers = resolve as (layers: unknown[]) => void;
			})
		);
		const onError = jest.fn();
		const ref = React.createRef<BasicMapV2Handle>();

		render(
			<BasicMapV2
				ref={ref}
				zoom={5}
				center={[0, 0]}
				markers={[]}
				polygons={[]}
				paths={[]}
				onError={onError}
			/>
		);

		act(() => {
			ref.current?.setLayerOpacity(MARKER_LAYER_ID, 0.5);
		});

		expect(onError).not.toHaveBeenCalled();

		await act(async () => {
			resolveLayers([makeMockVectorLayer(MARKER_LAYER_ID).layer]);
		});
	});

	it("reports a layer setup failure to onError", async () => {
		const failure = new Error("ensureLayers boom");
		(ensureLayers as jest.Mock).mockReturnValue(Promise.reject(failure));
		const consoleError = jest
			.spyOn(console, "error")
			.mockImplementation(() => undefined);
		const onError = jest.fn();
		const onRejection = jest.fn();
		process.on("unhandledRejection", onRejection);

		await act(async () => {
			render(
				<BasicMapV2
					zoom={5}
					center={[0, 0]}
					markers={[]}
					polygons={[]}
					paths={[]}
					onError={onError}
				/>
			);
		});

		await act(async () => { await Promise.resolve(); });
		process.off("unhandledRejection", onRejection);

		expect(onError).toHaveBeenCalledWith(failure);
		expect(consoleError).not.toHaveBeenCalled();
		expect(onRejection).not.toHaveBeenCalled();

		consoleError.mockRestore();
	});

	it("logs a layer setup failure when no onError is given", async () => {
		(ensureLayers as jest.Mock).mockReturnValue(
			Promise.reject(new Error("ensureLayers boom"))
		);
		const consoleError = jest
			.spyOn(console, "error")
			.mockImplementation(() => undefined);

		await act(async () => {
			render(
				<BasicMapV2 zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} />
			);
		});

		expect(consoleError).toHaveBeenCalledWith(
			"BasicMapV2: could not set up layers",
			expect.any(Error)
		);

		consoleError.mockRestore();
	});
});

describe("BasicMapV2 panToFeatures", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		(ensureLayers as jest.Mock).mockReturnValue(Promise.resolve([]));
		// resetMocks: true in jest.config.cjs wipes the module factory, so the
		// stand-in has to be re-installed here. It must populate mapInstanceRef
		// or every handle method early-returns with "Map is not ready yet".
		(MapCanvasV2 as unknown as jest.Mock).mockImplementation(
			(props: { mapInstanceRef?: { current: unknown } }) => {
				if (props?.mapInstanceRef) {
					props.mapInstanceRef.current = props.mapInstanceRef.current ?? {};
				}
				return <div id="map-canvas" />;
			}
		);
	});

	it("frames every requested feature, not just the first", async () => {
		// Regression: panToFeatures called the SINGULAR fitToFeature on
		// features[0], so "show me these results" flew the analyst to one
		// arbitrary result and left the rest off-screen.
		const f1 = { id: "a" };
		const f2 = { id: "b" };
		const f3 = { id: "c" };
		(getFeaturesById as jest.Mock).mockReturnValue([f1, f2, f3]);

		const ref = React.createRef<BasicMapV2Handle>();

		await act(async () => {
			render(
				<BasicMapV2 ref={ref} zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} />
			);
		});

		act(() => {
			ref.current!.panToFeatures(["a", "b", "c"]);
		});

		expect(fitToFeatures).toHaveBeenCalledTimes(1);
		expect(fitToFeatures).toHaveBeenCalledWith(expect.anything(), [f1, f2, f3]);
		expect(fitToFeature).not.toHaveBeenCalled();
	});

	it("does nothing when no features match", async () => {
		(getFeaturesById as jest.Mock).mockReturnValue([]);

		const ref = React.createRef<BasicMapV2Handle>();

		await act(async () => {
			render(
				<BasicMapV2 ref={ref} zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} />
			);
		});

		act(() => {
			ref.current!.panToFeatures(["missing"]);
		});

		expect(fitToFeatures).not.toHaveBeenCalled();
	});

	it("panToFeature still uses the singular fit for one id", async () => {
		const f1 = { id: "a" };
		(getFeaturesById as jest.Mock).mockReturnValue([f1]);

		const ref = React.createRef<BasicMapV2Handle>();

		await act(async () => {
			render(
				<BasicMapV2 ref={ref} zoom={5} center={[0, 0]} markers={[]} polygons={[]} paths={[]} />
			);
		});

		act(() => {
			ref.current!.panToFeature("a");
		});

		expect(fitToFeature).toHaveBeenCalledWith(expect.anything(), f1);
	});
});
