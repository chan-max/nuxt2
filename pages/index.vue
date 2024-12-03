<template>
  <div>
    <div
      class="w-full p-4 bg-gradient-to-b from-gray-50 via-white to-gray-100 rounded-lg shadow-md mt-6"
    >
      <div class="flex flex-wrap justify-start gap-3">
        <div
          v-for="(category, index) in categoriesData"
          :key="index"
          @click="categoryClick(category as string)"
          class="group flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 rounded-md shadow-sm hover:bg-gradient-to-r hover:from-custom-500 hover:to-custom-400 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <!-- Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4 text-gray-500 group-hover:text-white transition-colors"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v18l7-5 7 5V3z" />
          </svg>

          <!-- Category Name -->
          <NuxtLink
            to="/search"
            class="text-xs md:text-sm font-medium text-gray-700 group-hover:text-white"
          >
            {{ category }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="sm:my-12" v-if="carouselData.length">
      <Carousel :slides="carouselData" @playnow="playnow" @contentClick="contentClick" />
    </div>

    <div class="sm:my-12" v-if="categorieMapData.length">
      <GameListCard
        v-for="item in categorieMapData"
        :title="item.title"
        :games="item.data.games"
        @playnow="cardPlaynow"
        @thumbClick="gameListThumbClick"
      ></GameListCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import API from "@/common/api";
import { useGameModal } from "@/common/useGameModal";
import { searchContent, searchType, SearchTypes } from "~/common/search";
import { useLoading } from "~/common/useLoading";

let router = useRouter();

/**
 * @method 点击导航栏下方的分类
 */
function categoryClick(category) {
  searchType.value = SearchTypes.Category;
  searchContent.value = category as string;
}

let { startLoading, stopLoading } = useLoading();

let { data: categoriesData, pending: categoriesPending } = API.getCategories();

let { data: randomGames, pending: randomGamesPending } = API.getRandomGames({ count: 5 });

let carouselData = computed(() => {
  if (!randomGames.value) {
    return [];
  }
  return (randomGames.value as Array<any>).map((item) => {
    return item;
  });
});

const { openGameModal } = useGameModal();

/**
 * @method 轮播图点击playnow
 */
function playnow(item: { url: string }) {
  openGameModal(item);
}

/**
 * @method 跳转到游戏详情页面
 */
function goDetailPage(info: { id: string }) {
  // navigateTo(`/detail/${info.id}`);
}

/**
 * @method 游戏卡片点击playnow
 */
function cardPlaynow(item: { url: string }) {
  openGameModal(item);
}

/**
 * @method 点击轮播图图片，进入详情
 */
function contentClick(item: any) {
  goDetailPage(item);
}

/**
 * @method 游戏列表中的缩略图点击，用于跳转详情
 */
function gameListThumbClick(item: any) {
  // goDetailPage(item);
}

/**
 * @struct 首页热搜游戏数据结构
 * */
const categorieMapData = ref([] as Array<any>);

onMounted(async () => {
  try {
    // 获取分类

    startLoading();

    const { data: categoryData } = await API.getTopCategories();

    await Promise.all(
      (categoryData.value as Array<string>).map(async (category) => {
        const { data: searchData } = await API.searchGames({
          category: category,
          page: 1,
          pageSize: 9,
        });
        categorieMapData.value.push({
          title: category,
          data: searchData.value,
        });
      })
    );

    // console.log(JSON.parse(JSON.stringify(categorieMapData.value)));
  } catch (error) {
    console.error("请求错误", error);
  } finally {
    stopLoading();
  }
});
</script>
