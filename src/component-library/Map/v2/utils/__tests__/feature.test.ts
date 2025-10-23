import BaseLayer from "ol/layer/Base";
import VectorLayer from "ol/layer/Vector";
import {
  convertMarkerToFeature,
  findVectorLayerById,
  toOlStyle,
} from "../feature";
import {
  DEFAULT_MARKER_ICON_URL,
  defaultVectorStyle,
} from "../../styles/defaults";
import { MarkerFeature } from "../../types/markers";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Circle from "ol/style/Circle";
import Text from "ol/style/Text";

jest.mock("ol/style/Style");
jest.mock("ol/style/Fill");
jest.mock("ol/style/Stroke");
jest.mock("ol/style/Circle");
jest.mock("ol/style/Text");

describe("convertMarkerToFeature", () => {
  it("should convert a simple MarkerFeature to OverlayFeatureConfig", () => {
    const marker: MarkerFeature = {
      id: "m1",
      geohash: "u10j4",
      meta: { label: "Test" },
      type: "person",
    };

    const feature = convertMarkerToFeature(marker);

    expect(feature.type).toBe("Point");
    expect(feature.coordinates).toEqual([0.10986328125, 51.52587890625]);
    expect(feature.label).toBe("Test");
    expect(feature.marker).toBe(DEFAULT_MARKER_ICON_URL);
    expect(feature.meta).toEqual({ label: "Test" });
  });

  it("should strip 'http://geohash.org/' from geohash", () => {
    const marker: MarkerFeature = {
      id: "m2",
      geohash: "http://geohash.org/u10j4",
      type: "attack",
    };

    const feature = convertMarkerToFeature(marker);
    expect(feature.coordinates).toEqual([0.10986328125, 51.52587890625]);
  });

  it("should use marker.style if provided", () => {
    const marker: MarkerFeature = {
      id: "m3",
      geohash: "u10j4",
      style: { markerType: "pin" },
      type: "vandalism",
    };

    const feature = convertMarkerToFeature(marker);
    expect(feature.marker).toEqual({ markerType: "pin" });
  });
});

describe("toOlStyle", () => {
  it("creates OL style from simple StyleConfig", () => {
    const config = {
      fillColor: "red",
      strokeColor: "blue",
      strokeWidth: 2,
      radius: 10,
      text: "Label",
    };

    toOlStyle(config);

    expect(Fill).toHaveBeenCalledWith({ color: "red" });
    expect(Stroke).toHaveBeenCalledWith({ color: "blue", width: 2 });
    expect(Circle).toHaveBeenCalledWith(
      expect.objectContaining({ radius: 10 })
    );
    expect(Text).toHaveBeenCalledWith(
      expect.objectContaining({ text: "Label" })
    );

    expect(Style).toHaveBeenCalledWith(
      expect.objectContaining({
        fill: expect.any(Fill),
        stroke: expect.any(Stroke),
        image: expect.any(Circle),
        text: expect.any(Text),
      })
    );
  });

  describe("findVectorLayerById", () => {
    it("should return the layer with matching id", () => {
      // @ts-expect-error
      const layer1 = new BaseLayer();
      layer1.set("id", "layer1");

      const layer2 = new VectorLayer();
      layer2.set("id", "layer2");

      const result = findVectorLayerById([layer1, layer2], "layer2");
      expect(result).toBe(layer2);
    });

    it("should return undefined if no matching id", () => {
      // @ts-expect-error
      const layer = new BaseLayer();
      layer.set("id", "foo");

      const result = findVectorLayerById([layer], "bar");
      expect(result).toBeUndefined();
    });
  });
});
