import { ensureLayers } from "../ensureLayers";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { LayerConfig } from "../../types/layers";

describe("ensureLayers (integration)", () => {
  it("creates real TileLayer with OSM source", () => {
    const layers = ensureLayers([{ kind: "base-raster" } as LayerConfig]);
    expect(layers[0]).toBeInstanceOf(TileLayer);
    expect(layers[0].getZIndex()).toBe(0);
  });

  it("creates real VectorLayer for overlays", () => {
    const layers = ensureLayers([{ kind: "overlay-vector" } as LayerConfig]);
    expect(layers[0]).toBeInstanceOf(VectorLayer);
  });

  it("throws on invalid kind", () => {
    // @ts-expect-error
    expect(() => ensureLayers([{ kind: "nope" } as LayerConfig])).toThrow();
  });
});
