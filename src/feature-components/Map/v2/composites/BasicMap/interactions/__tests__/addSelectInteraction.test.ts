import { addSelectInteraction } from "../addSelectInteraction";
import Select from "ol/interaction/Select";
import { click } from "ol/events/condition";
import { Style } from "ol/style";
import type { Feature, Map as OlMap } from "ol";
import type VectorLayer from "ol/layer/Vector";

jest.mock("ol/interaction/Select");
jest.mock("ol/events/condition", () => ({
  click: jest.fn(),
}));

describe("addSelectInteraction", () => {
  let map: OlMap;
  let layer: VectorLayer;

  beforeEach(() => {
    jest.clearAllMocks();

    map = {
      addInteraction: jest.fn(),
    } as unknown as OlMap;

    layer = {} as unknown as VectorLayer;
  });

  it("creates a Select interaction and adds it to the map", () => {
    const select = addSelectInteraction({ map, layer });

    expect(Select).toHaveBeenCalledWith(
      expect.objectContaining({
        layers: [layer],
        condition: click,
        style: expect.any(Function),
      })
    );

    expect(map.addInteraction).toHaveBeenCalledWith(select);
  });

  it("returns original style when feature has a single Style", () => {
    const style = new Style();

    const feature = {
      get: jest.fn().mockReturnValue(style),
    } as unknown as Feature;

    const select = addSelectInteraction({ map, layer });

    const styleFn = (Select as jest.Mock).mock.calls[0][0].style as (
      f: Feature
    ) => Style[];

    const result = styleFn(feature);

    expect(result).toEqual([style]);
  });

  it("returns original styles when feature has an array of Styles", () => {
    const styles = [new Style(), new Style()];

    const feature = {
      get: jest.fn().mockReturnValue(styles),
    } as unknown as Feature;

    addSelectInteraction({ map, layer });

    const styleFn = (Select as jest.Mock).mock.calls[0][0].style as (
      f: Feature
    ) => Style[];

    const result = styleFn(feature);

    expect(result).toBe(styles);
  });

  it("returns empty array when feature has no original style", () => {
    const feature = {
      get: jest.fn().mockReturnValue(undefined),
    } as unknown as Feature;

    addSelectInteraction({ map, layer });

    const styleFn = (Select as jest.Mock).mock.calls[0][0].style as (
      f: Feature
    ) => Style[];

    const result = styleFn(feature);

    expect(result).toEqual([]);
  });

  it("invokes onSelect callback with selected features", () => {
    const onSelect = jest.fn();

    const selected = [{ id: 1 }, { id: 2 }] as unknown as Feature[];

    let selectHandler: Function | undefined;

    (Select as jest.Mock).mockImplementation(() => ({
      on: jest.fn((event, handler) => {
        if (event === "select") {
          selectHandler = handler;
        }
      }),
    }));

    addSelectInteraction({ map, layer, onSelect });

    // Simulate select event
    selectHandler?.({ selected });

    expect(onSelect).toHaveBeenCalledWith(selected);
  });
});
