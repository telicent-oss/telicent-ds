import { maxBy, minBy } from "lodash";
import { LngLatBoundsLike, LngLatLike } from "react-map-gl/maplibre";
import { LocationFeature } from "../../contexts/Location";

type MinMax = "min" | "max";
type LatLng = "latitude" | "longitude";

const getMinOrMax = (
  markers: LocationFeature[],
  minOrMax: MinMax,
  latOrLng: LatLng
) => {
  const getLatLng = (location: LocationFeature) =>
    location.properties[latOrLng];

  let feature = minBy(markers, getLatLng);

  if (minOrMax === "max") {
    feature = maxBy(markers, getLatLng);
  }

  return feature?.properties[latOrLng];
};

export const getBounds = (
  markers: LocationFeature[]
): LngLatBoundsLike | undefined => {
  const maxLat = getMinOrMax(markers, "max", "latitude");
  const minLat = getMinOrMax(markers, "min", "latitude");
  const maxLng = getMinOrMax(markers, "max", "longitude");
  const minLng = getMinOrMax(markers, "min", "longitude");

  if (!minLng || !minLat || !maxLng || !maxLat) return;

  const southWest: LngLatLike = [minLng, minLat];
  const northEast: LngLatLike = [maxLng, maxLat];
  return [southWest, northEast];
};
