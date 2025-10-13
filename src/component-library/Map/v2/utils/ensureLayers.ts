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

  return layerConfigs.map((layerConfig, index) => {
    switch (layerConfig.kind) {
      case "base-raster":
        const baseRasterLayer = getBaseRasterLayer(layerConfig);
        baseRasterLayer.setZIndex(index);
        return baseRasterLayer;

      case "base-vector-tiles":
        const baseVectorTileLayer = getBaseVectorTileLayer(layerConfig);
        baseVectorTileLayer.setZIndex(index);
        return baseVectorTileLayer;

      case "overlay-vector":
        const overlayVectorLayer = getOverlayVectorLayer(layerConfig);
        overlayVectorLayer.setZIndex(index);
        overlayVectorLayer.setDeclutter(false);
        return overlayVectorLayer;
      default:
        throw new Error(`Unknown layer kind: ${JSON.stringify(layerConfig)}`);
    }
  });
};
