import VectorLayer from "ol/layer/Vector";
import TileLayer from "ol/layer/Tile";
import LayerGroup from "ol/layer/Group";
import BaseLayer from "ol/layer/Base";
import { XYZ } from "ol/source";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";

// Mock ol-mapbox-style apply function
import apply from "ol-mapbox-style";

import {
  getOverlayVectorLayer,
  getBaseVectorTileLayer,
  getBaseRasterLayer,
  attachMeta,
  getMeta,
  MARKER_LAYER_ID,
} from "../layers";

describe("layers util", () => {
  afterEach(() => {
    jest.clearAllMocks();
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
  });

  describe("getBaseVectorTileLayer", () => {
    it("creates a mapbox/maptiler vector tile layer via apply", () => {
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

      const layer = getBaseVectorTileLayer(config as any);
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

    it("creates an arcgis vector tile layer with MVT format", () => {
      const config = {
        id: "arcgis-layer",
        kind: "base-vector-tiles",
        provider: "arcgis",
        url: "https://example.com/arcgis",
        label: "ArcGIS",
      };

      const layer = getBaseVectorTileLayer(config as any) as VectorTileLayer;
      expect(layer).toBeInstanceOf(VectorTileLayer);
      const source = layer.getSource() as VectorTileSource;
      expect(source).toBeInstanceOf(VectorTileSource);
      expect(layer.get("meta").label).toBe("ArcGIS");
    });

    it("throws for unknown provider", () => {
      expect(() =>
        getBaseVectorTileLayer({
          id: "x",
          kind: "base-vector-tiles",
          provider: "nonsense",
        } as any)
      ).toThrow(/Unknown vector tile provider/);
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
});
