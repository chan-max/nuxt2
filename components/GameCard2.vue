<template>
  <div
    v-if="game"
    class="relative bg-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
  >
    <!-- Full Background Image -->
    <img
      :src="game.thumb || '/default-thumbnail.jpg'"
      :alt="game.title || 'Game Thumbnail'"
      class="w-full h-full object-cover block absolute inset-0 z-0"
    />

    <!-- Content Overlay -->
    <div
      class="relative z-10 bg-gradient-to-b from-black/70 to-black/40 text-white p-6 flex flex-col flex-grow space-y-4"
    >
      <!-- Game Title -->
      <NuxtLink :to="`/detail/${game.id}`" class="block">
        <h2 class="text-2xl font-extrabold hover:text-second-500 transition truncate">
          {{ game.title || "Untitled Game" }}
        </h2>
      </NuxtLink>

      <!-- Game Description -->
      <p class="text-base opacity-90 overflow-hidden line-clamp-3">
        {{ game.description || "No description available." }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-3">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span

            @click="tagClick(tag)"
            class="bg-second-500 opacity-50 text-white px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-second-600 shadow transition-all transform hover:scale-110"
            :title="getTagTitle(tag)"
          >
            {{ tag }}
          </span>
        </template>
      </div>
    </div>

    <!-- Play Now Button -->
    <a
      @click.stop="playnow(game)"
      target="_blank"
      class="absolute cursor-pointer bottom-4 right-4 z-20 bg-second-500 text-white px-5 py-3 rounded-full text-sm font-bold shadow-lg hover:bg-second-600 transition-transform transform hover:scale-110"
    >
      Play Now
    </a>
  </div>

  <!-- Placeholder if game is null -->
  <div
    v-else
    class="bg-gray-100 shadow-md flex items-center justify-center p-6 h-full text-gray-500"
  >
    <p>No game data available.</p>
  </div>
</template>

<script setup>
import { searchClickEventBus } from "~/common/eventBus";
import { searchContent, searchType, SearchTypes } from "~/common/search";

defineProps({
  game: {
    type: Object,
    required: false,
    default: null, // Ensures the game prop can be null or undefined
  },
});

const emits = defineEmits(["playnow"]);

function playnow(game) {
  emits("playnow", game);
}

// 格式化标签，最多显示8个标签
function formatTags(tags) {
  return tags ? tags.split(",").slice(0, 8) : [];
}

function tagClick(tag) {
  searchType.value = SearchTypes.Tags;
  searchContent.value = tag;
  searchClickEventBus.emit(tag);
}

// 动态生成标签的title
function getTagTitle(tag) {
  return `Browse games with the "${tag}" tag.`;
}
</script>

<style scoped>
/* For truncating and cleaner text flow */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
