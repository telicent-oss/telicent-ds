/**
 * Runtime guards for GeoJSON-style coordinate nesting.
 *
 * Depth maps to geometry type:
 *   1D  number[]        — a single position [lon, lat]
 *   2D  number[][]      — LineString / a single Polygon ring
 *   3D  number[][][]    — MultiLineString / Polygon
 *   4D  number[][][][]  — MultiPolygon
 *
 * Use these to check a feature's `coordinates` against its declared `type`
 * before handing them to OpenLayers, rather than an unchecked `as` cast
 * (which can mask malformed input and surface as an opaque OL error later).
 */
export function is1D(coords: unknown): coords is number[] {
  return Array.isArray(coords) && typeof coords[0] === "number";
}

export function is2D(coords: unknown): coords is number[][] {
  return Array.isArray(coords) && coords.length > 0 && is1D(coords[0]);
}

export function is3D(coords: unknown): coords is number[][][] {
  return Array.isArray(coords) && coords.length > 0 && is2D(coords[0]);
}

export function is4D(coords: unknown): coords is number[][][][] {
  return Array.isArray(coords) && coords.length > 0 && is3D(coords[0]);
}
