import BaseLayer from "ol/layer/Base";
import { LayerConfig } from "../types/layers";
import { OSM } from "ol/source";
import TileLayer from "ol/layer/Tile";
import {
  getBaseRasterLayer,
  getBaseVectorTileLayer,
  getOverlayVectorLayer,
} from "./layers";

export const ensureLayers = (layerConfigs: LayerConfig[]): BaseLayer[] => {
  if (!layerConfigs || layerConfigs.length === 0) {
    console.info("No layers provided. Adding default OSM base layer.");
    return [new TileLayer({ source: new OSM() })];
  }

  return layerConfigs.map((layerConfig) => {
    switch (layerConfig.kind) {
      case "base-raster":
        return getBaseRasterLayer(layerConfig);

      case "base-vector-tiles":
        return getBaseVectorTileLayer(layerConfig);

      case "overlay-vector":
        return getOverlayVectorLayer(layerConfig);
      default:
        throw new Error(`Unknown layer kind: ${JSON.stringify(layerConfig)}`);
    }
  });
};
