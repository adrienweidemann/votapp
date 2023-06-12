import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: fileURLToPath(new URL("./src/components", import.meta.url))
      },
      { find: "@configs", replacement: fileURLToPath(new URL("./src/configs", import.meta.url)) },
      { find: "@pages", replacement: fileURLToPath(new URL("./src/pages", import.meta.url)) }
    ]
  }
});
