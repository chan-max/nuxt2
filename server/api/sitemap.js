import axios from 'axios';

export default defineSitemapEventHandler(async () => {
    const config = useRuntimeConfig();
    const apiKey = config.public.apiKey; // 从配置中获取 apiKey
    const apiURL = config.public.apiURL; // 从配置中获取 apiURL

    // 创建 axios 实例
    const api = axios.create({
        baseURL: apiURL, // 基础 URL
        headers: {
            'x-api-key': apiKey, // 设置 API Key
            'Content-Type': 'application/json',
        }
    });

    // 获取游戏列表数据
    try {
        const gamesResponse = await api.get('/api/v1/games', {
            params: {
                page: 1,
                pageSize: 10000,
            }
        });

        // 获取分类数据
        // const categoriesResponse = await api.get('/api/v1/categories', {
        //     params: {
        //         page: 1,
        //         pageSize: 10000,
        //     }
        // });

        const games = gamesResponse.data.games; // 解析响应数据
        // const categories = categoriesResponse.data; // 解析响应数据

        // 返回 sitemap 路由
        return [
            ...games.map(p => asSitemapUrl({
                loc: '/detail/' + p.id,
            })),
            // ...categories.map(p => asSitemapUrl({
            //     loc: '/categories/' + p.toLowerCase(),
            // }))
        ];
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
});
