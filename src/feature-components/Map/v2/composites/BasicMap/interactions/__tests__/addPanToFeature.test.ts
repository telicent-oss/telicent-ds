import BaseLayer from "ol/layer/Base";
import {
  fitToFeature,
  fitToFeatures,
  getFeaturesById,
} from "../addPanToFeature";

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

  it("does nothing for an empty geometry instead of hanging", () => {
    const geometry = {
      getExtent: () => [Infinity, Infinity, -Infinity, -Infinity],
    } as any;

    const feature = { getGeometry: () => geometry } as any;

    fitToFeature(map, feature);
    expect(fit).not.toHaveBeenCalled();
  });

  it("does nothing for a non-finite coordinate instead of hanging", () => {
    // Passes isEmpty (maxX is not below minX) but still non-finite.
    const geometry = {
      getExtent: () => [Infinity, 0, Infinity, 0],
    } as any;

    const feature = { getGeometry: () => geometry } as any;

    fitToFeature(map, feature);
    expect(fit).not.toHaveBeenCalled();
  });

  it("normalizes a far-out longitude without looping", () => {
    // Number.MAX_VALUE - 360 === Number.MAX_VALUE in float64.
    const geometry = {
      getExtent: () => [Number.MAX_VALUE, 0, Number.MAX_VALUE, 0],
    } as any;

    const feature = { getGeometry: () => geometry } as any;

    const start = Date.now();
    fitToFeature(map, feature);
    expect(Date.now() - start).toBeLessThan(1000);
  });

  it("does nothing when the projection reports no world extent", () => {
    const noExtentMap = {
      getView: () => ({
        getProjection: () => ({ getExtent: () => null }),
        fit,
      }),
    } as any;
    const feature = { getGeometry: () => new MockPoint([1, 1]) } as any;

    expect(() => fitToFeature(noExtentMap, feature)).not.toThrow();
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

  it("skips an empty geometry listed first, whatever the order", () => {
    const empty = {
      getGeometry: () => ({
        getExtent: () => [Infinity, Infinity, -Infinity, -Infinity],
        clone() {
          return this;
        },
        translate: () => undefined,
      }),
    } as any;
    const real1 = { getGeometry: () => new MockPoint([0, 0]) } as any;
    const real2 = { getGeometry: () => new MockPoint([20, 20]) } as any;

    fitToFeatures(map, [empty, real1, real2]);

    expect(fit).toHaveBeenCalledTimes(1);
    const [extent] = fit.mock.calls[0];
    // refCenterX comes from the first non-empty feature, so the extent stays finite.
    expect(extent.every((n: number) => Number.isFinite(n))).toBe(true);
  });

  it("does nothing when every feature is empty", () => {
    const empty = () =>
      ({
        getGeometry: () => ({
          getExtent: () => [Infinity, Infinity, -Infinity, -Infinity],
          clone() {
            return this;
          },
          translate: () => undefined,
        }),
      }) as any;

    fitToFeatures(map, [empty(), empty()]);

    expect(fit).not.toHaveBeenCalled();
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
