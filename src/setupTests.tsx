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

jest.mock("ol-mapbox-style", () => ({
  __esModule: true,
  default: jest.fn(),
  apply: jest.fn(),
  applyStyle: jest.fn(() => Promise.resolve())
}));

