import { LayerConfig } from "../../types/layers";
import { LegacyMapConfig } from "../../types/map-types";
import { mapLegacyConfigToLayers } from "../legacy";

describe("mapLegacyConfigToLayers", () => {
  it("maps vectorStyles correctly to a base-vector-tiles layer", () => {
    const legacy: LegacyMapConfig = {
      vectorStyles: {
        label: "Custom Vector",
        uri: "https://tiles.example.com/style.json",
        image: "preview.png",
      },
    } as any;

    const result = mapLegacyConfigToLayers(legacy);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual<LayerConfig>({
      id: "Custom Vector",
      kind: "base-vector-tiles",
      provider: "custom",
      url: "https://tiles.example.com/style.json",
      styleUrl: "https://tiles.example.com/style.json",
      visible: true, // first layer is visible
      previewImage: "preview.png",
      label: "Custom Vector",
    });
  });

  it("maps tileSets correctly to base-raster layers", () => {
    const legacy: LegacyMapConfig = {
      tileSets: [
        {
          label: "Satellite",
          uri: "https://tiles.example.com/satellite",
          attribution: "NASA",
          image: "satellite.png",
        },
        {
          label: "Terrain",
          uri: "https://tiles.example.com/terrain",
          attribution: "OSM",
          image: "terrain.png",
        },
      ],
    } as any;

    const result = mapLegacyConfigToLayers(legacy);

    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({
      id: "Satellite",
      kind: "base-raster",
      visible: true, // first layer visible
    });
    expect(result[1]).toMatchObject({
      id: "Terrain",
      kind: "base-raster",
      visible: false,
    });
  });

  it("combines vectorStyles and tileSets in correct order", () => {
    const legacy: LegacyMapConfig = {
      vectorStyles: {
        label: "Base Vector",
        uri: "https://example.com/vector",
        image: "vector.png",
      },
      tileSets: [
        {
          label: "Raster A",
          uri: "https://example.com/raster-a",
          attribution: "A",
          image: "a.png",
        },
        {
          label: "Raster B",
          uri: "https://example.com/raster-b",
          attribution: "B",
          image: "b.png",
        },
      ],
    } as any;

    const result = mapLegacyConfigToLayers(legacy);

    expect(result.map((r) => r.id)).toEqual([
      "Base Vector",
      "Raster A",
      "Raster B",
    ]);
    expect(result[0].visible).toBe(true);
    expect(result[1].visible).toBe(false);
    expect(result[2].visible).toBe(false);
  });

  it("returns empty array if legacy config has neither vectorStyles nor tileSets", () => {
    const result = mapLegacyConfigToLayers({} as any);
    expect(result).toEqual([]);
  });
});
