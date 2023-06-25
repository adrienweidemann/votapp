import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env
  },
  server: {
    host: "0.0.0.0"
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: fileURLToPath(new URL("./src/components", import.meta.url))
      },
      { find: "@configs", replacement: fileURLToPath(new URL("./src/configs", import.meta.url)) },
      { find: "@pages", replacement: fileURLToPath(new URL("./src/pages", import.meta.url)) },
      { find: "@helpers", replacement: fileURLToPath(new URL("./src/helpers", import.meta.url)) },
      {
        find: "@hooks",
        replacement: fileURLToPath(new URL("./src/hooks", import.meta.url))
      },
      {
        find: "@api",
        replacement: fileURLToPath(new URL("./src/api", import.meta.url))
      },
      {
        find: "@definitions",
        replacement: fileURLToPath(new URL("./src/definitions", import.meta.url))
      },
      {
        find: "@root",
        replacement: fileURLToPath(new URL("./src", import.meta.url))
      }
    ]
  }
});
