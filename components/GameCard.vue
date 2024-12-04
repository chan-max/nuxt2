<template>
  <div
    class="bg-gradient-to-r from-second-500 to-second-400 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full transform hover:scale-105"
  >
    <!-- Game Thumbnail -->
    <div class="relative aspect-w-16 aspect-h-9 group">
      <NuxtLink :to="`/detail/${game.id}`" class="block h-full">
        <img
          :src="game.thumb || '/default-thumbnail.jpg'"
          :alt="game.title || 'Game Thumbnail'"
          class="w-full h-full object-cover rounded-t-lg transition-transform transform group-hover:scale-110"
        />
        <!-- Play Overlay -->
        <div
          class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-t-lg"
        >
          <span class="text-white text-base font-bold tracking-wide"> Explore Game </span>
        </div>
      </NuxtLink>
    </div>

    <!-- Game Details -->
    <div class="p-6 flex flex-col flex-grow text-custom-500">
      <!-- Game Title -->
      <NuxtLink
        :to="`/detail/${game.id}`"
        class="text-xl font-extrabold truncate hover:underline"
        title="Click to view details"
      >
        {{ game.title || "Untitled Game" }}
      </NuxtLink>

      <!-- Game Description -->
      <p class="text-sm opacity-90 mt-2 line-clamp-3" title="Game Description">
        {{ game.description || "No description available." }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-3 mt-4">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span
            @click="tagClick(tag)"
            class="bg-white/10 text-custom-500 px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-white/20 shadow-md transition-all"
            :title="getTagTitle(tag)"
          >
            {{ tag }}
          </span>
        </template>
      </div>

      <!-- Play Now Button -->
      <div class="mt-auto flex justify-center">
        <button
          @click.stop="playnow"
          class="bg-white text-second-500 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 hover:text-second-600 transition-transform transform hover:scale-110"
        >
          Play Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { searchClickEventBus } from "~/common/eventBus";
import { searchContent, searchType, SearchTypes } from "~/common/search";

const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["playnow"]);

function playnow() {
  emits("playnow", props.game);
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

/* Aspect ratio utility */
.aspect-w-16 {
  width: 100%;
}

.aspect-h-9 {
  padding-top: 56.25%; /* 16:9 aspect ratio */
  position: relative;
}

.aspect-w-16.aspect-h-9 > * {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
