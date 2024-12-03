const allowedParams = ['channel'];

export default defineNuxtRouteMiddleware((to, from) => {
  const fromQuery = from.query;
  const toQuery = to.query;

  let updatedQuery = { ...toQuery };
  let needToUpdate = false;

  // 遍历预先声明的参数列表
  allowedParams.forEach(param => {
    // 检查即将离开的页面是否包含这些参数，且即将访问的页面没有这些参数
    if (fromQuery[param] && !toQuery[param]) {
      updatedQuery[param] = fromQuery[param];
      needToUpdate = true;
    }
  });

  // 如果需要更新查询参数，则导航到更新后的路由
  if (needToUpdate) {
    return navigateTo({ path: to.path, query: updatedQuery });
  }
});
