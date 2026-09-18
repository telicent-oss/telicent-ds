// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";

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

