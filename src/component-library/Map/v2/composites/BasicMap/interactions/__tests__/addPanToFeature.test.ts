import BaseLayer from "ol/layer/Base";
import {
  fitToFeature,
  fitToFeatures,
  getFeaturesById,
} from "../addPanToFeature";

// Use your geometry mocks (or real OL geometries if you prefer)
import MockPoint from "../../../../../../../../__mocks__/ol/geom/Point";
import MockPolygon from "../../../../../../../../__mocks__/ol/geom/Polygon";

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

  const map = {
    getView: () => view,
    getSize: () => [800, 600],
  } as any;

  beforeEach(() => {
    fit.mockClear();
  });

  it("fits to Point geometry", () => {
    const geometry = new MockPoint([10, 20]);
    const feature = { getGeometry: () => geometry } as any;

    fitToFeature(map, feature);

    expect(fit).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ duration: 600 })
    );
  });

  it("fits to Polygon geometry", () => {
    const geometry = new MockPolygon([
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

  it("does nothing if geometry.getExtent returns undefined", () => {
    const geometry = {
      getExtent: () => undefined,
    } as any;

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
    const geometry = new MockPoint([1, 2]);
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

  const map = {
    getView: () => view,
    getSize: () => [800, 600],
  } as any;

  beforeEach(() => {
    fit.mockClear();
  });

  it("pans and zooms to multiple features", () => {
    const f1 = { getGeometry: () => new MockPoint([0, 0]) } as any;
    const f2 = { getGeometry: () => new MockPoint([20, 20]) } as any;

    fitToFeatures(map, [f1, f2]);

    expect(fit).toHaveBeenCalledTimes(1);

    const [extent, options] = fit.mock.calls[0];

    expect(extent).toHaveLength(4);
    expect(options).toEqual(
      expect.objectContaining({
        padding: [50, 50, 50, 50],
        duration: 600,
      })
    );
  });

  it("respects maxZoom", () => {
    const f = { getGeometry: () => new MockPoint([5, 5]) } as any;

    fitToFeatures(map, [f], { maxZoom: 8 });

    expect(fit).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ maxZoom: 8 })
    );
  });

  it("does nothing if no features", () => {
    fitToFeatures(map, []);
    expect(fit).not.toHaveBeenCalled();
  });

  it("does nothing when all features lack geometry", () => {
    const f = { getGeometry: () => undefined } as any;
    fitToFeatures(map, [f]);
    expect(fit).not.toHaveBeenCalled();
  });

  it("does nothing if map.getView returns undefined", () => {
    const f = { getGeometry: () => new MockPoint([1, 1]) } as any;
    const brokenMap = { ...map, getView: () => undefined } as any;

    fitToFeatures(brokenMap, [f]);
    expect(fit).not.toHaveBeenCalled();
  });
});
