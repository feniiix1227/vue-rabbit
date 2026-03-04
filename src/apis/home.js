import httpInstance from "@/utils/http";
// 获取对应的banner数据
export const getBannerAPI = () => {
  return httpInstance({
    url: "/home/banner",
    method: "GET",
  });
};
