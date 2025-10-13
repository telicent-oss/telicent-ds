import { View } from "ol";
import { Coordinate } from "ol/coordinate";
import { fromLonLat } from "ol/proj";

export const ensureView = (zoom: number, center: Coordinate = [0, 0]) => {
  const defaultZoom = 2;

  if (!center) {
    console.info("Center coordinates not set, using default");
  }

  return new View({
    zoom: zoom ?? defaultZoom,
    center: fromLonLat(center),
    minZoom: 2,
    maxZoom: 18,
  });
};
