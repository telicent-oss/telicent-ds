export default class MockLineString {
  private coordinates: number[][];

  constructor(coords: number[][] = []) {
    // Real OpenLayers reads coords[i][0] while flattening, so a null or
    // non-array vertex throws a bare TypeError. A lenient mock here would let
    // a bad API record look survivable in tests and take the map down in a
    // browser.
    for (const vertex of coords) {
      if (!Array.isArray(vertex)) {
        throw new TypeError("Cannot read properties of null (reading '0')");
      }
    }
    this.coordinates = coords;
  }

  getCoordinates() {
    return this.coordinates;
  }

  setCoordinates(coords: number[][]) {
    this.coordinates = coords;
  }

  getType() {
    return "LineString";
  }

  clone() {
    return new MockLineString(
      this.coordinates.map(([x, y]) => [x, y])
    );
  }

  translate(dx: number, dy: number) {
    this.coordinates = this.coordinates.map(([x, y]) => [x + dx, y + dy]);
    return this;
  }

  transform() {
    return this;
  }

  getExtent(): [number, number, number, number] {
    if (!this.coordinates.length) {
      // What real OpenLayers returns for an empty geometry. Returning
      // [0, 0, 0, 0] here hid a non-terminating loop in normalizeX from the
      // entire test suite.
      return [Infinity, Infinity, -Infinity, -Infinity];
    }

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for (const [x, y] of this.coordinates) {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }

    return [minX, minY, maxX, maxY];
  }
}
