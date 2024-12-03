<template>
  <div class="sm:my-12 px-4 sm:px-8 min-h-screen">
    <!-- Game List Header -->
    <div
      class="flex flex-col sm:flex-row justify-between items-center my-4 space-y-4 sm:space-y-0 max-w-7xl mx-auto p-4"
    >
      <h2 class="text-xl sm:text-2xl font-bold text-center sm:text-left">All Games</h2>
      <div class="flex items-center gap-4 text-gray-600 text-sm sm:text-base">
        <span>Total:</span>
        <span class="font-semibold bg-gray-100 px-3 py-1 rounded-lg shadow-sm">
          {{ total }}
        </span>
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

    <!-- Load More Button -->
    <div v-if="!isLastPage && !loading" class="text-center mt-6 mb-12">
      <button
        @click="getList"
        class="inline-flex items-center gap-2 px-6 py-3 bg-custom-500 text-white font-semibold rounded-lg shadow-md hover:bg-custom-600 transition"
      >
        <UIcon name="i-heroicons-arrow-down-circle" class="w-6 h-6" />
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

const { openGameModal } = useGameModal();

// 点击 "Play Now" 的处理函数
function cardPlaynow(item) {
  openGameModal(item);
}

// 点击缩略图的处理函数
function gameListThumbClick() {
  console.log("Thumbnail clicked");
}

// 使用分页逻辑
const {
  list,
  total, // 总条数
  loading,
  isEmpty,
  isLastPage,
  getList,
  resetPagination,
} = useGamePagination(API.getGames, (params) => {
  return {
    ...params,
  };
});

getList();
</script>
