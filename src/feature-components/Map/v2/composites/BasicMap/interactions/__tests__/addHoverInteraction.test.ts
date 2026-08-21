import { addHoverInteraction } from "../addHoverInteraction";
import { unByKey } from "ol/Observable";
import type { Map as OlMap } from "ol";
import type VectorLayer from "ol/layer/Vector";

jest.mock("ol/Observable", () => ({
  unByKey: jest.fn(),
}));

type PointerHandler = (evt: {
  dragging?: boolean;
  pixel: [number, number];
}) => void;

type FakeMap = {
  on: jest.Mock;
  forEachFeatureAtPixel: jest.Mock;
};

const makeMap = (): { map: OlMap; getHandler: () => PointerHandler; fakeMap: FakeMap } => {
  const listeners: Record<string, PointerHandler> = {};
  const fakeMap: FakeMap = {
    on: jest.fn((event: string, handler: PointerHandler) => {
      listeners[event] = handler;
      return { event, handler } as unknown;
    }) as jest.Mock,
    forEachFeatureAtPixel: jest.fn(),
  };
  return {
    map: fakeMap as unknown as OlMap,
    fakeMap,
    getHandler: () => listeners.pointermove,
  };
};

const featureWithId = (id: string) => ({
  getId: () => id,
});

describe("addHoverInteraction", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fires enter with id and pixel when pointer enters a marker from empty space", () => {
    const { map, fakeMap, getHandler } = makeMap();
    const onHover = jest.fn();

    addHoverInteraction({
      map,
      layer: {} as VectorLayer,
      onHover,
    });

    fakeMap.forEachFeatureAtPixel.mockImplementation(
      (_pixel: unknown, cb: (f: unknown) => boolean) => cb(featureWithId("A"))
    );

    getHandler()({ pixel: [10, 20] });

    expect(onHover).toHaveBeenCalledTimes(1);
    expect(onHover).toHaveBeenCalledWith("A", { pixel: [10, 20] });
  });

  it("does not re-fire when pointer moves within the same marker", () => {
    const { map, fakeMap, getHandler } = makeMap();
    const onHover = jest.fn();

    addHoverInteraction({ map, layer: {} as VectorLayer, onHover });

    fakeMap.forEachFeatureAtPixel.mockImplementation(
      (_pixel: unknown, cb: (f: unknown) => boolean) => cb(featureWithId("A"))
    );

    getHandler()({ pixel: [10, 20] });
    getHandler()({ pixel: [11, 21] });
    getHandler()({ pixel: [12, 22] });

    expect(onHover).toHaveBeenCalledTimes(1);
    expect(onHover).toHaveBeenCalledWith("A", { pixel: [10, 20] });
  });

  it("fires null (no pixel) when pointer leaves the last-hovered marker", () => {
    const { map, fakeMap, getHandler } = makeMap();
    const onHover = jest.fn();

    addHoverInteraction({ map, layer: {} as VectorLayer, onHover });

    fakeMap.forEachFeatureAtPixel.mockImplementationOnce(
      (_pixel: unknown, cb: (f: unknown) => boolean) => cb(featureWithId("A"))
    );
    getHandler()({ pixel: [10, 20] });

    // No feature under pointer this time
    fakeMap.forEachFeatureAtPixel.mockImplementationOnce(() => undefined);
    getHandler()({ pixel: [80, 80] });

    expect(onHover).toHaveBeenCalledTimes(2);
    expect(onHover).toHaveBeenNthCalledWith(1, "A", { pixel: [10, 20] });
    expect(onHover).toHaveBeenNthCalledWith(2, null);
  });

  it("fires a single call with the new id when moving directly from A to B", () => {
    const { map, fakeMap, getHandler } = makeMap();
    const onHover = jest.fn();

    addHoverInteraction({ map, layer: {} as VectorLayer, onHover });

    fakeMap.forEachFeatureAtPixel.mockImplementationOnce(
      (_pixel: unknown, cb: (f: unknown) => boolean) => cb(featureWithId("A"))
    );
    getHandler()({ pixel: [10, 20] });

    fakeMap.forEachFeatureAtPixel.mockImplementationOnce(
      (_pixel: unknown, cb: (f: unknown) => boolean) => cb(featureWithId("B"))
    );
    getHandler()({ pixel: [50, 60] });

    expect(onHover).toHaveBeenCalledTimes(2);
    expect(onHover).toHaveBeenNthCalledWith(1, "A", { pixel: [10, 20] });
    expect(onHover).toHaveBeenNthCalledWith(2, "B", { pixel: [50, 60] });
  });

  it("ignores dragging events", () => {
    const { map, fakeMap, getHandler } = makeMap();
    const onHover = jest.fn();

    addHoverInteraction({ map, layer: {} as VectorLayer, onHover });

    fakeMap.forEachFeatureAtPixel.mockImplementation(
      (_pixel: unknown, cb: (f: unknown) => boolean) => cb(featureWithId("A"))
    );

    getHandler()({ pixel: [10, 20], dragging: true });

    expect(onHover).not.toHaveBeenCalled();
    expect(fakeMap.forEachFeatureAtPixel).not.toHaveBeenCalled();
  });

  it("detach removes the listener via unByKey", () => {
    const { map, fakeMap } = makeMap();
    const onHover = jest.fn();

    const detach = addHoverInteraction({
      map,
      layer: {} as VectorLayer,
      onHover,
    });

    detach();

    expect(unByKey).toHaveBeenCalledTimes(1);
    // Ensure the key we unregister is the one map.on returned
    expect(unByKey).toHaveBeenCalledWith(fakeMap.on.mock.results[0].value);
  });
});
