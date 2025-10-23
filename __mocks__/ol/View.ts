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
