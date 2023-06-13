import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
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
      { find: "@pages", replacement: fileURLToPath(new URL("./src/pages", import.meta.url)) },
      {
        find: "@hooks",
        replacement: fileURLToPath(new URL("./src/hooks", import.meta.url))
      },
      { find: "@types", replacement: fileURLToPath(new URL("./src/types", import.meta.url)) }
    ]
  }
});
