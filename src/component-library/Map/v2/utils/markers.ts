import geohash from "../../utils/geohash/geohash";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { MarkerFeature, MarkerStyle } from "../types/markers";
import { getGeneratedOlIcon } from "../styles/markers";

export enum MarkerAnchor {
  BOTTOM_MIDDLE,
  TOP_MIDDLE,
  CENTER,
}

/**
 * Convert MarkerFeature to OL Feature
 */
export const markerToOLFeature = (marker: MarkerFeature): Feature<Point> => {
  // Decode geohash (strip "http://geohash.org/" if present)
  const gh = marker.geohash.includes("http")
    ? marker.geohash.split("http://geohash.org/")[1]
    : marker.geohash;

  const { latitude, longitude } = geohash.decode(gh);

  const feature = new Feature({
    geometry: new Point(fromLonLat([longitude, latitude])),
    ...marker.meta,
  });
  feature.setId(marker.id);

  // Use the new OL marker helper for style
  const markerStyle: MarkerStyle = marker.style ?? { markerType: "pin" };
  const style = getGeneratedOlIcon(markerStyle);

  feature.set("originalStyle", style); // This is needed when selecting Features
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
