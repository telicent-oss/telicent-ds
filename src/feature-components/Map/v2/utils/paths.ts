import Feature from "ol/Feature";
import LineString from "ol/geom/LineString";
import { MultiLineString, Point } from "ol/geom";
import { Fill, Icon, Stroke, Style } from "ol/style";
import RegularShape from "ol/style/RegularShape";
import { DirectionMarker, PathFeature, PathStyle } from "../types/paths";
import { is2D, is3D } from "./coordinate-guards";
import { MalformedFeatureError } from "./errors";

const buildDirectionImage = (
  marker: DirectionMarker | undefined,
  color: string,
  size: number,
  rotation: number
) => {
  if (marker?.type === "svg") {
    // rotation is clockwise from north. The markup points east, so subtract a quarter turn.
    return new Icon({
      src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(marker.markup)}`,
      rotation: rotation - Math.PI / 2,
      rotateWithView: true,
      scale: size / 12,
    });
  }

  return new RegularShape({
    points: 3,
    radius: size,
    fill: new Fill({ color }),
    rotation,
    rotateWithView: true,
  });
};

const getDirectionStyles = (
  geometry: LineString | MultiLineString,
  style: PathStyle
): Style[] => {
  const { direction } = style;
  if (!direction) return [];

  const color = direction.color ?? style.color;
  const size = direction.size ?? 10;
  const marker = direction.marker;

  const lines =
    geometry.getType() === "MultiLineString"
      ? (geometry as MultiLineString).getCoordinates()
      : [(geometry as LineString).getCoordinates()];

  const arrows: Style[] = [];

  for (const coords of lines) {
    for (let i = 0; i < coords.length - 1; i++) {
      const start = coords[i];
      const end = coords[i + 1];
      const midX = (start[0] + end[0]) / 2;
      const midY = (start[1] + end[1]) / 2;
      const rotation = Math.atan2(end[0] - start[0], end[1] - start[1]);

      arrows.push(
        new Style({
          geometry: new Point([midX, midY]),
          image: buildDirectionImage(marker, color, size, rotation),
        })
      );
    }
  }

  return arrows;
};

export const pathToOLFeature = (
  path: PathFeature
): Feature<LineString | MultiLineString> => {
  const { type, coordinates, id, meta, style } = path;

  let geometry: LineString | MultiLineString;
  if (type === "MultiLineString") {
    if (!is3D(coordinates)) {
      throw new MalformedFeatureError(
        id,
        `PathFeature "${id}": type "MultiLineString" expects number[][][] coordinates.`
      );
    }
    geometry = new MultiLineString(coordinates);
  } else {
    if (!is2D(coordinates)) {
      throw new MalformedFeatureError(
        id,
        `PathFeature "${id}": type "LineString" expects number[][] coordinates.`
      );
    }
    geometry = new LineString(coordinates);
  }

  geometry.transform("EPSG:4326", "EPSG:3857");

  const feature = new Feature({
    geometry,
    ...meta,
  });

  if (id) feature.setId(id);

  if (style) {
    const strokeStyle = new Style({
      stroke: new Stroke({
        color: style.color,
        width: style.width ?? 2,
        lineDash: style.lineDash,
        lineCap: style.lineCap ?? "round",
        lineJoin: style.lineJoin ?? "round",
      }),
    });

    // Not applied with setStyle(): a feature style would override the map's pathStyle.
    if (style.direction) {
      feature.set("originalStyle", [
        strokeStyle,
        ...getDirectionStyles(geometry, style),
      ]);
    } else {
      feature.set("originalStyle", strokeStyle);
    }
  }

  return feature;
};
