import BaseLayer from "ol/layer/Base";
import Point from "ol/geom/Point";
import Polygon from "ol/geom/Polygon";

import {
  fitToFeature,
  fitToFeatures,
  getFeaturesById,
} from "../addPanToFeature";
import { duration } from "@mui/material";

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
  const fit = jest.fn();
  const map = { getView: () => view, getSize: () => [800, 600] } as any;
  const view = {
    fit,
    getZoom: () => 10,
    getResolution: () => 1,
    getResolutions: () => [4, 2, 1, 0.5],
    getResolutionForExtent: () => 1,
    getZoomForResolution: () => 12,
    getProjection: () => ({
      getCode: () => "EPSG:4326",
      getExtent: () => [-180, -90, 180, 90],
    }),
  };
  beforeEach(() => {
    fit.mockClear();
  });

  it("fits to Point geometry", () => {
    const geometry = new Point([10, 20]);
    const feature = { getGeometry: () => geometry } as any;

    fitToFeature(map, feature);

    expect(fit).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ duration: 600 })
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
    fitToFeature(map, feature);
    expect(fit).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ duration: 600 })
    );
  });

  it("handles other geometry with getExtent", () => {
    const geometry = { getExtent: () => [0, 0, 10, 20] } as any;
    const feature = { getGeometry: () => geometry } as any;
    fitToFeature(map, feature);
    expect(fit).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ duration: 600 })
    );
  });

  it("does nothing if geometry.getExtent returns undefined", () => {
    const geometry = { getExtent: () => undefined } as any;
    const feature = { getGeometry: () => geometry } as any;
    fitToFeature(map, feature);
    expect(fit).not.toHaveBeenCalled();
  });

  it("does nothing if geometry is missing", () => {
    const feature = { getGeometry: () => undefined } as any;
    fitToFeature(map, feature);
    expect(fit).not.toHaveBeenCalled();
  });

  it("does nothing if map.getView returns undefined", () => {
    const brokenMap = { getView: () => undefined } as any;
    const geometry = new Point([1, 2]);
    const feature = { getGeometry: () => geometry } as any;
    fitToFeature(brokenMap, feature);
    expect(fit).not.toHaveBeenCalled();
  });
});

describe("panToFeatures", () => {
  const fit = jest.fn();
  const view = {
    fit,
    getZoom: () => 10,
    getResolution: () => 1,
    getResolutions: () => [4, 2, 1, 0.5],
    getResolutionForExtent: () => 1,
    getZoomForResolution: () => 12,
    getProjection: () => ({
      getCode: () => "EPSG:4326",
      getExtent: () => [-180, -90, 180, 90],
    }),
  };
  const map = { getView: () => view, getSize: () => [800, 600] } as any;

  beforeEach(() => {
    fit.mockClear();
  });

  it("pans and zooms to multiple features", () => {
    const f1 = {
      getGeometry: () => ({ getExtent: () => [0, 0, 10, 10] }),
    } as any;
    const f2 = {
      getGeometry: () => ({ getExtent: () => [10, 10, 20, 20] }),
    } as any;
    fitToFeatures(map, [f1, f2]);
    expect(fit).toHaveBeenCalledWith(
      [0, 0, 20, 20],
      expect.objectContaining({ padding: [50, 50, 50, 50], duration: 600 })
    );
  });

  it("respects maxZoom", () => {
    const f = {
      getGeometry: () => ({ getExtent: () => [0, 0, 10, 10] }),
    } as any;
    fitToFeatures(map, [f], { maxZoom: 8 });
    expect(fit).toHaveBeenCalledWith(
      expect.anything(), // extent
      expect.objectContaining({
        maxZoom: 8,
      })
    );
  });

  it("does nothing if no features", () => {
    fitToFeatures(map, []);
    // expect(setZoom).not.toHaveBeenCalled();
    expect(fit).not.toHaveBeenCalled();
  });

  it("does nothing when all features lack geometry", () => {
    const f = { getGeometry: () => undefined } as any;
    fitToFeatures(map, [f]);
    // expect(setZoom).not.toHaveBeenCalled();
    expect(fit).not.toHaveBeenCalled();
  });

  it("does nothing if map.getView returns undefined", () => {
    const f = {
      getGeometry: () => ({ getExtent: () => [0, 0, 10, 10] }),
    } as any;
    const brokenMap = { ...map, getView: () => undefined } as any;
    fitToFeatures(brokenMap, [f]);
    // expect(setZoom).not.toHaveBeenCalled();
    expect(fit).not.toHaveBeenCalled();
  });
});
