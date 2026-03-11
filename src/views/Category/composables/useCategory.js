// 封装对应category数据的相关代码
import { getCategoryAPI } from "@/apis/category";

import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  // getCategory(route.params.id);
  onMounted(() => getCategory());

  // 精细化解决路由缓存 监听路由参数变化，重新获取数据
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });

  return {
    categoryData,
  };
}
