import Feature from "ol/Feature";
import Polygon from "ol/geom/Polygon";
import { PolygonFeature } from "../types/polygons";
import { MultiPolygon } from "ol/geom";

export const polygonToOLFeature = (
  polygon: PolygonFeature
): Feature<Polygon | MultiPolygon> => {
  const { type, coordinates, id, meta } = polygon;

  const geometry =
    type === "MultiPolygon"
      ? new MultiPolygon(coordinates)
      : new Polygon(coordinates);

  const feature = new Feature({
    geometry,
    ...meta,
  });

  if (id) feature.setId(id);

  return feature;
};
