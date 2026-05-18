// LayerSelector.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { LayerSelectorV2 } from "./LayerSelector";
import { getMeta } from "../../utils/layers";
import userEvent from "@testing-library/user-event";

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
      new MockLayer({ kind: "baseLayer", meta: { label: "Layer 2", image: "img2.png", visible: true } }),
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

  it("LayerSelector opens popover and updates visibility on click", async () => {
    const user = userEvent.setup();
    render(<LayerSelectorV2 layers={layersMock as any} />);

    await user.click(screen.getByRole("button"));

    await user.click(screen.getByRole("menuitem", { name: "Layer 2" }));

    expect(layersMock[0].setVisible).toHaveBeenCalledWith(false);
    expect(layersMock[1].setVisible).toHaveBeenCalledWith(true);
  });

  it("returns null if only one layer is present", () => {
    render(<LayerSelectorV2 layers={[layersMock[0]] as any} />);
    expect(screen.queryByRole("button")).toBeNull();
  });
});
