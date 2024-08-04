import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  build: {
    rollupOptions: {
      output: {
        // Manual chunking to split dependencies into separate chunks
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Adjusting the warning limit if needed
  },
  // This is for handling SPA routing
  server: {
    historyApiFallback: true,
  },
});