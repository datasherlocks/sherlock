// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";

export default defineConfig({
  plugins: [externalizeDeps()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.jsx"),
      name: "datasherlock-components",
      fileName: "index",
    },
  },
  optimizeDeps: {
    include: ['esm-dep > cjs-dep']
  }
});
