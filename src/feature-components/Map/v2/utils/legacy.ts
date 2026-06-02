import { LayerConfig } from "../types/layers";
import { LegacyMapConfig } from "../types/map-types";

export const mapLegacyConfigToLayers = (
  legacy: LegacyMapConfig
): LayerConfig[] => {
  const layers: LayerConfig[] = [];

  if (legacy.vectorStyles) {
    layers.push({
      id: legacy.vectorStyles.label,
      kind: "base-vector-tiles",
      provider: "custom",
      url: legacy.vectorStyles.uri,
      styleUrl: legacy.vectorStyles.uri,
      visible: false,
      previewImage: legacy.vectorStyles.image,
      label: legacy.vectorStyles.label,
    });
  }

  if (legacy.tileSets && Array.isArray(legacy.tileSets)) {
    legacy.tileSets.forEach((tileset) => {
      layers.push({
        id: tileset.label,
        kind: "base-raster",
        url: tileset.uri,
        attribution: tileset.attribution,
        visible: false,
        previewImage: tileset.image,
        label: tileset.label,
      });
    });
  }

  return layers.map((layer, idx) => ({
    ...layer,
    visible: idx === 0, // set the first layer to be visible
  }));
};
