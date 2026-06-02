import type { Map as OlMap } from "ol";
import type Geometry from "ol/geom/Geometry";
import { extend, Extent, getWidth } from "ol/extent";
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

export const fitToFeature = (
  map: OlMap,
  feature: Feature<Geometry>,
  options: PanOptions = {}
): void => {
  const { duration = 600, maxZoom = 16, padding = [50, 50, 50, 50] } = options;
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
    maxZoom,
    duration,
    padding,
  });
};

interface PanOptions {
  padding?: [number, number, number, number];
  maxZoom?: number;
  duration?: number;
}

export const fitToFeatures = (
  map: OlMap,
  features: Feature<Geometry>[],
  options: PanOptions = {}
): void => {
  const { padding = [50, 50, 50, 50], maxZoom = 16, duration = 600 } = options;
  if (!features.length) return;

  const view = map.getView();
  if (!view) return;

  const projection = view.getProjection();
  const worldExtent = projection.getExtent();
  if (!worldExtent) return;

  const worldWidth = getWidth(worldExtent);

  let combinedExtent: [number, number, number, number] | null = null;
  let refCenterX: number | null = null;

  for (const feature of features) {
    const geom = feature.getGeometry();
    if (!geom) continue;

    const extent = geom.getExtent();
    const centerX = (extent[0] + extent[2]) / 2;

    if (refCenterX === null) {
      refCenterX = centerX;
    }

    // determine which world copy to use
    const delta = centerX - refCenterX;
    const worldShift = Math.round(delta / worldWidth) * worldWidth;

    // clone + shift geometry
    const shifted = geom.clone();
    shifted.translate(-worldShift, 0);

    const shiftedExtent = shifted.getExtent() as [
      number,
      number,
      number,
      number
    ];

    if (!combinedExtent) {
      combinedExtent = [...shiftedExtent];
    } else {
      extend(combinedExtent, shiftedExtent);
      refCenterX = (combinedExtent[0] + combinedExtent[2]) / 2;
    }
  }

  if (!combinedExtent) return;

  view.fit(combinedExtent, {
    padding,
    maxZoom,
    duration,
  });
};
