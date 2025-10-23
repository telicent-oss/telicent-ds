// __mocks__/ol/extent.ts

export type Extent = [number, number, number, number];
export type Coordinate = [number, number];

/**
 * Creates an empty extent [Infinity, Infinity, -Infinity, -Infinity]
 */
export const createEmpty = (): Extent => [
  Infinity,
  Infinity,
  -Infinity,
  -Infinity,
];

/**
 * Extends an extent to include another extent
 */
export const extend = (extent: Extent, other: Extent): Extent => [
  Math.min(extent[0], other[0]),
  Math.min(extent[1], other[1]),
  Math.max(extent[2], other[2]),
  Math.max(extent[3], other[3]),
];

/**
 * Returns the center [x, y] of an extent
 */
export const getCenter = (extent: Extent): Coordinate => [
  (extent[0] + extent[2]) / 2,
  (extent[1] + extent[3]) / 2,
];

/**
 * Returns a bounding extent from an array of coordinates
 */
export const boundingExtent = (coordinates: Coordinate[]): Extent => {
  const xs = coordinates.map((c) => c[0]);
  const ys = coordinates.map((c) => c[1]);
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
};

/**
 * Checks if a coordinate is inside an extent
 */
export const containsCoordinate = (
  extent: Extent,
  coordinate: Coordinate
): boolean => {
  const [minX, minY, maxX, maxY] = extent;
  const [x, y] = coordinate;
  return x >= minX && x <= maxX && y >= minY && y <= maxY;
};
