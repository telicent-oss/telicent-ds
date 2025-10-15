export default class MockPolygon {
  coordinates: any[];

  constructor(coords: any[] = []) {
    this.coordinates = coords;
  }

  // OpenLayers Polygon methods you may use in tests
  getCoordinates() {
    return this.coordinates;
  }

  setCoordinates(coords: any[]) {
    this.coordinates = coords;
  }

  // Add other methods as needed, e.g. getExtent(), etc.
}
