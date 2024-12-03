<template>
  <div class="flex flex-wrap md:flex-nowrap w-full">
    <!-- 左侧分类导航栏 -->
    <aside class="w-full md:w-1/6 py-8 px-4 bg-gray-100 md:bg-transparent">
      <!-- Navigation Buttons -->
      <div class="flex flex-wrap md:flex-col gap-4 mb-6">
        <UButton
          to="/search"
          color="blue"
          variant="outline"
          icon="i-heroicons-magnifying-glass-circle"
          class="flex-grow md:w-full h-10 text-blue-500 border-blue-500 border-2 hover:bg-blue-100 transition-all font-bold"
        >
          Search Games
        </UButton>
        <UButton
          to="/games"
          color="green"
          variant="outline"
          icon="i-heroicons-play-circle"
          class="flex-grow md:w-full h-10 text-green-500 border-green-500 border-2 hover:bg-green-100 transition-all font-bold"
        >
          All Games
        </UButton>
        <UButton
          to="/about"
          color="purple"
          variant="outline"
          icon="i-heroicons-information-circle"
          class="flex-grow md:w-full h-10 text-purple-500 border-purple-500 border-2 hover:bg-purple-100 transition-all font-bold"
        >
          About Us
        </UButton>
      </div>

      <!-- Top Categories -->
      <div class="mb-6">
        <h2
          class="text-lg font-bold bg-second-500 text-white flex items-center px-4 py-3 rounded-t-2xl rounded-b-lg"
        >
          <UIcon name="i-basil-award-solid" class="w-6 h-6 text-yellow-500 mr-2" />
          <span class="flex-grow">TOP {{ topCategories?.length }}</span>
        </h2>
        <div class="flex flex-col">
          <div
            v-for="(category, index) in topCategories"
            :key="index"
            @click="categoryClick(category as string)"
            class="group flex items-center px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-200 hover:bg-gradient-to-r hover:from-custom-500 hover:to-custom-400 hover:text-white transition-all duration-300 cursor-pointer"
            :class="{ 'bg-yellow-100': index === 0 }"
          >
            <span
              class="flex items-center justify-center w-6 h-6 rounded-full bg-custom-500 text-white font-bold mr-4"
            >
              {{ index + 1 }}
            </span>
            <NuxtLink
              to="/search"
              class="text-base font-semibold text-gray-500 group-hover:text-white"
            >
              {{ category }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Group Categories -->
      <div>
        <h2
          class="text-lg font-bold bg-second-500 text-white flex items-center px-4 py-3 rounded-t-2xl rounded-b-lg"
        >
          <UIcon name="i-heroicons-archive-box-solid" class="w-6 h-6 mr-2" />
          <span class="flex-grow">{{ categoriesData?.length }} GROUPS</span>
        </h2>
        <div class="flex flex-col">
          <div
            v-for="(category, index) in categoriesData"
            :key="index"
            @click="categoryClick(category as string)"
            class="group flex items-center px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-200 hover:bg-gradient-to-r hover:from-custom-500 hover:to-custom-400 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5 text-gray-400 group-hover:text-white transition-colors"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 3v18l7-5 7 5V3z"
              />
            </svg>
            <span
              class="text-base font-semibold text-gray-500 group-hover:text-white pl-3"
            >
              {{ category }}
            </span>
          </div>
        </div>
      </div>
    </aside>

    <!-- 右侧主要内容 -->
    <main class="w-full md:w-5/6 p-2  md:p-12 lg:p-12 xl:p-12">
      <!-- Random Games Section -->
      <section class="mb-12">
        <header class="flex items-center justify-between mb-4">
          <h2 class="text-2xl md:text-3xl font-bold text-second-500">Random Games</h2>
          <button
            @click="refreshRandomGames"
            class="px-4 py-2 bg-second-500 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-second-600 transition"
          >
            <UIcon name="i-heroicons-arrow-path-16-solid" class="w-5 h-5" />
            Refresh
          </button>
        </header>
        <div class="flex flex-wrap md:flex-nowrap gap-4">
          <!-- Left: Large Game Card -->
          <div class="w-full md:w-1/3">
            <GameCard2
              :game="randomGames?.[0]"
              class="h-full"
              @playnow="playnow"
            ></GameCard2>
          </div>

          <!-- Right: 3x3 Grid of Small Game Cards -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-2/3">
            <GameCard2
              v-for="(game, index) in randomGames?.slice(1, 10)"
              :key="index"
              :game="game"
              @playnow="playnow"
            ></GameCard2>
          </div>
        </div>
      </section>

      <!-- Tags Section -->
      <section class="mb-12">
        <header class="flex items-center justify-between mb-4">
          <h2 class="text-2xl md:text-3xl font-bold text-second-500">
            Game Tags: Search Your Favorite Games by Tag
          </h2>
          <button
            @click="refreshTags"
            class="px-4 py-2 bg-second-500 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-second-600 transition"
          >
            <UIcon name="i-heroicons-arrow-path-16-solid" class="w-5 h-5" />
            Refresh Tags
          </button>
        </header>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in visibleTags"
            :key="tag"
            @click="searchTag(tag)"
            class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm cursor-pointer hover:bg-second-100 hover:text-second-500 transition"
          >
            {{ tag }}
          </span>
        </div>
      </section>

      <!-- 游戏分组 Tab -->
      <section>
        <header class="flex items-center justify-between mb-4">
          <h2 class="text-2xl md:text-3xl font-bold text-second-500">Top 5 Games</h2>
        </header>
        <div class="border-b-2 border-gray-200 mb-4">
          <ul class="flex gap-4 overflow-x-auto">
            <li
              v-for="(group, index) in categorieMapData"
              :key="group.title"
              @click="selectedTab = index"
              :class="[
                'cursor-pointer pb-2',
                selectedTab === index
                  ? 'border-b-2 border-second-500 text-second-500 font-bold'
                  : 'text-gray-500',
              ]"
            >
              {{ group.title }}
            </li>
          </ul>
        </div>
        <div v-if="categorieMapData[selectedTab]">
          <GameListCard
            :title="categorieMapData[selectedTab].title"
            :games="categorieMapData[selectedTab].data.games"
            @playnow="cardPlaynow"
            @thumbClick="gameListThumbClick"
          ></GameListCard>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* 响应式样式调整 */
@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

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
  router.push({ path: "/search" });
}

let { startLoading, stopLoading } = useLoading();

let { data: categoriesData, pending: categoriesPending } = API.getCategories();

let { data: randomGames, pending: randomGamesPending } = API.getRandomGames({
  count: 10,
});

const refreshRandomGames = async () => {
  startLoading();
  try {
    const { data } = await API.getRandomGames({ count: 10 });
    randomGames.value = data.value;
  } catch (error) {
    console.error("Error refreshing random games:", error);
  } finally {
    stopLoading();
  }
};

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

const topCategories = ref([] as any);

/**
 * @struct 首页热搜游戏数据结构
 * */
const categorieMapData = ref([] as Array<any>);
const selectedTab = ref(0); // Default to the first tab

onMounted(async () => {
  try {
    // 获取分类
    startLoading();
    const { data: categoryData } = await API.getTopCategories();

    topCategories.value = categoryData.value;

    await Promise.all(
      (categoryData.value as Array<string>).map(async (category) => {
        const { data: searchData } = await API.searchGames({
          category: category,
          page: 1,
          pageSize: 48,
        });
        categorieMapData.value.push({
          title: category,
          data: searchData.value,
        });
      })
    );
  } catch (error) {
    console.error("请求错误", error);
  } finally {
    stopLoading();
  }
});

let { data: tags, pending: tagsPending } = API.getTags({
  onResponse: async () => {
    setTimeout(() => {
      refreshTags();
    }, 33);
  },
});

const visibleTags = ref<string[]>([]);

/**
 * Refresh the visible tags with 100 random tags
 */
function refreshTags() {
  console.log("before push", tags?.value?.length);

  if (!tags.value || tags?.value?.length == 0) return;
  // Shuffle tags and select the first 100

  console.log("push");
  visibleTags.value = [...tags.value]
    .sort(() => Math.random() - 0.5)
    .slice(0, 100)
    .filter(Boolean);
}

function searchTag(tag: string) {
  searchType.value = SearchTypes.Tags;
  searchContent.value = tag;
  router.push({ path: "/search" });
}
</script>

<style scoped>
/* 主要样式调整 */
aside {
  border-right: 1px solid #e5e7eb; /* light gray border for desktop view */
}
@media (max-width: 1024px) {
  aside {
    border-right: none;
    margin-bottom: 1rem;
  }
}
</style>
