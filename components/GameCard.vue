<template>
  <div
    class="relative rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 flex flex-col h-full"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${game.thumb || '/default-thumbnail.jpg'})` }"
    ></div>

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 opacity-100"
    ></div>

    <!-- Content -->
    <div class="relative z-10 p-6 flex flex-col flex-grow text-white">
      <!-- Game Title -->
      <NuxtLink
        :to="`/detail/${game.id}`"
        class="text-2xl font-extrabold truncate hover:underline mb-3"
        title="Click to view details"
      >
        {{ game.title || "Untitled Game" }}
      </NuxtLink>

      <!-- Game Description -->
      <p class="text-sm opacity-90 line-clamp-3 mb-4" title="Game Description">
        {{ game.description || "No description available." }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-6">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span
            @click="tagClick(tag)"
            class="bg-white/20 text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-white/40 shadow-md transition-all"
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
          class="bg-custom-500 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-custom-400 transition-transform transform hover:scale-110"
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
/* Background image always covers card */
.bg-cover {
  background-size: cover;
  background-position: center;
}

/* For truncating and cleaner text flow */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Hover interaction for play button */
button {
  transition: background-color 0.3s, transform 0.3s;
}

/* Custom gradient and shadow styles */
</style>
