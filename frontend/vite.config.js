import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  define: {
    "process.env": process.env,
  },
  server: {
    port: 3003,
    strictPort: true,
    host: "0.0.0.0",
  },
});
