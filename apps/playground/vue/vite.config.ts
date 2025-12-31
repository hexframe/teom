import { defineConfig } from "vite";
import pluginVue from "unplugin-vue/vite";
import pluginIcons from "unplugin-icons/vite";
import pluginTailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginIcons({ compiler: "vue3" }),
    pluginTailwind(),
  ],
});
