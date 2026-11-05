import type { HtmlTagDescriptor } from "vite";

import { appLoader } from "../appLoaderPlugin";

type Hooks = {
  configResolved: (config: { base: string }) => void;
  transformIndexHtml: { handler: () => HtmlTagDescriptor[] };
  generateBundle: (this: { emitFile: jest.Mock }) => void;
};

const setup = (modeStorageKey?: string) => {
  const plugin = appLoader({ theme: "GraphOrange", modeStorageKey }) as unknown as Hooks;
  plugin.configResolved({ base: "/graph/" });
  return plugin;
};

describe("appLoader", () => {
  it("injects the CSS and head script into <head>, and the overlay before the app root", () => {
    const tags = setup().transformIndexHtml.handler();
    expect(tags.map(({ tag, injectTo }) => [tag, injectTo])).toEqual([
      ["style", "head"],
      ["script", "head"],
      ["div", "body-prepend"],
      ["script", "body-prepend"],
    ]);
    expect(tags[1].attrs?.src).toMatch(/^\/graph\/assets\/app-loader-head-[0-9a-f]{8}\.js$/);
    expect(tags[2].attrs).toEqual({ id: "initial-overlay", "aria-live": "polite" });
  });

  it("emits both runtime files at the injected URLs", () => {
    const plugin = setup("graph.themeMode");
    const emitFile = jest.fn();
    plugin.generateBundle.call({ emitFile });
    const fileNames = emitFile.mock.calls.map(([file]) => `/graph/${file.fileName}`);
    const srcs = plugin.transformIndexHtml.handler().map((tag) => tag.attrs?.src).filter(Boolean);
    expect(fileNames).toEqual(srcs);
  });

  it("passes the mode storage key to the head script", () => {
    const emitFile = jest.fn();
    setup("graph.themeMode").generateBundle.call({ emitFile });
    expect(emitFile.mock.calls[0][0].source).toContain('"graph.themeMode"');
  });
});
