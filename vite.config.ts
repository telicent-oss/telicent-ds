/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import path from "path";
import copy from "rollup-plugin-copy";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3003,
  },
  assetsInclude: [path.resolve(__dirname, "src/assets/fonts")],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/export.ts"),
      name: "@telicent-io/ds",
      fileName: "ds",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      plugins: [
        copy({
          targets: [
            {
              src: "src/assets/fonts",
              dest: "dist/assets",
            },
            { src: "src/fontawesome.css", dest: "dist" },
          ],
          hook: "writeBundle",
          copyOnce: true,
        }),
      ],
    },
  },
  plugins: [dts({ insertTypesEntry: true }), react()],
});
