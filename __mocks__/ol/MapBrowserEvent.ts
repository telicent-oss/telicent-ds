export type Pixel = [number, number];
export type Coordinate = [number, number];

/**
 *  * Minimal interface for Map (so MapBrowserEvent can refer to it)
 *   */
export interface MockMap {
  // Only add methods you actually use in tests
  getView?: () => any;
}

export interface MapBrowserEventOptions {
  type?: string;
  map?: MockMap;
  pixel?: Pixel;
  coordinate?: Coordinate;
  originalEvent?: Partial<MouseEvent | PointerEvent | KeyboardEvent>;
}

/**
 *  * Minimal mock for MapBrowserEvent
 *   */
export class MockMapBrowserEvent {
  type: string;
  map: MockMap | null;
  pixel: Pixel | null;
  coordinate: Coordinate | null;
  originalEvent: Partial<MouseEvent | PointerEvent | KeyboardEvent>;

  constructor(opts: MapBrowserEventOptions = {}) {
    this.type = opts.type ?? "click";
    this.map = opts.map ?? null;
    this.pixel = opts.pixel ?? null;
    this.coordinate = opts.coordinate ?? null;
    this.originalEvent = opts.originalEvent ?? {};
  }

  // Methods used by interactions
  getMap(): MockMap | null {
    return this.map;
  }

  getPixel(): Pixel | null {
    return this.pixel;
  }

  getCoordinate(): Coordinate | null {
    return this.coordinate;
  }
}
