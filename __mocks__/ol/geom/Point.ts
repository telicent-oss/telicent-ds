export default class MockPoint {
  coordinates: any;

  constructor(coords: any) {
    this.coordinates = coords;
  }

  getCoordinates() {
    return this.coordinates;
  }

  setCoordinates(coords: any) {
    this.coordinates = coords;
  }

  getType() {
    return "Point";
  }

  transform(from: string, to: string) {
    // just return itself for tests
    return this;
  }

  translate(dx: number, dy: number) {
    this.coordinates = [this.coordinates[0] + dx, this.coordinates[1] + dy];
    return this;
  }

  getExtent(): [number, number, number, number] {
    const [x, y] = this.coordinates;
    return [x, y, x, y];
  }
  clone() {
    return new MockPoint([...this.coordinates] as [number, number]);
  }
}
