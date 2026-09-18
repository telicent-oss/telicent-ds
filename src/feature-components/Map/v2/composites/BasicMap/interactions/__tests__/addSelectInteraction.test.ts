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
    const select = addSelectInteraction({ map, layers: [layer] });

    expect(Select).toHaveBeenCalledWith(
      expect.objectContaining({
        layers: [layer],
        condition: click,
        style: null,
      })
    );

    expect(map.addInteraction).toHaveBeenCalledWith(select);
  });

  it("gives Select no style so a selected feature keeps its layer's", () => {
    // OpenLayers applies a Select style by calling setStyle() on the feature,
    // which overrides the layer style. A style here would beat BasicMapV2's
    // pathStyle prop for any clicked path.
    addSelectInteraction({ map, layers: [layer] });

    expect((Select as jest.Mock).mock.calls[0][0].style).toBeNull();
  });

  it("invokes onSelect callback with selected features and pixel event", () => {
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

    addSelectInteraction({ map, layers: [layer], onSelect });

    selectHandler?.({ selected, mapBrowserEvent: { pixel: [120, 240] } });

    expect(onSelect).toHaveBeenCalledWith(selected, { pixel: [120, 240] });
  });

  it("passes undefined event when mapBrowserEvent lacks pixel", () => {
    const onSelect = jest.fn();
    const selected = [] as unknown as Feature[];

    let selectHandler: Function | undefined;

    (Select as jest.Mock).mockImplementation(() => ({
      on: jest.fn((event, handler) => {
        if (event === "select") selectHandler = handler;
      }),
    }));

    addSelectInteraction({ map, layers: [layer], onSelect });

    selectHandler?.({ selected });

    expect(onSelect).toHaveBeenCalledWith(selected, undefined);
  });
});
