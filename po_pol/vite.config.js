import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/my_pofo/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
      },
    },
  },
});
