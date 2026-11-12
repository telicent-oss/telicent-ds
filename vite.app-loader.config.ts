import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// The app-loader entry runs in Node, inside the apps' vite.config, so it is
// built apart from the browser bundle. The palette is bundled in, because
// MUI v5 can't be imported from Node ESM. Only node builtins and vite stay external.
export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: false,
    sourcemap: true,
    lib: {
      entry: { "app-loader": path.resolve(__dirname, "src/app-loader/index.ts") },
      formats: ["es", "cjs"],
    },
    rollupOptions: { external: [/^node:/, "vite"] },
  },
  plugins: [
    // Own outDir, unrolled: rolling types here rewrites the main entries' d.ts.
    dts({
      include: ["src/app-loader/**/*.ts", "src/theme/colors/**/*.ts"],
      exclude: ["**/__tests__/**"],
      entryRoot: "src",
      outDir: "dist/app-loader-types",
    }),
  ],
});
