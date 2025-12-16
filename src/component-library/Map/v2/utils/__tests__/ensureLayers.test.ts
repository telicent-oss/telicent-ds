import { ensureLayers } from "../ensureLayers";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { LayerConfig } from "../../types/layers";

describe("ensureLayers (integration)", () => {
  it("creates real TileLayer with OSM source", async () => {
    const layers = await ensureLayers([{ kind: "base-raster" } as LayerConfig]);
    expect(layers[0]).toBeInstanceOf(TileLayer);
    expect(layers[0].getZIndex()).toBe(0);
  });

  it("creates real VectorLayer for overlays", async () => {
    const layers = await ensureLayers([
      { kind: "overlay-vector" } as LayerConfig,
    ]);
    expect(layers[0]).toBeInstanceOf(VectorLayer);
  });

  it("throws on invalid kind", async () => {
    await expect(
      // @ts-expect-error
      ensureLayers([{ kind: "nope" } as LayerConfig])
    ).rejects.toThrow('Unknown layer kind: {"kind":"nope"}');
  });
});
