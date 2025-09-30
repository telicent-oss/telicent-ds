import { Coordinate } from "ol/coordinate";
import Feature from "ol/Feature";
import { Point, Polygon, MultiPolygon } from "ol/geom";
import { fromLonLat } from "ol/proj";
// import Layer from "ol/layer/Layer";
import TileLayer from "ol/layer/Tile";
import { OSM, XYZ } from "ol/source";
import {
  LayerConfig,
  StyleConfig,
  BaseRasterLayerConfig,
  BaseVectorTileLayerConfig,
  OverlayVectorLayerConfig,
  OverlayFeatureConfig,
  LegacyMapConfig,
  LayerMeta,
} from "../../types";
import { StyleLike } from "ol/style/Style";
import GeoJSON from "ol/format/GeoJSON";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import Text from "ol/style/Text";
import { Circle as CircleStyle } from "ol/style";
import { View } from "ol";
import apply from "ol-mapbox-style";
import LayerGroup from "ol/layer/Group";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import MVT from "ol/format/MVT";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import BaseLayer from "ol/layer/Base";

export const defaultVectorStyle = new Style({
  fill: new Fill({ color: "rgba(0, 0, 255, 0.1)" }),
  stroke: new Stroke({ color: "#3399CC", width: 1 }),
  image: new CircleStyle({
    radius: 5,
    fill: new Fill({ color: "#3399CC" }),
    stroke: new Stroke({ color: "#000", width: 1 }),
  }),
  text: undefined,
});

const toOlStyle = (styleConfig: StyleConfig, feature?: unknown): StyleLike => {
  if (!styleConfig) return defaultVectorStyle;

  if (typeof styleConfig === "function") {
    const result = styleConfig(feature);
    return toOlStyle(result);
  }

  return new Style({
    fill: new Fill({ color: styleConfig.fillColor || "rgba(0,0,0,0.1)" }),
    stroke: new Stroke({
      color: styleConfig.strokeColor || "#000",
      width: styleConfig.strokeWidth || 1,
    }),
    image: new CircleStyle({
      radius: styleConfig.radius || 5,
      fill: new Fill({ color: styleConfig.fillColor || "#000" }),
    }),
    text: styleConfig.text ? new Text({ text: styleConfig.text }) : undefined,
  });
};

const getFeatures = (features: OverlayFeatureConfig[]) =>
  features.map((feature) => {
    let geometry;
    switch (feature.type) {
      case "Point":
        geometry = new Point(
          fromLonLat(feature.coordinates as [number, number])
        );
        break;
      // TODO: https://telicent.atlassian.net/browse/TELFE-1327
      // case "Polygon": {
      //   // Ensure the first polygon if coordinates are multi-dimensional
      //   const coords: Coordinate[][] = Array.isArray(feature.coordinates[0][0])
      //     ? (feature.coordinates as Coordinate[][][])[0]
      //     : (feature.coordinates as Coordinate[][]);
      //   geometry = new Polygon(coords);
      //   break;
      // }
      // case "MultiPolygon": {
      //   const coords: Coordinate[][][] = (feature.coordinates as Coordinate[][][]).map(
      //     polygon => polygon.map(ring => ring as Coordinate[])
      //   );
      //   geometry = new MultiPolygon(coords);
      //   break;
      // }
    }
    return new Feature({ geometry, ...feature.meta });
  });

const getBaseVectorTileLayer = (
  layerConfig: BaseVectorTileLayerConfig
): BaseLayer => {
  switch (layerConfig.provider) {
    case "mapbox":
    case "maptiler":
      // use ol-mapbox-style
      const mapLayer = new LayerGroup(); // container layer
      apply(mapLayer, layerConfig.styleUrl || layerConfig.url, {
        accessToken: layerConfig.accessToken,
      });
      return attachMeta(mapLayer, {
        visible: Boolean(layerConfig.visible),
        label: layerConfig.label,
        image: layerConfig.previewImage,
      });

    case "arcgis":
      // OL VectorTile layer for ArcGIS
      const layer = new VectorTileLayer({
        source: new VectorTileSource({
          url: layerConfig.url + "/tile/{z}/{y}/{x}.pbf", // typical ArcGIS endpoint
          format: new MVT(),
        }),
        visible: layerConfig.visible !== false, // what?
      });
      return attachMeta(layer, {
        visible: Boolean(layerConfig.visible),
        label: layerConfig.label,
        image: layerConfig.previewImage,
      });

    case "custom":
      // assume valid style JSON or MVT endpoint; user handles mapping
      const customLayer = new LayerGroup();
      apply(customLayer, layerConfig.styleUrl || layerConfig.url, {
        accessToken: layerConfig.accessToken,
      });
      return attachMeta(customLayer, {
        visible: Boolean(layerConfig.visible),
        label: layerConfig.label,
        image: layerConfig.previewImage,
      });

    default:
      throw new Error(`Unknown vector tile provider: ${layerConfig.provider}`);
  }
};

const getBaseRasterLayer = (layerConfig: BaseRasterLayerConfig) => {
  const layer = new TileLayer({
    visible: layerConfig.visible ?? true,
    source: new XYZ({
      url: layerConfig.url,
    }),
  });

  const { previewImage: image, label, visible } = layerConfig;

  return attachMeta(layer, { image, label, visible: Boolean(visible) });
};

const getOverlayVectorLayer = (
  layerConfig: OverlayVectorLayerConfig
): VectorLayer => {
  return new VectorLayer({
    visible: layerConfig.visible ?? true,
    source: new VectorSource({
      features: [], // TODO: https://telicent.atlassian.net/browse/TELFE-1327
      format: new GeoJSON(),
    }),
    style: layerConfig.style,
  });
};

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

      default:
        throw new Error(`Unknown layer kind: ${JSON.stringify(layerConfig)}`);
    }
  });
};

export const ensureView = (zoom: number, center: Coordinate) => {
  const defaultZoom = 2;
  const defaultCenter: Coordinate = [0, 0];
  if (!zoom) {
    console.info("Zoom not set using default");
  }

  if (!center) {
    console.info("Center coordinates not set, using default");
  }

  return new View({
    zoom: zoom ?? defaultZoom,
    center: fromLonLat(center ?? defaultCenter),
  });
};

export const mapLegacyConfigToLayers = (
  legacy: LegacyMapConfig
): LayerConfig[] => {
  const layers: LayerConfig[] = [];

  if ("vectorStyles" in legacy) {
    layers.push({
      kind: "base-vector-tiles",
      provider: "custom",
      url: legacy.vectorStyles.uri,
      styleUrl: legacy.vectorStyles.uri,
      visible: false,
      previewImage: legacy.vectorStyles.image,
      label: legacy.vectorStyles.label,
    });
  }

  if ("tileSets" in legacy && Array.isArray(legacy.tileSets)) {
    legacy.tileSets.forEach((tileset) => {
      layers.push({
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

export const attachMeta = (layer: BaseLayer, meta: LayerMeta) => {
  layer.set("meta", meta);
  return layer;
};

export const getMeta = (layer: BaseLayer): LayerMeta => layer.get("meta");
