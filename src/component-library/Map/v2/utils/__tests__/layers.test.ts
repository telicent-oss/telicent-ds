import VectorLayer from "ol/layer/Vector";
import TileLayer from "ol/layer/Tile";
import LayerGroup from "ol/layer/Group";
import BaseLayer from "ol/layer/Base";
import CircleStyle from "ol/style/Circle";
import { XYZ } from "ol/source";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";

// Mock ol-mapbox-style apply function
import apply from "ol-mapbox-style";

import {
  getOverlayVectorLayer,
  getBaseVectorTileLayer,
  getDefaultOverlayStyle,
  getBaseRasterLayer,
  attachMeta,
  getMeta,
  MARKER_LAYER_ID,
  attachTileLoadErrorLogging,
} from "../layers";

describe("layers util", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getDefaultOverlayStyle", () => {
    it("returns a CircleStyle for Point geometries", () => {
      const feature = {
        getGeometry: () => ({ getType: () => "Point" }),
      };

      const styleLike = getDefaultOverlayStyle();
      expect(typeof styleLike).toBe("function");

      const styleFn = styleLike as (feature: any) => any;
      const style = styleFn(feature as any);

      expect(style.props.image).toBeDefined();
      expect(style.props.image).toBeInstanceOf(CircleStyle);

      // Style is a MockStyle instance
      expect(style.props.image.options.radius).toBe(6);
      expect(style.props.image.options.fill.props).toBeDefined();
      expect(style.props.image.options.stroke.props).toBeDefined();
    });
  });

  describe("getOverlayVectorLayer", () => {
    it("creates a vector layer with default style and correct meta", () => {
      const config = {
        id: "overlay-1",
        kind: "overlay-vector",
        data: [
          {
            id: "pt1",
            type: "Point",
            coordinates: [0, 0],
            meta: { info: "test" },
          },
        ],
      };

      const layer = getOverlayVectorLayer(config as any);
      expect(layer).toBeInstanceOf(VectorLayer);

      expect(layer.get("id")).toBe("overlay-1");
      expect(layer.get("kind")).toBe("overlay-vector");
    });
  });

  describe("getBaseRasterLayer", () => {
    it("creates a TileLayer with XYZ source and meta", () => {
      const config = {
        id: "raster-1",
        kind: "base-raster",
        url: "https://example.com/{z}/{x}/{y}.png",
        label: "Base Raster",
        visible: true,
        previewImage: "preview.png",
        provider: "arcgis",
      };

      const layer = getBaseRasterLayer(config as any) as TileLayer<XYZ>;
      expect(layer).toBeInstanceOf(VectorTileLayer);

      const source = layer.getSource() as XYZ;
      expect(source).toBeInstanceOf(XYZ);
      expect(layer.get("id")).toBe("raster-1");
      expect(layer.get("meta")).toEqual({
        image: "preview.png",
        label: "Base Raster",
        visible: true,
      });
    });

    it("creates a mapbox/maptiler vector tile layer via apply", async () => {
      const config = {
        id: "vector-1",
        kind: "base-vector-tiles",
        provider: "maptiler",
        url: "https://tiles.com/style.json",
        label: "MapTiler Layer",
        accessToken: "123",
        previewImage: "img.png",
        visible: true,
      };

      const layer = await getBaseVectorTileLayer(config as any);
      expect(layer).toBeInstanceOf(LayerGroup);
      expect(apply).toHaveBeenCalledWith(
        expect.any(LayerGroup),
        "https://tiles.com/style.json",
        {
          accessToken: "123",
        }
      );
      expect(layer.get("meta")).toEqual({
        visible: true,
        label: "MapTiler Layer",
        image: "img.png",
      });
    });

    it("creates an arcgis vector tile layer with MVT format", async () => {
      const config = {
        id: "arcgis-layer",
        kind: "base-vector-tiles",
        provider: "arcgis",
        url: "https://example.com/arcgis",
        label: "ArcGIS",
      };

      const layer = (await getBaseVectorTileLayer(
        config as any
      )) as VectorTileLayer;
      expect(layer).toBeInstanceOf(VectorTileLayer);
      const source = layer.getSource() as VectorTileSource;
      expect(source).toBeInstanceOf(VectorTileSource);
      expect(layer.get("meta").label).toBe("ArcGIS");
    });

    it("throws for unknown provider", () => {
      expect(
        async () =>
          await getBaseVectorTileLayer({
            id: "x",
            kind: "base-vector-tiles",
            provider: "nonsense",
          } as any)
      ).rejects.toThrow(/Unknown vector tile provider/);
    });
  });

  describe("meta helpers", () => {
    it("attaches and retrieves meta", () => {
      const layer = new BaseLayer({});
      const meta = { visible: true, label: "Test", image: "img" };
      attachMeta(layer, meta);
      expect(getMeta(layer)).toEqual(meta);
    });
  });

  it("exports marker layer ID constant", () => {
    expect(MARKER_LAYER_ID).toBe("marker-layer");
  });

  describe("attachTileLoadErrorLogging", () => {
    it("attaches tileloaderror handler to layers with sources", () => {
      const on = jest.fn();
      const un = jest.fn();
      const getSource = jest.fn(() => ({ on, un }));

      const layerWithSource = { getSource };
      const layerWithoutSource = {};

      const layers = {
        forEach: (cb: (layer: any) => void) => {
          cb(layerWithSource);
          cb(layerWithoutSource);
        },
      };

      const errorHandler = jest.fn();

      const detach = attachTileLoadErrorLogging(layers as any, errorHandler);

      expect(getSource).toHaveBeenCalledTimes(1);
      expect(on).toHaveBeenCalledWith("tileloaderror", errorHandler);
      expect(typeof detach).toBe("function");
    });

    it("does not attach tileloaderror listener when source is null", () => {
      const getSource = jest.fn(() => null);

      const layers = {
        forEach: (cb: (layer: any) => void) => {
          cb({ getSource });
        },
      };

      const detach = attachTileLoadErrorLogging(layers as any);

      expect(getSource).toHaveBeenCalled();
      expect(() => detach()).not.toThrow();
    });

    it("invokes the provided error handler when the event fires", () => {
      let capturedHandler: ((e: Error) => void) | undefined;

      const on = jest.fn((_, handler) => {
        capturedHandler = handler;
      });
      const un = jest.fn();

      const layers = {
        forEach: (cb: (layer: any) => void) => {
          cb({ getSource: () => ({ on, un }) });
        },
      };

      const errorHandler = jest.fn();

      attachTileLoadErrorLogging(layers as any, errorHandler);

      capturedHandler!(new Error("boom"));

      expect(errorHandler).toHaveBeenCalledWith(expect.any(Error));
    });
  });
});
