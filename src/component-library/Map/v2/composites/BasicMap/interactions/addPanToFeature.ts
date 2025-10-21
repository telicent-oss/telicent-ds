import type { Map as OlMap } from "ol";
import type Geometry from "ol/geom/Geometry";
import ol from "ol";
import { Extent, getCenter } from "ol/extent";
import type Feature from "ol/Feature";
import BaseLayer from "ol/layer/Base";

export const getFeaturesById = (
  layers: BaseLayer[],
  ids: string[]
): Feature[] => {
  const features: Feature[] = [];

  layers.forEach((layer) => {
    if ("getSource" in layer && typeof layer.getSource === "function") {
      const source = layer.getSource();
      if (!source?.getFeatureById) return;

      ids.forEach((id) => {
        const feature = source.getFeatureById(id);
        if (feature) features.push(feature);
      });
    }
  });

  return features;
};

const getNearestResolution = (view: ol.View, targetRes: number | undefined) => {
  if (!targetRes) return targetRes;
  const resolutions = view.getResolutions();
  if (!resolutions) return targetRes;
  return resolutions.reduce((prev, curr) =>
    Math.abs(curr - targetRes) < Math.abs(prev - targetRes) ? curr : prev
  );
};

const getBestZoomForExtent = (map: OlMap, extent: Extent): number => {
  const view = map.getView();

  const resolutionForExtent = view.getResolutionForExtent(
    extent,
    map.getSize()
  );
  if (!resolutionForExtent) return view.getZoom() ?? 0;

  const nearestRes = view.getResolutions()
    ? getNearestResolution(view, resolutionForExtent)
    : resolutionForExtent;

  const zoom = view.getZoomForResolution(
    nearestRes ?? view.getResolution() ?? 0
  );
  return zoom ?? view.getZoom() ?? 0;
};

export const panToFeature = (
  map: OlMap,
  feature: Feature<Geometry>,
  options: PanOptions = {}
): void => {
  const geometry = feature.getGeometry();
  if (!geometry) return;

  const { padding = [50, 50, 50, 50], maxZoom = 16, duration = 600 } = options;
  const extent = geometry.getExtent();
  const view = map.getView();
  if (!view) return;

  const bestZoom = getBestZoomForExtent(map, extent);
  const zoom = Math.min(bestZoom, maxZoom);

  view.fit(extent, {
    padding,
    maxZoom: zoom,
    duration,
  });
};

interface PanOptions {
  padding?: [number, number, number, number];
  maxZoom?: number;
  duration?: number;
}

/**
 * Smoothly pans and zooms the map to fit one or more features.
 */
export const panToFeatures = (
  map: OlMap,
  features: Feature<Geometry>[],
  options: PanOptions = {}
): void => {
  const { padding = [50, 50, 50, 50], maxZoom = 16, duration = 600 } = options;

  if (!features.length) return;

  const extents = features
    .map((f) => f.getGeometry()?.getExtent())
    .filter((e): e is [number, number, number, number] => !!e);

  if (!extents.length) return;

  // combine extents
  const combinedExtent = extents.reduce(
    (acc, e) => [
      Math.min(acc[0], e[0]),
      Math.min(acc[1], e[1]),
      Math.max(acc[2], e[2]),
      Math.max(acc[3], e[3]),
    ],
    extents[0]
  );

  const view = map.getView();
  if (!view) return;

  const bestZoom = getBestZoomForExtent(map, combinedExtent);
  const zoom = Math.min(bestZoom, maxZoom);

  view.fit(combinedExtent, {
    padding,
    maxZoom: zoom,
    duration,
  });
};

// export const panToFeature = (map: OlMap, feature: Feature) => {
//   const geometry = feature.getGeometry();
//   if (!geometry) return;
//
//   const extent = geometry.getExtent();
//   const view = map.getView();
//
//   view.fit(extent, { padding: [50, 50, 50, 50] });
// };
//
// export const panToFeatures = (
//   map: OlMap,
//   features: Feature[],
//   padding = [50, 50, 50, 50],
//   maxZoom = 16
// ) => {
//   if (!features.length) return;
//
//   const extents = features
//     .map((f) => f.getGeometry()?.getExtent())
//     .filter((e): e is [number, number, number, number] => !!e);
//
//   if (!extents.length) return;
//
//   // combine extents
//   const combined = extents.reduce(
//     (acc, e) => [
//       Math.min(acc[0], e[0]),
//       Math.min(acc[1], e[1]),
//       Math.max(acc[2], e[2]),
//       Math.max(acc[3], e[3]),
//     ],
//     extents[0]
//   );
//
//   const view = map.getView();
//   view.fit(combined, {
//     padding,
//     maxZoom,
//     duration: 0,
//   });
// };
