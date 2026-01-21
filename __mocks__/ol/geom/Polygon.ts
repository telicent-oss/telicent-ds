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
  getExtent(): [number, number, number, number] {
    if (!this.coordinates.length) {
      return [0, 0, 0, 0];
    }

    const flat = this.coordinates.flat(2);

    const xs: number[] = [];
    const ys: number[] = [];

    for (let i = 0; i < flat.length; i += 2) {
      xs.push(flat[i]);
      ys.push(flat[i + 1]);
    }

    return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
  }
}
