<template>
  <div
    v-if="game"
    class="relative bg-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
  >
    <!-- Background Thumbnail -->

    <img
      :src="game.thumb || '/default-thumbnail.jpg'"
      :alt="game.title || 'Game Thumbnail'"
      class="w-full h-full object-cover block absolute inset-0 z-0"
    />

    <!-- Overlay Content -->
    <div
      class="relative z-10 bg-gradient-to-t from-black/50 to-transparent text-white p-4 flex flex-col flex-grow space-y-3 rounded-xl"
    >
      <!-- Game Title -->
      <NuxtLink :to="`/detail/${game.id}`">
        <h2
          class="text-lg font-bold hover:text-gray-300 transition cursor-pointer truncate"
        >
          {{ game.title || "Untitled Game" }}
        </h2>
      </NuxtLink>

      <!-- Game Description -->
      <p
        class="text-sm text-gray-200 overflow-hidden"
        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical"
      >
        {{ game.description || "No description available." }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span
            @click="tagClick(tag)"
            class="bg-white/20 text-white px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-white/30 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            :title="getTagTitle(tag)"
          >
            <NuxtLink to="/search">
              {{ tag }}
            </NuxtLink>
          </span>
        </template>
      </div>
    </div>

    <!-- Play Now Button -->
    <a
      @click.stop="playnow(game)"
      target="_blank"
      class="absolute cursor-pointer bottom-3 right-3 z-20 bg-second-500 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-md hover:bg-second-600 transition-transform transform hover:scale-105"
    >
      Play Now
    </a>
  </div>

  <!-- Placeholder if game is null -->
  <div
    v-else
    class="bg-gray-100 rounded-xl shadow-md flex items-center justify-center p-6 h-full text-gray-500"
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
/* Ensures proper z-index and positioning */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}
</style>
