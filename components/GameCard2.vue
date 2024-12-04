<template>
  <div
    v-if="game"
    class="relative bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
  >
    <!-- Full Background Image -->
    <div class="absolute inset-0">
      <img
        :src="game.thumb || '/default-thumbnail.jpg'"
        :alt="game.title || 'Game Thumbnail'"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content Overlay -->
    <div
      class="relative z-10 p-4 flex flex-col flex-grow space-y-4 text-white bg-gradient-to-t from-black/80 via-black/60 to-transparent"
    >
      <!-- Game Title -->
      <NuxtLink :to="`/detail/${game.id}`" class="block">
        <h2 class="text-xl font-bold hover:underline truncate">
          {{ game.title || "Untitled Game" }}
        </h2>
      </NuxtLink>

      <!-- Game Description -->
      <p class="text-sm opacity-90 line-clamp-3">
        {{ game.description || "No description available." }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span
            @click="tagClick(tag)"
            class="bg-white/20 text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-white/40 transition-transform transform hover:scale-105 shadow"
            :title="getTagTitle(tag)"
          >
            {{ tag }}
          </span>
        </template>
      </div>
    </div>

    <!-- Play Now Button (Always Visible, Higher Layer) -->
    <div
      class="absolute bottom-0 left-0 right-0 z-20 bg-custom-500 text-white text-center py-3"
    >
      <button
        @click.stop="playnow(game)"
        class="px-6 py-2 text-sm font-bold rounded-md hover:bg-custom-400 transition-all transform hover:scale-105"
      >
        Play Now
      </button>
    </div>
  </div>

  <!-- Placeholder if game is null -->
  <div
    v-else
    class="bg-gray-100 shadow-md flex items-center justify-center p-6 h-full text-gray-500 rounded-lg"
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
    default: null,
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

function getTagTitle(tag) {
  return `Browse games with the "${tag}" tag.`;
}
</script>

<style scoped>
/* Text truncation for description */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
