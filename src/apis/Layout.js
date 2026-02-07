import httpInstance from "@/utils/http";
// 111
export const getCategoryAPI = () => {
  return httpInstance({
    url: "/home/category/head",
    method: "GET",
  });
};
