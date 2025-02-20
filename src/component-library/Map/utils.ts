import { max, min } from "lodash";
import { LngLatBoundsLike, LngLatLike } from "react-map-gl/maplibre";

type MinMax = "min" | "max";
type LatLng = "latitude" | "longitude";

const getMinOrMax = (
  markers: number[][],
  minOrMax: MinMax,
  latOrLng: LatLng
) => {
  const coordinates = markers.map((marker: number[]) =>
    latOrLng === "longitude" ? marker[0] : marker[1]
  );

  if (minOrMax === "max") {
    return max(coordinates);
  }
  return min(coordinates);
};

export const getBounds = (
  markers: number[][]
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
