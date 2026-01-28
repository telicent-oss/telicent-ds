import type { Map as OlMap } from "ol";
import type Geometry from "ol/geom/Geometry";
import ol from "ol";
import { Extent, getWidth } from "ol/extent";
import type Feature from "ol/Feature";
import BaseLayer from "ol/layer/Base";
import Point from "ol/geom/Point";

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
  const { duration = 600, padding = [50, 50, 50, 50] } = options;
  const geometry = feature.getGeometry();
  if (!geometry) return;

  const view = map.getView();
  if (!view) return;

  const projection = view.getProjection();
  const worldExtent = projection.getExtent();
  const worldWidth = getWidth(worldExtent);

  // Normalizes a longitude (X) to the world extent
  const normalizeX = (x: number) => {
    while (x < worldExtent[0]) x += worldWidth;
    while (x > worldExtent[2]) x -= worldWidth;
    return x;
  };

  // Determine extent
  let extent: Extent;
  if (geometry instanceof Point) {
    const coords = geometry.getCoordinates();
    extent = [coords[0], coords[1], coords[0], coords[1]];
  } else {
    const geomExtent = geometry.getExtent();
    if (!geomExtent) return;

    // Normalize X for antimeridian
    let x0 = normalizeX(geomExtent[0]);
    let x1 = normalizeX(geomExtent[2]);

    // Handle antimeridian crossing
    const span = x1 - x0;
    if (span > worldWidth / 2) {
      const wrappedX0 = x0 + worldWidth;
      const centerX = normalizeX((wrappedX0 + x1) / 2);
      x0 = centerX;
      x1 = centerX;
    }

    extent = [x0, geomExtent[1], x1, geomExtent[3]];
  }

  view.fit(extent, {
    duration,
    padding,
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
  const { padding = [50, 50, 50, 50], duration = 600 } = options;

  if (!features.length) return;

  const view = map.getView();
  if (!view) return;

  const projection = view.getProjection();
  const worldExtent = projection.getExtent();
  const worldWidth = getWidth(worldExtent);

  const normalizeX = (x: number) => {
    while (x < worldExtent[0]) x += worldWidth;
    while (x > worldExtent[2]) x -= worldWidth;
    return x;
  };

  // Extract and normalize extents
  const extents = features
    .map((f) => f.getGeometry()?.getExtent())
    .filter((e): e is [number, number, number, number] => !!e)
    .map(
      (e) =>
        [normalizeX(e[0]), e[1], normalizeX(e[2]), e[3]] as [
          number,
          number,
          number,
          number
        ]
    );

  if (!extents.length) return;

  // Detect if X span crosses the world midpoint
  let combinedExtent: [number, number, number, number] = extents[0];
  for (const e of extents.slice(1)) {
    const x0 = e[0],
      x1 = e[2];
    let c0 = combinedExtent[0],
      c1 = combinedExtent[2];

    // If the span is bigger than half the world, wrap it
    if (x1 - x0 > worldWidth / 2) {
      combinedExtent[0] = Math.max(c0, x0);
      combinedExtent[2] = Math.min(c1, x1);
    } else {
      combinedExtent[0] = Math.min(c0, x0);
      combinedExtent[2] = Math.max(c1, x1);
    }

    combinedExtent[1] = Math.min(combinedExtent[1], e[1]);
    combinedExtent[3] = Math.max(combinedExtent[3], e[3]);
  }

  // view.setZoom(zoom);

  view.fit(combinedExtent, {
    padding,
    duration,
  });
};
