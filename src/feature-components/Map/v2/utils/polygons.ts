import Feature from "ol/Feature";
import Polygon from "ol/geom/Polygon";
import { PolygonFeature } from "../types/polygons";
import { MultiPolygon } from "ol/geom";
import { is3D, is4D } from "./coordinate-guards";

export const polygonToOLFeature = (
  polygon: PolygonFeature
): Feature<Polygon | MultiPolygon> => {
  const { type, coordinates, id, meta } = polygon;

  // Validate coordinate nesting against the declared type before building the
  // OL geometry (Polygon = 3D, MultiPolygon = 4D) instead of casting.
  let geometry: Polygon | MultiPolygon;
  if (type === "MultiPolygon") {
    if (!is4D(coordinates)) {
      throw new Error(
        `PolygonFeature "${id}": type "MultiPolygon" expects number[][][][] coordinates.`
      );
    }
    geometry = new MultiPolygon(coordinates);
  } else {
    if (!is3D(coordinates)) {
      throw new Error(
        `PolygonFeature "${id}": type "Polygon" expects number[][][] coordinates.`
      );
    }
    geometry = new Polygon(coordinates);
  }

  geometry.transform("EPSG:4326", "EPSG:3857");

  const feature = new Feature({
    geometry,
    ...meta,
  });

  if (id) feature.setId(id);

  return feature;
};
