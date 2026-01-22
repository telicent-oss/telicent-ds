jest.mock("ol/control");

import { render, cleanup } from "@testing-library/react";
import { createMap } from "../../../utils/mapFactory";
import { addSelectInteraction } from "../../../composites/BasicMap/interactions/addSelectInteraction";
import { findVectorLayerById } from "../../../utils/feature";
import { panToFeature, panToFeatures } from "../../../composites/BasicMap/interactions/addPanToFeature";
import { MapCanvasV2 } from "../MapCanvas";
import BaseLayer from "ol/layer/Base";

jest.mock("../../../utils/mapFactory", () => ({
	createMap: jest.fn(),
}));

jest.mock("../../../utils/feature", () => ({
	findVectorLayerById: jest.fn(),
}));

jest.mock("../../../composites/BasicMap/interactions/addSelectInteraction", () => ({
	addSelectInteraction: jest.fn(),
}));

jest.mock("../../../composites/BasicMap/interactions/addPanToFeature", () => ({
	panToFeature: jest.fn(),
	panToFeatures: jest.fn(),
}));

const defaultProps = {
	zoom: 1,
	center: [0, 0]
}

describe("MapCanvasV2", () => {
	let mockMapInstance: any;
	let mockFeature: any;

	beforeEach(() => {
		mockMapInstance = {
			getLayers: jest.fn(() => []),
			removeInteraction: jest.fn(),
			setTarget: jest.fn(),
		};
		(createMap as jest.Mock).mockReturnValue(mockMapInstance);

		mockFeature = { getId: jest.fn(() => "feature1") };
	});

	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it("renders null if layers is empty", () => {
		const { container } = render(<MapCanvasV2 layers={[]} mapInstanceRef={{ current: null }} {...defaultProps} />);
		expect(container.firstChild).toBeNull();
	});

	it("creates map and sets mapInstanceRef", () => {
		const mapRef = { current: null } as any;
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];
		render(<MapCanvasV2 layers={layers} mapInstanceRef={mapRef} {...defaultProps} />);

		expect(createMap).toHaveBeenCalled();
		expect(mapRef.current).toBe(mockMapInstance);
	});

	it("calls addSelectInteraction and feature click callbacks", () => {
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];
		const onFeatureClick = jest.fn();

		(findVectorLayerById as jest.Mock).mockReturnValue("mockMarkerLayer");

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
			layer: "mockMarkerLayer",
			onSelect: expect.any(Function),
		}));

		expect(panToFeature).toHaveBeenCalledWith(mockMapInstance, mockFeature);
		expect(onFeatureClick).toHaveBeenCalledWith(["feature1"]);
	});

	it("handles multiple features correctly", () => {
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];
		const onFeatureClick = jest.fn();
		const feature2 = { getId: jest.fn(() => "feature2") };

		(findVectorLayerById as jest.Mock).mockReturnValue("mockMarkerLayer");
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

		expect(panToFeatures).toHaveBeenCalledWith(mockMapInstance, [mockFeature, feature2]);
		expect(onFeatureClick).toHaveBeenCalledWith(["feature1", "feature2"]);
	});

	it("cleans up interactions on unmount", () => {
		const layers = [{ id: "layer1" }] as unknown as BaseLayer[];
		(findVectorLayerById as jest.Mock).mockReturnValue("mockMarkerLayer");
		(addSelectInteraction as jest.Mock).mockReturnValue("mockInteraction");

		const { unmount } = render(<MapCanvasV2 layers={layers} mapInstanceRef={{ current: null }} {...defaultProps} />);
		unmount();

		expect(mockMapInstance.removeInteraction).toHaveBeenCalledWith("mockInteraction");
		expect(mockMapInstance.setTarget).toHaveBeenCalledWith(undefined);
	});

	it("logs debug message if no marker layer found", () => {
		console.debug = jest.fn();
		(findVectorLayerById as jest.Mock).mockReturnValue(undefined);

		render(<MapCanvasV2 layers={[{ id: "layer1" }] as unknown as BaseLayer[]} mapInstanceRef={{ current: null }} {...defaultProps} />);
		expect(console.debug).toHaveBeenCalledWith("No marker layer configured");
	});
});

