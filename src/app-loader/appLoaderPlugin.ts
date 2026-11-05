import { createHash } from "node:crypto";

import type { HtmlTagDescriptor, Plugin } from "vite";

import type { UITheme } from "../theme/colors/theme-colors";
import { buildLoaderCss } from "./loaderCss";
import { buildOverlayInner, MESSAGE_ID, OVERLAY_ID } from "./loaderMarkup";
import {
  ANIMATION_START_KEY,
  applyLoaderHead,
  applyLoaderMessage,
  CALLBACK_MESSAGE,
  DEFAULT_MESSAGE,
  toScript,
} from "./loaderRuntime";

export type AppLoaderOptions = {
  /** DS theme the loader colours come from. Match the app's UIThemeProvider. */
  theme: UITheme;
  /** localStorage key holding "light" | "dark". Omit for dark-only apps. */
  modeStorageKey?: string;
};

type RuntimeFile = { fileName: string; source: string };

// Content-hashed so the apps' long-lived asset caching never serves a stale script.
const runtimeFile = (name: string, source: string): RuntimeFile => {
  const hash = createHash("sha256").update(source).digest("hex").slice(0, 8);
  return { fileName: `assets/${name}-${hash}.js`, source };
};

export const appLoader = ({ theme, modeStorageKey }: AppLoaderOptions): Plugin => {
  const head = runtimeFile("app-loader-head", toScript(applyLoaderHead, [modeStorageKey ?? null, ANIMATION_START_KEY]));
  const message = runtimeFile("app-loader-message", toScript(applyLoaderMessage, [MESSAGE_ID, CALLBACK_MESSAGE]));
  const files = [head, message];
  const css = buildLoaderCss(theme);
  let base = "/";

  return {
    name: "telicent-ds:app-loader",
    configResolved(config) {
      base = config.base;
    },
    // Dev serves the runtime files from memory at the URLs the build emits.
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const file = files.find(({ fileName }) => req.url === `${base}${fileName}`);
        if (!file) {
          next();
          return;
        }
        res.setHeader("Content-Type", "text/javascript");
        res.end(file.source);
      });
    },
    generateBundle() {
      files.forEach(({ fileName, source }) => this.emitFile({ type: "asset", fileName, source }));
    },
    transformIndexHtml: {
      order: "post",
      handler: (): HtmlTagDescriptor[] => [
        // "head", not "head-prepend": <meta charset> must stay in the first 1024 bytes.
        { tag: "style", children: css, injectTo: "head" },
        { tag: "script", attrs: { src: `${base}${head.fileName}` }, injectTo: "head" },
        {
          tag: "div",
          attrs: { id: OVERLAY_ID, "aria-live": "polite" },
          children: buildOverlayInner(DEFAULT_MESSAGE),
          injectTo: "body-prepend",
        },
        { tag: "script", attrs: { src: `${base}${message.fileName}` }, injectTo: "body-prepend" },
      ],
    },
  };
};
