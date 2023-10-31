import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": "cdn.imagin.studio", // Replace with your API server
    },
  },
  optimizeDeps: {
    include: ["@fortawesome/fontawesome-free/js/all.js"], // Include other dependencies as needed
  },
});
