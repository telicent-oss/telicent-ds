// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MarkerProps } from "react-map-gl/maplibre";

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


jest.mock("react-map-gl/maplibre", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div id="telicentMap">{children}</div>,
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
  MapProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
