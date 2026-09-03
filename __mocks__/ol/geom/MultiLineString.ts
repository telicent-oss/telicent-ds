export default class MockMultiLineString {
  private coordinates: number[][][];

  constructor(coords: number[][][] = []) {
    this.coordinates = coords;
  }

  getCoordinates() {
    return this.coordinates;
  }

  setCoordinates(coords: number[][][]) {
    this.coordinates = coords;
  }

  getType() {
    return "MultiLineString";
  }

  clone() {
    return new MockMultiLineString(
      this.coordinates.map((line) => line.map(([x, y]) => [x, y]))
    );
  }

  translate(dx: number, dy: number) {
    this.coordinates = this.coordinates.map((line) =>
      line.map(([x, y]) => [x + dx, y + dy])
    );
    return this;
  }

  transform() {
    return this;
  }

  getExtent(): [number, number, number, number] {
    if (!this.coordinates.length) {
      return [0, 0, 0, 0];
    }

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for (const line of this.coordinates) {
      for (const [x, y] of line) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }

    return [minX, minY, maxX, maxY];
  }
}
