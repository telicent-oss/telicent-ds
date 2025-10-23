import type { Map as OlMap } from "ol";
import type Feature from "ol/Feature";
import { getCenter } from "ol/extent";
import { getWidth, getHeight } from "ol/extent";
import { easeOut } from "ol/easing";

export const panToFeature = (map: OlMap, feature: Feature, zoom = 15) => {
  const geometry = feature.getGeometry();
  if (!geometry) return;

  const view = map.getView();
  const extent = geometry.getExtent();
  const center = getCenter(extent);

  view.animate({
    center,
    zoom,
    duration: 500,
  });
};

export const panToFeatures = (
  map: OlMap,
  features: Feature[],
  padding = [80, 80, 80, 80]
) => {
  if (!features.length) return;

  const extents = features
    .map((f) => f.getGeometry()?.getExtent())
    .filter((e): e is [number, number, number, number] => !!e);

  if (!extents.length) return;

  // combine extents
  const combined = extents.reduce(
    (acc, e) => [
      Math.min(acc[0], e[0]),
      Math.min(acc[1], e[1]),
      Math.max(acc[2], e[2]),
      Math.max(acc[3], e[3]),
    ],
    extents[0]
  );

  const view = map.getView();
  const mapSize = map.getSize();
  if (!mapSize) return;

  // calculate the target resolution that fits the extent in the map
  const [mapWidth, mapHeight] = mapSize;
  const extentWidth = getWidth(combined);
  const extentHeight = getHeight(combined);

  // nominal resolutions of the tile grid
  const resolutions = view.getResolutions?.(); // might be undefined

  // choose resolution that fits extent, snapping to tile grid if possible
  let targetResolution = Math.max(
    extentWidth / (mapWidth - padding[1] - padding[3]),
    extentHeight / (mapHeight - padding[0] - padding[2])
  );

  if (resolutions) {
    // snap to nearest resolution
    targetResolution = resolutions.reduce((prev, curr) =>
      Math.abs(curr - targetResolution) < Math.abs(prev - targetResolution)
        ? curr
        : prev
    );
  }
  view.fit(combined, { padding, duration: 0 }); // instant, correct resolution

  // animate fit with snapped resolution
  view.animate({
    center: view.getCenter(),
    duration: 600,
    easing: easeOut,
  }); // smooth visual motion
};
