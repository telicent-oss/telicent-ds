export default class MockPolygon {
  private coordinates: number[][][];

  constructor(coords: number[][][] = []) {
    // Matches real OpenLayers, which throws a bare TypeError on a null ring or
    // vertex. A lenient mock would hide the commonest bad API record.
    for (const ring of coords) {
      if (!Array.isArray(ring)) {
        throw new TypeError("Cannot read properties of null (reading 'length')");
      }
      for (const vertex of ring) {
        if (!Array.isArray(vertex)) {
          throw new TypeError("Cannot read properties of null (reading '0')");
        }
      }
    }
    this.coordinates = coords;
  }

  getCoordinates() {
    return this.coordinates;
  }

  setCoordinates(coords: number[][][]) {
    this.coordinates = coords;
  }

  getType() {
    return "Polygon";
  }

  clone() {
    // deep copy coordinates
    return new MockPolygon(
      this.coordinates.map((ring) => ring.map(([x, y]) => [x, y]))
    );
  }

  translate(dx: number, dy: number) {
    this.coordinates = this.coordinates.map((ring) =>
      ring.map(([x, y]) => [x + dx, y + dy])
    );
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

    for (const ring of this.coordinates) {
      for (const [x, y] of ring) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }

    return [minX, minY, maxX, maxY];
  }
}
