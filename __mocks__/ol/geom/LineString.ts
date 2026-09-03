export default class MockLineString {
  private coordinates: number[][];

  constructor(coords: number[][] = []) {
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
      return [0, 0, 0, 0];
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
