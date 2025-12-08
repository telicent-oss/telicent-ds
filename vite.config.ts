import react from "@vitejs/plugin-react";
import path from "path";
import copy from "rollup-plugin-copy";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import pkg from "./package.json";


export default defineConfig({
  server: {
    port: 3003,
  },
  assetsInclude: [path.resolve(__dirname, "src/assets/fonts")],
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/export.ts"),
      name: "@telicent-oss/ds",
      fileName: "ds",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        sourcemapExcludeSources: false,
      },
      plugins: [
        copy({
          /**
           * Resolve [copy] ENOENT: no such file or directory, mkdir thanks to knowledge at
           * rollup-plugin-copy issues 61 issuecomment-2808076273
           */
          copySync: true, //
          targets: [
            {
              src: "src/assets/fonts",
              dest: "dist/assets",
            },
            {
              src: "src/styles/fonts.css",
              dest: "dist/styles",
            },
            {
              src: "src/styles/typography.css",
              dest: "dist/styles",
            },
            { src: "src/fontawesome.css", dest: "dist" },

            {
              src: "node_modules/@fortawesome/fontawesome-free/webfonts/*",
              dest: "dist/assets/fonts/fontawesome/webfonts",
            },
          ],
          hook: "writeBundle",
          copyOnce: true,
        }),
      ],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: [
          [
            "@emotion/babel-plugin",
            {
              sourceMap: true,
              autoLabel: "dev-only",
              labelFormat: "[local]",
              cssPropOptimization: true,
            },
          ],
        ],
      },
    }),
  ],
});
