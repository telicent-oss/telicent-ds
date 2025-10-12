import geohash from "../../utils/geohash/geohash";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { MarkerStyle } from "../types/markers";
import { getGeneratedOlIcon } from "../styles/markers";

export enum MarkerAnchor {
  BOTTOM_MIDDLE,
  TOP_MIDDLE,
  CENTER,
}

export interface MarkerFeature {
  id: string;
  geohash: string;
  meta?: Record<string, any>;
  style?: MarkerStyle;
}

/**
 * Convert MarkerFeature to OL Feature
 */
export const markerToOLFeature = (marker: MarkerFeature): Feature<Point> => {
  // Decode geohash (strip "http://geohash.org/" if present)
  const gh = marker.geohash.includes("http")
    ? marker.geohash.split("http://geohash.org/")[1]
    : marker.geohash;
  console.log({ gh });
  const { latitude, longitude } = geohash.decode(gh);

  console.log({ latitude, longitude });
  const feature = new Feature({
    geometry: new Point(fromLonLat([longitude, latitude])),
    ...marker.meta,
  });
  feature.setId(marker.id);

  // Use the new OL marker helper for style
  const markerStyle: MarkerStyle = marker.style ?? { markerType: "pin" };
  console.log({ markerStyle });
  const style = getGeneratedOlIcon(markerStyle);

  console.log({ style });
  feature.setStyle(style);

  return feature;
};

/**
 * Convert MarkerAnchor enum to OL anchor fractions
 */
export const getAnchorFraction = (anchor: MarkerAnchor): [number, number] => {
  switch (anchor) {
    case MarkerAnchor.BOTTOM_MIDDLE:
      return [0.5, 1];
    case MarkerAnchor.TOP_MIDDLE:
      return [0.5, 0];
    case MarkerAnchor.CENTER:
    default:
      return [0.5, 0.5];
  }
};
