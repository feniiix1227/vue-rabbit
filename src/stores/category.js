import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
  // 导航列表的数据管理

  // state 导航数据列表
  const categoryList = ref([]);

  // action 获取导航数据的方法
  const fetchCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  };

  return {
    categoryList,
    fetchCategory,
  };
});
