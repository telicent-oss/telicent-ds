import { parseSVG, makeAbsolute } from "svg-path-parser";
import { MarkerStyle, MarkerType } from "../types/markers";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";

const iconCache = new Map<string, string>();

type IconPlacement = {
  cx: number;
  cy: number;
  size: number;
};

const ICON_PLACEMENT: IconPlacement = {
  cx: 12,
  cy: 12,
  size: 12,
};

// Convert SVG string to data URL
const svgToDataUrl = (svg: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const makePinSvg = ({
  size = 28,
  backgroundColor = "#FF6600", // pin body
  color = "#fff", // icon color
  innerSvg,
}: MarkerStyle): string => {
  const icon = innerSvg
    ? scaleAndCenterPath(innerSvg, color, {
        cx: 12,
        cy: 9,
        size: 9, // slightly smaller than circle icon
      })
    : "";

  return `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${size}"
  height="${size}"
  viewBox="0 0 24 24"
>
  <!-- pin body -->
  <path
    d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"
    fill="${backgroundColor}"
  />

  <!-- subtle head highlight (suggested badge) -->
  <circle
    cx="12"
    cy="9"
    r="6"
    fill="rgba(255,255,255,0.18)"
  />

  <!-- icon -->
  ${icon}
</svg>
`;
};

/**
 * Extracts a path `d` from a raw SVG string.
 */
export const sanitizeFaSvg = (rawSvg: string): string => {
  // If <path> exists, just extract d
  const pathMatch = rawSvg.match(/<path[^>]*d="([^"]+)"/);
  if (pathMatch) return pathMatch[1];

  // If raw d commands exist, use as-is
  const dMatch = rawSvg.match(/M[\s\S]+/);
  if (dMatch) return dMatch[0];

  throw new Error("No path data found in SVG");
};

/**
 * Compute the bounding box of a path `d` string.
 */
export const getPathBBox = (d: string) => {
  const commands = makeAbsolute(parseSVG(d));
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;

  commands.forEach((c) => {
    const points: [number, number][] = [];
    if ("x" in c && "y" in c) points.push([c.x, c.y]);
    if ("x1" in c && "y1" in c) points.push([c.x1, c.y1]);
    if ("x2" in c && "y2" in c) points.push([c.x2, c.y2]);
    points.forEach(([x, y]) => {
      if (x != null && y != null) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    });
  });

  return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
};

/**
 * Scale, center, and color the inner path into a target viewBox.
 */
const scaleAndCenterPath = (
  rawSvg: string,
  color = "#F092D5",
  placement: IconPlacement
) => {
  const d = sanitizeFaSvg(rawSvg);
  const bbox = getPathBBox(d);

  // scale to fit inside targetSize
  const scale = Math.min(
    placement.size / bbox.width,
    placement.size / bbox.height
  );

  const cx = bbox.minX + bbox.width / 2;
  const cy = bbox.minY + bbox.height / 2;

  return `
    <g
      transform="
        translate(${placement.cx}, ${placement.cy})
        scale(${scale})
        translate(${-cx}, ${-cy})
      "
      fill="${color}"
    >
      <path d="${d}" />
    </g>
  `;
};

export const makeCircleSvg = ({
  size = 28,
  backgroundColor = "#FF6600",
  color = "#fff",
  strokeWidth = 2,
  innerSvg,
}: MarkerStyle): string => {
  const inner = innerSvg
    ? scaleAndCenterPath(innerSvg, color, ICON_PLACEMENT)
    : "";

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10"
          fill="${backgroundColor}" stroke="${color}" stroke-width="${strokeWidth}"/>
  ${inner}
</svg>
`;
};

const makeIconOnlySvg = ({
  size = 28,
  innerSvg,
  color = "#FF6600",
}: MarkerStyle): string => {
  const inner = innerSvg
    ? scaleAndCenterPath(innerSvg, color, ICON_PLACEMENT)
    : "";

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">
    ${inner}
</svg>
`;
};

const iconGenerators: Record<MarkerType, (s: MarkerStyle) => string> = {
  pin: makePinSvg,
  circle: makeCircleSvg,
  icon: makeIconOnlySvg,
};

const MARKER_SCALE: Record<MarkerType, number> = {
  pin: 1.5,
  circle: 1.0,
  icon: 1.0,
};

const getMarkerScale = (type?: unknown): number => {
  if (typeof type === "string" && type in MARKER_SCALE) {
    return MARKER_SCALE[type as MarkerType];
  }
  return MARKER_SCALE.pin; // safe default
};

const getIconGenerator = (type?: unknown): ((s: MarkerStyle) => string) => {
  if (typeof type === "string" && type in iconGenerators) {
    return iconGenerators[type as MarkerType];
  }
  return iconGenerators.pin;
};

export const getGeneratedOlIcon = (style: MarkerStyle = {}): Style => {
  // The markerType are for ontology app, not anything to do with maps.
  const type = "pin";
  const inner = style.innerSvg ?? "";

  const useFallback = !inner && style.fallbackText;

  let svg: string;

  if (useFallback) {
    // fallback text inside a circle
    svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 28">
        <circle cx="12" cy="12" r="10" fill="${
          style.backgroundColor ?? "#FF6600"
        }" stroke="${style.color ?? "#fff"}" stroke-width="2"/>
        <text x="12" y="13" text-anchor="middle" dominant-baseline="middle" font-size="8" font-weight="600" fill="${
          style.color ?? "#fff"
        }">${style.fallbackText}</text>
      </svg>
    `;
  } else {
    // pin/circle/icon SVG with HTML inside
    const generator = getIconGenerator(type);
    svg = generator({ ...style, innerSvg: inner });
  }

  const key = `${type}|${inner}|${JSON.stringify(style)}`;
  let url = iconCache.get(key);
  if (!url) {
    url = svgToDataUrl(svg);
    iconCache.set(key, url);
  }

  return new Style({
    image: new Icon({ src: url, scale: getMarkerScale(type) }),
  });
};

// Create OL Feature with style
export const createOlMarker = (
  id: string,
  coords: [number, number],
  style: MarkerStyle
): Feature<Point> => {
  const feature = new Feature({
    geometry: new Point(coords),
    id,
  });
  feature.setStyle(getGeneratedOlIcon(style));
  return feature;
};
