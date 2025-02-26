// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "id" });

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.SVGElement.prototype.getComputedTextLength = () => 100;
globalThis.URL.createObjectURL = globalThis.URL.createObjectURL || jest.fn();

jest.mock("react-map-gl/maplibre", () => ({
  __esModule: true,
  default: ({ children }) => <div id="telicentMap">{children}</div>,
  useMap: jest.fn(),
  Source: ({ children, id, data, ...otherProps }) => (
    <div
      id={id}
      data-features={JSON.stringify(data)}
      data-other-props={otherProps}
    >
      {children}
    </div>
  ),
  Layer: ({ children, id: string, ...props }) => (
    <div id={id} data-props={JSON.stringify(props)}>
      {children}
    </div>
  ),
  MapProvider: ({ children }) => <div>{children}</div>,
}));
