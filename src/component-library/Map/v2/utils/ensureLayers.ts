import BaseLayer from "ol/layer/Base";
import { LayerConfig } from "../types/layers";
import {
  getBaseRasterLayer,
  getBaseVectorTileLayer,
  getOverlayVectorLayer,
} from "./layers";

export const ensureLayers = async (
  layerConfigs: LayerConfig[]
): Promise<BaseLayer[]> => {
  const layerPromises = layerConfigs.map(async (layerConfig, index) => {
    switch (layerConfig.kind) {
      case "base-raster":
        const baseRasterLayer = getBaseRasterLayer(layerConfig);
        baseRasterLayer.setZIndex(index);
        return baseRasterLayer;

      case "base-vector-tiles":
        const baseVectorTileLayer = await getBaseVectorTileLayer(layerConfig);
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

  return Promise.all(layerPromises);
};
