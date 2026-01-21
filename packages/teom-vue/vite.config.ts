import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import pluginVue from "unplugin-vue/vite";
import pluginDts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    pluginVue(),
    // @ts-expect-error due to Plugin<any> in vite-plugin-dts
    pluginDts(),
  ],
  build: {
    lib: {
      entry: {
        "index": resolve(__dirname, "src/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format: string, entryName: string) => `${entryName}.${format == "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
});
