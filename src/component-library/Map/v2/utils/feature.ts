import Style, { StyleLike } from "ol/style/Style";
import {
  DEFAULT_MARKER_ICON_URL,
  defaultVectorStyle,
} from "../styles/defaults";
import { StyleConfig } from "../types/map-types";
import { Fill, Stroke } from "ol/style";
import CircleStyle from "ol/style/Circle";
import BaseLayer from "ol/layer/Base";
import Text from "ol/style/Text";
import VectorLayer from "ol/layer/Vector";
import { MarkerFeature } from "../types/markers";
import geohash from "../../utils/geohash/geohash";
import { OverlayFeatureConfig } from "../types/overlays";

export const convertMarkerToFeature = (marker: MarkerFeature) => {
  console.log({ convert: marker });
  const gh = marker.geohash.includes("http")
    ? marker.geohash.split("http://geohash.org/")[1]
    : marker.geohash;
  const { latitude, longitude } = geohash.decode(gh);
  return {
    type: "Point",
    coordinates: [longitude, latitude], // TODO: convert from geohash
    label: marker.meta?.label, // TODO create a getMeta?
    marker: marker?.style ?? DEFAULT_MARKER_ICON_URL,
    meta: marker.meta,
  } as OverlayFeatureConfig;
};

export const toOlStyle = (
  styleConfig?: StyleConfig,
  feature?: unknown
): StyleLike => {
  if (!styleConfig) return defaultVectorStyle;

  if (typeof styleConfig === "function") {
    const result = styleConfig(feature);
    return toOlStyle(result);
  }

  return new Style({
    fill: new Fill({ color: styleConfig.fillColor }),
    stroke: new Stroke({
      color: styleConfig.strokeColor,
      width: styleConfig.strokeWidth,
    }),
    image: new CircleStyle({
      radius: styleConfig.radius || 5,
      fill: new Fill({ color: styleConfig.fillColor }),
    }),
    text: new Text({ text: styleConfig.text }),
  });
};

export const findVectorLayerById = (
  layers: BaseLayer[],
  id: string
): VectorLayer | undefined =>
  layers.find((l) => l.get("id") === id) as VectorLayer | undefined;
