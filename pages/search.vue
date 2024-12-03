<template>
  <div class="sm:my-12 px-4 sm:px-8 min-h-screen">
    <!-- Game List Header -->
    <div class="bg-white shadow-md rounded-lg p-6 mb-8 max-w-7xl mx-auto">
      <div class="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <!-- Search Results Summary -->
        <div>
          <h2 class="text-2xl font-bold text-gray-800">
            Search Results Overview
          </h2>
          <p class="text-gray-600 text-sm mt-2">
            Below are the games matching your search criteria.
          </p>
        </div>

        <!-- Statistics Display -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="bg-custom-100 text-custom-700 p-4 rounded-lg shadow-sm text-center">
            <h3 class="text-lg font-semibold">Search Content</h3>
            <p class="text-sm font-medium mt-1">
              {{ searchContent || "All" }}
            </p>
          </div>
          <div class="bg-custom-100 text-custom-700 p-4 rounded-lg shadow-sm text-center">
            <h3 class="text-lg font-semibold">Search Type</h3>
            <p class="text-sm font-medium mt-1">{{ searchType }}</p>
          </div>
          <div class="bg-custom-100 text-custom-700 p-4 rounded-lg shadow-sm text-center">
            <h3 class="text-lg font-semibold">Total Results</h3>
            <p class="text-sm font-medium mt-1">{{ total }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Game List -->
    <div class="mb-12">
      <GameListCard
        :games="list"
        @playnow="cardPlaynow"
        @thumbClick="gameListThumbClick"
        :viewMore="false"
      ></GameListCard>
    </div>

    <!-- Empty State -->
    <div v-if="isEmpty" class="text-center text-gray-500 py-16">
      <p class="text-lg mb-6">No results found.</p>
      <button
        @click="resetSearch"
        class="w-full sm:w-auto px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
      >
        Reset Search
      </button>
    </div>

    <!-- Load More Button -->
    <div v-if="!isLastPage && !loading" class="text-center mt-6 mb-12">
      <button
        @click="getList"
        class="inline-flex items-center gap-2 px-6 py-3 bg-custom-500 text-white font-semibold rounded-lg shadow-md hover:bg-custom-600 transition"
      >
        Load More
      </button>
    </div>

    <!-- Loading Spinner -->
    <div v-if="loading" class="text-center mt-6 mb-12">
      <div class="inline-flex items-center space-x-2">
        <div
          class="w-6 h-6 border-4 border-custom-500 border-t-transparent rounded-full animate-spin"
        ></div>
        <span>Loading...</span>
      </div>
    </div>

    <!-- End of Results Message -->
    <div v-if="isLastPage && !loading" class="text-center mt-6 mb-12 text-gray-500">
      <p class="text-sm">You have reached the end of the results.</p>
    </div>
  </div>
</template>


<script lang="ts" setup>
import API from "~/common/api";
import { ref, watch } from "vue";
import { searchContent, searchType } from "~/common/search";
import { useGamePagination } from "@/common/paging";
import { useGameModal } from "~/common/useGameModal";
import { searchClickEventBus, searchTypeEventBus } from "@/common/eventBus";

const { openGameModal } = useGameModal();

// 点击 "Play Now" 的处理函数
function cardPlaynow(item) {
  openGameModal(item);
}

// 点击缩略图的处理函数
function gameListThumbClick() {}

// 初始化搜索内容
const defaultSearchContent = ref(""); // 默认搜索内容

// 使用分页逻辑
const {
  list,
  total, // 总条数
  loading,
  isEmpty,
  isLastPage,
  getList,
  resetPagination,
} = useGamePagination(API.searchGames, (params) => {
  return {
    ...params,
    [searchType.value]: searchContent.value || defaultSearchContent.value, // 改为 title 字段
  };
});

getList();

// 重置搜索内容
const resetSearch = () => {
  searchContent.value = defaultSearchContent.value; // 重置为默认搜索内容
  resetPagination(); // 重置分页
  getList(); // 加载初始数据
};

searchClickEventBus.on((content) => {
  resetPagination(); // 重置分页
  getList(); // 加载数据
});

searchTypeEventBus.on((params) => {});
</script>
