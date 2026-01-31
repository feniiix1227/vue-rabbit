import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// element plus自动按需导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // element plus 默认样式
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    Components({
      // element plus 采用 sass 样式配色系统
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
  ],
  resolve: {
    // 配置路径别名 @ 指向 src 目录
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 全局导入定制化样式文件
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
        `,
      },
    },
  },
});
