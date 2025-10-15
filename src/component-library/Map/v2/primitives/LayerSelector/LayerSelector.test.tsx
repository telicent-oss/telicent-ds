// LayerSelector.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
	LayerSelector,
	LayerSelectorPresentationalButton,
	LayerSelectorPresentationalPopOverV2,
} from "./LayerSelector";
import { getMeta } from "../../utils/layers";

// --- Mock getMeta ---
jest.mock("../../utils/layers", () => ({
	getMeta: jest.fn(),
}));

// --- Mock BaseLayer class ---
export class MockLayer {
	private props: Record<string, any> = {};

	constructor(initial?: Record<string, any>) {
		if (initial) Object.assign(this.props, initial);
	}

	get(key: string) {
		return this.props[key];
	}

	set(key: string, val: any) {
		this.props[key] = val;
	}

	setVisible = jest.fn();
}

describe("LayerSelector components", () => {
	let layersMock: MockLayer[];

	beforeEach(() => {
		layersMock = [
			new MockLayer({ kind: "baseLayer", meta: { label: "Layer 1", image: "img1.png", visible: true } }),
			new MockLayer({ kind: "baseLayer", meta: { label: "Layer 2", image: "img2.png", visible: true } })
		];

		// mock getMeta
		(getMeta as jest.Mock).mockImplementation((layer: any) => {
			const meta = [
				{ label: "Layer 1", image: "img1.png", visible: true },
				{ label: "Layer 2", image: "img2.png", visible: false },
			];
			const index = layersMock.indexOf(layer);
			return meta[index];
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	// --- Presentational Button ---
	it("LayerSelectorPresentationalButton renders correctly", () => {
		render(
			<LayerSelectorPresentationalButton
				data={layersMock as any}
				selectedIndex={0}
				anchorEl={null}
				onClickDropdown={jest.fn()}
				variant="text"
			/>
		);

		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();

		const img = button.querySelector("img");
		expect(img).toHaveAttribute("src", "img1.png");
	});

	// --- Presentational PopOver ---
	it("LayerSelectorPresentationalPopOverV2 renders items and handles clicks", () => {
		const handleClick = jest.fn();

		render(
			<LayerSelectorPresentationalPopOverV2
				data={layersMock as any}
				selectedIndex={0}
				anchorEl={document.createElement("button")}
				onCloseDropdown={jest.fn()}
				onListItemClick={handleClick}
			/>
		);

		const buttons = screen.getAllByRole("button");
		expect(buttons.length).toBe(2);

		// Click second layer
		fireEvent.click(buttons[1]);
		expect(handleClick).toHaveBeenCalledWith("Layer 2");
	});

	// --- Full LayerSelector ---
	it("LayerSelector opens popover and updates visibility on click", () => {
		render(<LayerSelector layersRef={{ current: layersMock as any }} />);

		// Button for opening popover
		const button = screen.getByRole("button");
		fireEvent.click(button);

		// Popover buttons
		fireEvent.click(screen.getByRole("button", { name: "Layer 2" }));

		// Check that visibility updated
		expect(layersMock[0].setVisible).toHaveBeenCalledWith(false);
		expect(layersMock[1].setVisible).toHaveBeenCalledWith(true);
	});

	it("returns null if only one layer is present", () => {
		render(<LayerSelector layersRef={{ current: [layersMock[0]] as any }} />);
		expect(screen.queryByRole("button")).toBeNull();
	});
});

