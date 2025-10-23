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
}
