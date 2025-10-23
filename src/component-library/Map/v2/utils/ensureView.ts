import { Coordinate } from "ol/coordinate";
import { fromLonLat } from "ol/proj";
import View from "ol/View";

export const ensureView = (zoom: number = 2, center: Coordinate = [0, 0]) => {
  if (!center) {
    console.info("Center coordinates not set, using default");
  }

  return new View({
    zoom: zoom,
    center: fromLonLat(center),
    minZoom: 1,
    maxZoom: 18,
  });
};
