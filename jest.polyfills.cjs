// Polyfills for web-platform globals that jsdom does not provide out of the box.
// CRA's react-scripts supplied some of these implicitly; jest-environment-jsdom does not.
const { TextEncoder, TextDecoder } = require("node:util");
const { webcrypto } = require("node:crypto");
const {
  ReadableStream,
  WritableStream,
  TransformStream,
} = require("node:stream/web");

// These must be defined before requiring undici — undici references them
// as globals at module-load time.
Object.defineProperties(globalThis, {
  TextEncoder: { value: TextEncoder, writable: true, configurable: true },
  TextDecoder: { value: TextDecoder, writable: true, configurable: true },
  ReadableStream: { value: ReadableStream, writable: true, configurable: true },
  WritableStream: { value: WritableStream, writable: true, configurable: true },
  TransformStream: { value: TransformStream, writable: true, configurable: true },
});

const { fetch, Headers, Request, Response } = require("undici");

Object.defineProperties(globalThis, {
  fetch: { value: fetch, writable: true, configurable: true },
  Headers: { value: Headers, writable: true, configurable: true },
  Request: { value: Request, writable: true, configurable: true },
  Response: { value: Response, writable: true, configurable: true },
});

try {
  if (!globalThis.crypto || !globalThis.crypto.subtle) {
    Object.defineProperty(globalThis, "crypto", {
      value: webcrypto,
      writable: true,
      configurable: true,
    });
  }
} catch {
  // jsdom's crypto global is non-configurable; assume it is adequate.
}
