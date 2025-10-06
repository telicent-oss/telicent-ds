// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MarkerProps } from "react-map-gl/maplibre";
import React, { forwardRef } from "react";

import { createSerializer } from '@emotion/jest'
expect.addSnapshotSerializer(
  createSerializer({
    // optional: removeEmotionAttributes: true,
    // optional: classNameReplacer: new Map([['css-', '']])
  })
)

configure({ testIdAttribute: "id" });

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.SVGElement.prototype.getComputedTextLength = () => 100;
globalThis.URL.createObjectURL = globalThis.URL.createObjectURL || jest.fn();
type MockMarkerProps = {
  latitude: MarkerProps["latitude"];
  longitude: MarkerProps["longitude"];
  style: MarkerProps["style"];
  children: React.ReactNode;
};

jest.mock('maplibre-gl/dist/maplibre-gl.css', () => { });
// const MockMap = forwardRef(({ children }: { children: React.ReactNode }, ref) => <button ref={ref} id="telicentMap">{children}</button>);
jest.mock("react-map-gl/maplibre", () => ({
  ...jest.requireActual("react-map-gl/maplibre"),
  __esModule: true,
  // default: MockMap,
  useMap: jest.fn(),
  Source: ({ children, id, data, ...otherProps }: { children: React.ReactNode, id: string, data: unknown }) => (
    <div
      id={id}
      data-features={JSON.stringify(data)}
      data-other-props={otherProps}
    >
      {children}
    </div>
  ),
  Marker: ({ latitude, longitude, style, children }: MockMarkerProps) => (
    <div data-latitude={latitude} data-longitude={longitude} style={style}>
      {children}
    </div>
  ),
  Layer: ({ children, id, ...props }: { children: React.ReactNode, id: string }) => (
    <div id={id} data-props={JSON.stringify(props)}>
      {children}
    </div>
  ),
  // MapProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,

}));

globalThis.BroadcastChannel = class {
  constructor(channelName: string) {
    this.name = channelName;
  }

  name: string;
  onmessage: ((ev: MessageEvent) => void) | null = null;

  postMessage = (message: any) => {
    // no-op or you can log for debug
  };

  close = () => {
    // no-op
  };

  addEventListener = (type: string, listener: any) => {
    if (type === 'message') this.onmessage = listener;
  };

  removeEventListener = (type: string, listener: any) => {
    if (type === 'message') this.onmessage = null;
  };
} as any;

// OL mocks
jest.mock("ol/Map", () => {
  return jest.fn().mockImplementation(() => ({
    setTarget: jest.fn(),
  }));
});

class MockBaseLayer {
  private meta: any;
  set(key: string, value: any) {
    if (key === "meta") this.meta = value;
  }
  get(key: string) {
    if (key === "meta") return this.meta;
    return undefined;
  }
}

jest.mock("ol/layer/Tile", () => ({
  __esModule: true,
  default: MockBaseLayer,
}));

jest.mock("ol/layer/Vector", () => ({
  __esModule: true,
  default: MockBaseLayer,
}));

jest.mock("ol/layer/VectorTile", () => ({
  __esModule: true,
  default: MockBaseLayer,
}));

jest.mock("ol/layer/Group", () => ({
  __esModule: true,
  default: MockBaseLayer,
}));

jest.mock("ol/source/VectorTile", () => {
  return jest.fn().mockImplementation(() => ({
    // you can stub any methods used in your code
    setUrl: jest.fn(),
    getTileGrid: jest.fn(),
  }));
});

jest.mock("ol/format/MVT", () => {
  return jest.fn().mockImplementation(() => ({}));
});

jest.mock("ol/layer/Group", () => {
  return jest.fn().mockImplementation(() => ({
    set: jest.fn(),
    get: jest.fn(),
  }));
});

jest.mock("ol/source/Vector", () => ({
  __esModule: true,
  default: class MockVectorSource {
    constructor() { }
  },
}));

jest.mock("ol/source", () => {
  class MockOSM {
    constructor(options?: any) { Object.assign(this, options); }
  }

  class MockXYZ {
    constructor(options?: any) { Object.assign(this, options); }
  }

  return {
    __esModule: true,
    OSM: MockOSM,
    XYZ: MockXYZ,
  };
});

jest.mock("ol/style", () => {
  class MockCircle {
    constructor(options: any) {
      Object.assign(this, options);
    }
  }

  class MockFill {
    constructor(options: any) { Object.assign(this, options); }
  }

  class MockStroke {
    constructor(options: any) { Object.assign(this, options); }
  }

  class MockStyle {
    constructor(options: any) { Object.assign(this, options); }
  }

  class MockText {
    constructor(options: any) { Object.assign(this, options); }
  }

  return {
    __esModule: true,
    Circle: MockCircle,
    Fill: MockFill,
    Stroke: MockStroke,
    Style: MockStyle,
    Text: MockText,
  };
});

jest.mock('ol/style/Fill', () => ({ __esModule: true, default: class { } }));
jest.mock('ol/style/Stroke', () => ({ __esModule: true, default: class { } }));
jest.mock('ol/style/Style', () => ({ __esModule: true, default: class { } }));
jest.mock('ol/style/Text', () => ({ __esModule: true, default: class { } }));

jest.mock("ol/Feature", () => jest.fn().mockImplementation(() => ({})));

jest.mock("ol/proj", () => jest.fn().mockImplementation(() => ({})));

jest.mock("ol/geom", () => ({
  Point: jest.fn(),
  Polygon: jest.fn(),
  MultiPolygon: jest.fn(),
}));

jest.mock("ol-mapbox-style", () => ({ __esModule: true, default: jest.fn() }));

jest.mock("ol/format/GeoJSON", () => jest.fn().mockImplementation(() => ({})));
jest.mock("ol", () => jest.fn().mockImplementation(() => ({})));
jest.mock('ol/ol.css', () => ({}));
