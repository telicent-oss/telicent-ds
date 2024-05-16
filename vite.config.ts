import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/export.ts"),
      name: "@telicent-oss/ds",
      fileName: "ds",
    },
    rollupOptions: {
      // Externalized deps which should not be included in lib
      external: ["react", "react-dom"],
      output: {
        // Global variables to use in the UMD build for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react(), dts({ insertTypesEntry: true })],
});
