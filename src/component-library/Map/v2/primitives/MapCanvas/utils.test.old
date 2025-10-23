import {
  ensureLayers,
  mapLegacyConfigToLayers,
  attachMeta,
  getMeta,
} from "./utils";
import TileLayer from "ol/layer/Tile";

describe("Map utils", () => {
  it("ensureLayers returns at least a default OSM layer when empty", () => {
    const layers = ensureLayers([]);
    expect(layers.length).toBe(1);
    expect(layers[0]).toBeInstanceOf(TileLayer);
  });

  it("mapLegacyConfigToLayers returns proper LayerConfig array", () => {
    const legacy = {
      vectorStyles: { uri: "styleUri", image: "img.png", label: "vector" },
      tileSets: [
        { uri: "tile1", image: "t1.png", label: "tile1", attribution: "" },
      ],
    };
    const layers = mapLegacyConfigToLayers(legacy);
    expect(layers.length).toBe(2);
    expect(layers[0].kind).toBe("base-vector-tiles");
    expect(layers[1].kind).toBe("base-raster");
    expect(layers[0].visible).toBe(true); // first layer visible
  });

  it("attachMeta sets and getMeta retrieves meta", () => {
    const layer: any = new TileLayer();
    attachMeta(layer, { visible: true, image: "imagehash", label: "test" });
    const meta = getMeta(layer);
    expect(meta.label).toBe("test");
    expect(meta.visible).toBe(true);
  });
});
