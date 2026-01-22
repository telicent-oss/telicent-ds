import BaseLayer from "ol/layer/Base";
import Point from "ol/geom/Point";
import Polygon from "ol/geom/Polygon";

import {
  panToFeature,
  panToFeatures,
  getFeaturesById,
} from "../addPanToFeature";

describe("getFeaturesById", () => {
  it("returns features matching ids across layers", () => {
    const featureA = { id: "a" };
    const featureB = { id: "b" };
    const source = {
      getFeatureById: (id: string) =>
        id === "a" ? featureA : id === "b" ? featureB : undefined,
    };
    const layer = { getSource: () => source } as unknown as BaseLayer;
    const result = getFeaturesById([layer], ["a", "b", "c"]);
    expect(result).toEqual([featureA, featureB]);
  });

  it("ignores layers without getFeatureById", () => {
    const layer = { getSource: () => ({}) } as unknown as BaseLayer;
    const result = getFeaturesById([layer], ["x"]);
    expect(result).toEqual([]);
  });

  it("ignores layers without getSource", () => {
    const layer = {} as unknown as BaseLayer;
    const result = getFeaturesById([layer], ["x"]);
    expect(result).toEqual([]);
  });
});

describe("panToFeature", () => {
  const animate = jest.fn();
  const map = { getView: () => ({ animate }) } as any;

  beforeEach(() => {
    animate.mockClear();
  });

  it("pans to Point geometry", () => {
    const geometry = new Point([10, 20]);
    const feature = { getGeometry: () => geometry } as any;
    panToFeature(map, feature);
    expect(animate).toHaveBeenCalledWith(
      expect.objectContaining({ center: [10, 20], duration: 600 })
    );
  });

  it("pans to Polygon center", () => {
    const geometry = new Polygon([
      [
        [0, 0],
        [10, 0],
        [10, 10],
        [0, 10],
        [0, 0],
      ],
    ]);
    const feature = { getGeometry: () => geometry } as any;
    panToFeature(map, feature);
    expect(animate).toHaveBeenCalledWith(
      expect.objectContaining({ center: [5, 5] })
    );
  });

  it("handles other geometry with getExtent", () => {
    const geometry = { getExtent: () => [0, 0, 10, 20] } as any;
    const feature = { getGeometry: () => geometry } as any;
    panToFeature(map, feature);
    expect(animate).toHaveBeenCalledWith(
      expect.objectContaining({ center: [5, 10] })
    );
  });

  it("does nothing if geometry.getExtent returns undefined", () => {
    const geometry = { getExtent: () => undefined } as any;
    const feature = { getGeometry: () => geometry } as any;
    panToFeature(map, feature);
    expect(animate).not.toHaveBeenCalled();
  });

  it("does nothing if geometry is missing", () => {
    const feature = { getGeometry: () => undefined } as any;
    panToFeature(map, feature);
    expect(animate).not.toHaveBeenCalled();
  });

  it("does nothing if map.getView returns undefined", () => {
    const brokenMap = { getView: () => undefined } as any;
    const geometry = new Point([1, 2]);
    const feature = { getGeometry: () => geometry } as any;
    panToFeature(brokenMap, feature);
    expect(animate).not.toHaveBeenCalled();
  });
});

describe("panToFeatures", () => {
  const setZoom = jest.fn();
  const fit = jest.fn();
  const view = {
    setZoom,
    fit,
    getZoom: () => 10,
    getResolution: () => 1,
    getResolutions: () => [4, 2, 1, 0.5],
    getResolutionForExtent: () => 1,
    getZoomForResolution: () => 12,
  };
  const map = { getView: () => view, getSize: () => [800, 600] } as any;

  beforeEach(() => {
    setZoom.mockClear();
    fit.mockClear();
  });

  it("pans and zooms to multiple features", () => {
    const f1 = {
      getGeometry: () => ({ getExtent: () => [0, 0, 10, 10] }),
    } as any;
    const f2 = {
      getGeometry: () => ({ getExtent: () => [10, 10, 20, 20] }),
    } as any;
    panToFeatures(map, [f1, f2]);
    expect(setZoom).toHaveBeenCalledWith(12);
    expect(fit).toHaveBeenCalledWith(
      [0, 0, 20, 20],
      expect.objectContaining({ padding: [50, 50, 50, 50], duration: 600 })
    );
  });

  it("respects maxZoom", () => {
    const f = {
      getGeometry: () => ({ getExtent: () => [0, 0, 10, 10] }),
    } as any;
    panToFeatures(map, [f], { maxZoom: 8 });
    expect(setZoom).toHaveBeenCalledWith(8);
  });

  it("does nothing if no features", () => {
    panToFeatures(map, []);
    expect(setZoom).not.toHaveBeenCalled();
    expect(fit).not.toHaveBeenCalled();
  });

  it("does nothing when all features lack geometry", () => {
    const f = { getGeometry: () => undefined } as any;
    panToFeatures(map, [f]);
    expect(setZoom).not.toHaveBeenCalled();
    expect(fit).not.toHaveBeenCalled();
  });

  it("does nothing if map.getView returns undefined", () => {
    const f = {
      getGeometry: () => ({ getExtent: () => [0, 0, 10, 10] }),
    } as any;
    const brokenMap = { ...map, getView: () => undefined } as any;
    panToFeatures(brokenMap, [f]);
    expect(setZoom).not.toHaveBeenCalled();
    expect(fit).not.toHaveBeenCalled();
  });
});
