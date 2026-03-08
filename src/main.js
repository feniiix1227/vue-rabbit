import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

// 引入对应的懒加载指令
import { lazyPlugin } from "@/directives";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 使用懒加载指令
app.use(lazyPlugin);

app.mount("#app");
