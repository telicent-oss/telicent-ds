import apply, { applyStyle } from "ol-mapbox-style";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import BaseLayer from "ol/layer/Base";
import {
  BaseRasterLayerConfig,
  BaseVectorTileLayerConfig,
  LayerMeta,
  OverlayVectorLayerConfig,
} from "../types/layers";
import VectorSource from "ol/source/Vector";
import { Point, Polygon } from "ol/geom";
import { fromLonLat, get as getProjection } from "ol/proj";
import Feature from "ol/Feature";
import VectorLayer from "ol/layer/Vector";
import { StyleLike } from "ol/style/Style";
import { Fill, Stroke, Style } from "ol/style";
import CircleStyle from "ol/style/Circle";
import LayerGroup from "ol/layer/Group";
import MVT from "ol/format/MVT";
import TileLayer from "ol/layer/Tile";
import { XYZ } from "ol/source";
import { OverlayFeatureConfig } from "../types/overlays";
import { createXYZ } from "ol/tilegrid";
import { Collection } from "ol";

export const getDefaultOverlayStyle = (): StyleLike => (feature) => {
  const geomType = feature.getGeometry()?.getType();
  if (geomType === "Point") {
    return new Style({
      image: new CircleStyle({
        radius: 6,
        fill: new Fill({ color: "#FF6600" }),
        stroke: new Stroke({ color: "#fff", width: 2 }),
      }),
    });
  }

  return new Style({
    stroke: new Stroke({ color: "#FF6600", width: 2 }),
    fill: new Fill({ color: "rgba(255, 102, 0, 0.2)" }),
  });
};

export const getOverlayVectorLayer = (
  config: OverlayVectorLayerConfig
): VectorLayer => {
  const source = new VectorSource({
    features: (config.data ?? []).map((item: OverlayFeatureConfig) => {
      let geometry;
      if (item.type === "Point") {
        // Ensure coordinates are [longitude, latitude] for fromLonLat
        const coords = item.coordinates as [number, number];
        geometry = new Point(fromLonLat(coords));
      } else {
        // Polygons: OL expects [ [ [lon, lat], ... ], ... ] in EPSG:4326
        geometry = new Polygon(item.coordinates as number[][][]).transform(
          "EPSG:4326",
          "EPSG:3857"
        );
      }

      const feature = new Feature({
        geometry,
        id: item.id,
        ...item.meta,
      });

      if (item.label) feature.set("label", item.label);

      return feature;
    }),
  });

  const layer = new VectorLayer({
    source,
    visible: config.visible ?? true,
    style: config.style ?? getDefaultOverlayStyle(),
    zIndex: config.zIndex ?? 10,
  });

  layer.set("id", config.id);
  layer.set("kind", config.kind);

  return layer;
};

export const getBaseVectorTileLayer = async (
  layerConfig: BaseVectorTileLayerConfig
): Promise<BaseLayer> => {
  switch (layerConfig.provider) {
    case "mapbox":
    case "maptiler":
      // use ol-mapbox-style
      const mapLayer = new LayerGroup({
        visible: layerConfig.visible,
      }); // container layer
      apply(mapLayer, layerConfig.styleUrl || layerConfig.url, {
        accessToken: layerConfig.accessToken,
      });
      mapLayer.set("id", layerConfig.id);
      mapLayer.set("kind", layerConfig.kind);
      mapLayer.set("label", layerConfig.label);

      return attachMeta(mapLayer, {
        visible: Boolean(layerConfig.visible),
        label: layerConfig.label,
        image: layerConfig.previewImage,
      });

    case "arcgis":
      // ArcGIS VectorTileServer uses z/y/x in EPSG:4326.
      function tileUrlFunction(tileCoord: unknown[]) {
        const z = tileCoord[0];
        const x = tileCoord[1];
        const y = tileCoord[2]; // ArcGIS expects standard XYZ origin at top
        return `${layerConfig.url}/tile/${z}/${y}/${x}.pbf`;
      }
      const arcgisStyleUrl = `${layerConfig.url}/resources/styles/root.json`;
      const sourceProjection = getProjection(layerConfig.projection);

      // OL VectorTile layer for ArcGIS
      const layer = new VectorTileLayer({
        source: new VectorTileSource({
          attributions:
            '© <a href="https://www.openstreetmap.org/copyright">' +
            "OpenStreetMap contributors</a>",
          projection: sourceProjection!,
          format: new MVT(),
          tileGrid: createXYZ({
            extent: sourceProjection?.getExtent(),
            tileSize: 512,
            maxZoom: 15,
          }),
          tileUrlFunction: tileUrlFunction,
        }),
        visible: layerConfig.visible,
      });

      layer.set("id", layerConfig.id);
      layer.set("kind", layerConfig.kind);
      layer.set("label", layerConfig.label);

      const layerWithMeta = attachMeta(layer, {
        visible: Boolean(layerConfig.visible),
        label: layerConfig.label,
        image: layerConfig.previewImage,
      });

      await applyStyle(layerWithMeta, arcgisStyleUrl, "esri");
      return layerWithMeta;
    case "custom":
      // assume valid style JSON or MVT endpoint; user handles mapping
      const customLayer = new LayerGroup({
        visible: layerConfig.visible,
      });
      apply(customLayer, layerConfig.styleUrl || layerConfig.url, {
        accessToken: layerConfig.accessToken,
      });
      customLayer.set("id", layerConfig.id);
      customLayer.set("kind", layerConfig.kind);
      customLayer.set("label", layerConfig.label);
      return attachMeta(customLayer, {
        visible: Boolean(layerConfig.visible),
        label: layerConfig.label,
        image: layerConfig.previewImage,
      });

    default:
      throw new Error(`Unknown vector tile provider: ${layerConfig.provider}`);
  }
};

export const getBaseRasterLayer = (layerConfig: BaseRasterLayerConfig) => {
  const layer = new TileLayer({
    visible: layerConfig.visible ?? true,
    source: new XYZ({
      url: layerConfig.url,
    }),
  });

  layer.set("id", layerConfig.id);
  layer.set("kind", layerConfig.kind);
  layer.set("label", layerConfig.label);

  const { previewImage: image, label, visible } = layerConfig;

  return attachMeta(layer, { image, label, visible: Boolean(visible) });
};

export const attachMeta = <T extends BaseLayer>(
  layer: T,
  meta: LayerMeta
): T => {
  layer.set("meta", meta);
  return layer;
};

export const getMeta = (layer: BaseLayer): LayerMeta => layer.get("meta");

export const MARKER_LAYER_ID = "marker-layer";

export const attachTileLoadErrorLogging = (
  layers: Collection<BaseLayer>,
  onError: (e: Error) => void = (e) => console.warn("Tile error", e)
) => {
  layers.forEach((layer) => {
    if ("getSource" in layer && typeof layer.getSource === "function") {
      const src = layer.getSource();
      src?.on?.("tileloaderror", onError);
    }
  });
};
