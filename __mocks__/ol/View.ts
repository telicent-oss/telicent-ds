import { Projection } from "ol/proj";

// __mocks__/ol/View.ts
export default class MockView {
  private opts: any;
  private center: [number, number];
  private zoom: number;

  constructor(
    options: {
      center?: [number, number];
      zoom?: number;
      [key: string]: any;
    } = {}
  ) {
    this.opts = options;
    this.center = options.center ?? [0, 0];
    this.zoom = options.zoom ?? 0;
  }

  getCenter(): [number, number] {
    return this.center;
  }

  getProjection() {
    return {
      getCode: () => "EPSG:4326",
      getExtent: () => [-180, -90, 180, 90],
    };
  }

  setCenter(center: [number, number]) {
    this.center = center;
  }

  getZoom(): number {
    return this.zoom;
  }

  setZoom(zoom: number) {
    this.zoom = zoom;
  }

  get(key: string) {
    return this.opts[key];
  }

  set(key: string, value: any) {
    this.opts[key] = value;
  }
}
