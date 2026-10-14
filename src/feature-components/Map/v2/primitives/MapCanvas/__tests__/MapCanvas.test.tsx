jest.mock("ol/control");

import { render, cleanup } from "@testing-library/react";
import { createMap } from "../../../utils/mapFactory";
import { addSelectInteraction } from "../../../composites/BasicMap/interactions/addSelectInteraction";
import { addHoverInteraction } from "../../../composites/BasicMap/interactions/addHoverInteraction";
import { findVectorLayerById } from "../../../utils/feature";
import { fitToFeature, fitToFeatures } from "../../../composites/BasicMap/interactions/addPanToFeature";
import { MapCanvasV2 } from "../MapCanvas";
import BaseLayer from "ol/layer/Base";
import { MARKER_LAYER_ID } from "../../../utils/layers";

jest.mock("../../../utils/mapFactory", () => ({
	createMap: jest.fn(),
}));

jest.mock("../../../utils/feature", () => ({
	findVectorLayerById: jest.fn(),
}));

jest.mock("../../../composites/BasicMap/interactions/addSelectInteraction", () => ({
	addSelectInteraction: jest.fn(),
}));

jest.mock("../../../composites/BasicMap/interactions/addHoverInteraction", () => ({
	addHoverInteraction: jest.fn(() => jest.fn()),
}));

jest.mock("../../../composites/BasicMap/interactions/addPanToFeature", () => ({
	fitToFeature: jest.fn(),
	fitToFeatures: jest.fn(),
}));

const defaultProps = {
	zoom: 1,
	center: [0, 0]
}

const markerSource = { hasFeature: () => true };
const mockMarkerLayer = { getSource: () => markerSource };

describe("MapCanvasV2", () => {
	let mockMapInstance: any;
	let mockFeature: any;

	beforeEach(() => {
		mockMapInstance = {
			getLayers: jest.fn(() => []),
			removeInteraction: jest.fn(),
			setTarget: jest.fn(),
			getLayerGroup: jest.fn(() => ({
				setLayers: jest.fn()
			}))
		};
		(createMap as jest.Mock).mockReturnValue(mockMapInstance);

		mockFeature = { getId: jest.fn(() => "feature1") };
	});

	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it("renders map container even if layers is empty", () => {
		const { container } = render(
			<MapCanvasV2 layers={[]} mapInstanceRef={{ current: null }} {...defaultProps} />
		);

		const mapDiv = container.querySelector("#TelicentMap");
		expect(mapDiv).toBeTruthy();
	});

	it("creates map and sets mapInstanceRef", () => {
		const mapRef = { current: null } as any;
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];
		render(<MapCanvasV2 layers={layers} mapInstanceRef={mapRef} {...defaultProps} />);

		expect(createMap).toHaveBeenCalled();
		expect(mapRef.current).toBe(mockMapInstance);
	});

	it("binds select and hover to the polygon and path layers, not just markers", () => {
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];

		(findVectorLayerById as jest.Mock).mockImplementation(
			(_layers: unknown, id: string) => `mock:${id}`
		);
		(addSelectInteraction as jest.Mock).mockReturnValue("mockInteraction");

		render(
			<MapCanvasV2
				layers={layers}
				mapInstanceRef={{ current: null }}
				onFeatureHover={jest.fn()}
				{...defaultProps}
			/>
		);

		const selectArgs = (addSelectInteraction as jest.Mock).mock.calls[0][0];
		expect(selectArgs.layers).toEqual([
			"mock:marker-layer",
			"mock:polygon-layer",
			"mock:path-layer",
		]);

		const hoverArgs = (addHoverInteraction as jest.Mock).mock.calls[0][0];
		expect(hoverArgs.layers).toEqual([
			"mock:marker-layer",
			"mock:polygon-layer",
			"mock:path-layer",
		]);
	});

	it("omits an overlay layer that is not present", () => {
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];

		(findVectorLayerById as jest.Mock).mockImplementation(
			(_layers: unknown, id: string) =>
				id === "marker-layer" ? "mock:marker-layer" : undefined
		);
		(addSelectInteraction as jest.Mock).mockReturnValue("mockInteraction");

		render(
			<MapCanvasV2
				layers={layers}
				mapInstanceRef={{ current: null }}
				{...defaultProps}
			/>
		);

		const selectArgs = (addSelectInteraction as jest.Mock).mock.calls[0][0];
		expect(selectArgs.layers).toEqual(["mock:marker-layer"]);
	});

	it("calls addSelectInteraction and feature click callbacks", () => {
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];
		const onFeatureClick = jest.fn();

		(findVectorLayerById as jest.Mock).mockReturnValue(mockMarkerLayer);

		// Mock addSelectInteraction to immediately call onSelect
		(addSelectInteraction as jest.Mock).mockImplementation(({ onSelect }) => {
			onSelect([mockFeature]);
			return "mockInteraction";
		});

		render(
			<MapCanvasV2
				layers={layers}
				mapInstanceRef={{ current: null }}
				onFeatureClick={onFeatureClick}
				{...defaultProps}
			/>
		);

		expect(addSelectInteraction).toHaveBeenCalledWith(expect.objectContaining({
			map: mockMapInstance,
			layers: expect.arrayContaining([mockMarkerLayer]),
			onSelect: expect.any(Function),
		}));

		expect(fitToFeature).toHaveBeenCalledWith(mockMapInstance, mockFeature);
		expect(onFeatureClick).toHaveBeenCalledWith(["feature1"], undefined);
	});

	it("leaves the viewport alone when the clicked feature is not a marker", () => {
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];
		const onFeatureClick = jest.fn();

		(findVectorLayerById as jest.Mock).mockReturnValue({
			getSource: () => ({ hasFeature: () => false }),
		});

		(addSelectInteraction as jest.Mock).mockImplementation(({ onSelect }) => {
			onSelect([mockFeature]);
			return "mockInteraction";
		});

		render(
			<MapCanvasV2
				layers={layers}
				mapInstanceRef={{ current: null }}
				onFeatureClick={onFeatureClick}
				{...defaultProps}
			/>
		);

		expect(fitToFeature).not.toHaveBeenCalled();
		expect(fitToFeatures).not.toHaveBeenCalled();
		expect(onFeatureClick).toHaveBeenCalledWith(["feature1"], undefined);
	});

	it("forwards pixel from Select event through to onFeatureClick", () => {
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];
		const onFeatureClick = jest.fn();

		(findVectorLayerById as jest.Mock).mockReturnValue(mockMarkerLayer);
		(addSelectInteraction as jest.Mock).mockImplementation(({ onSelect }) => {
			onSelect([mockFeature], { pixel: [42, 84] });
			return "mockInteraction";
		});

		render(
			<MapCanvasV2
				layers={layers}
				mapInstanceRef={{ current: null }}
				onFeatureClick={onFeatureClick}
				{...defaultProps}
			/>
		);

		expect(onFeatureClick).toHaveBeenCalledWith(["feature1"], { pixel: [42, 84] });
	});

	it("wires onFeatureHover through addHoverInteraction when provided", () => {
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];
		const onFeatureHover = jest.fn();

		(findVectorLayerById as jest.Mock).mockReturnValue(mockMarkerLayer);

		render(
			<MapCanvasV2
				layers={layers}
				mapInstanceRef={{ current: null }}
				onFeatureHover={onFeatureHover}
				{...defaultProps}
			/>
		);

		expect(addHoverInteraction).toHaveBeenCalledWith(
			expect.objectContaining({
				map: mockMapInstance,
				layers: expect.arrayContaining([mockMarkerLayer]),
				onHover: onFeatureHover,
			})
		);
	});

	it("does not attach hover interaction when onFeatureHover is omitted", () => {
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];

		(findVectorLayerById as jest.Mock).mockReturnValue(mockMarkerLayer);

		render(
			<MapCanvasV2
				layers={layers}
				mapInstanceRef={{ current: null }}
				{...defaultProps}
			/>
		);

		expect(addHoverInteraction).not.toHaveBeenCalled();
	});

	it("handles multiple features correctly", () => {
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];
		const onFeatureClick = jest.fn();
		const feature2 = { getId: jest.fn(() => "feature2") };

		(findVectorLayerById as jest.Mock).mockReturnValue(mockMarkerLayer);
		(addSelectInteraction as jest.Mock).mockImplementation(({ onSelect }) => {
			onSelect([mockFeature, feature2]);
			return "mockInteraction";
		});

		render(
			<MapCanvasV2
				layers={layers}
				mapInstanceRef={{ current: null }}
				onFeatureClick={onFeatureClick}
				{...defaultProps}
			/>
		);

		expect(fitToFeatures).toHaveBeenCalledWith(mockMapInstance, [mockFeature, feature2]);
		expect(onFeatureClick).toHaveBeenCalledWith(["feature1", "feature2"], undefined);
	});

	it("removes select interaction on unmount", () => {
		const layers = [{ id: MARKER_LAYER_ID }] as unknown as BaseLayer[];

		(findVectorLayerById as jest.Mock).mockReturnValue(mockMarkerLayer);
		(addSelectInteraction as jest.Mock).mockReturnValue("mockInteraction");

		const { unmount } = render(
			<MapCanvasV2
				layers={layers}
				mapInstanceRef={{ current: mockMapInstance }}
				{...defaultProps}
			/>
		);

		unmount();

		expect(mockMapInstance.removeInteraction)
			.toHaveBeenCalledWith("mockInteraction");
	});

	it("detaches map target on unmount if map was created", () => {
		(createMap as jest.Mock).mockReturnValue(mockMapInstance);

		const { unmount } = render(
			<MapCanvasV2
				layers={[]}
				mapInstanceRef={{ current: null }}
				{...defaultProps}
			/>
		);

		unmount();

		expect(mockMapInstance.setTarget).toHaveBeenCalledWith(undefined);
	});

	it("logs debug message if no marker layer found", () => {
		console.debug = jest.fn();
		(findVectorLayerById as jest.Mock).mockReturnValue(undefined);

		render(<MapCanvasV2 layers={[{ id: "layer1" }] as unknown as BaseLayer[]} mapInstanceRef={{ current: null }} {...defaultProps} />);
		expect(console.debug).toHaveBeenCalledWith("No marker layer configured");
	});
});

