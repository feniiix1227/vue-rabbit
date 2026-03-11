// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login/Index.vue";
import Layout from "@/views/Layout/Index.vue";
import Home from "@/views/Home/Index.vue";
import Category from "@/views/Category/Index.vue";
import SubCategory from "@/views/SubCategory/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
        },
        {
          path: "category/:id",
          name: "Category",
          component: Category,
        },
        {
          path: "category/sub/:id",
          name: "SubCategory",
          component: SubCategory,
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});

export default router;
