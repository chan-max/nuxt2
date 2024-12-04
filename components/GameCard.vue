<template>
  <div class=" rounded-lg duration-300 flex flex-col h-full n-border">
    <!-- Game Thumbnail -->
    <div class="relative aspect-w-16 aspect-h-9">
      <NuxtLink :to="`/detail/${game.id}`" class="block h-full">
        <img
          :src="game.thumb || '/default-thumbnail.jpg'"
          :alt="game.title || 'Game Thumbnail'"
          class="w-full h-full object-cover rounded-lg"
        />
        <!-- Play Overlay -->
        <div
          class="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-t-lg"
        >
          <span class="text-white text-base font-medium">View Details</span>
        </div>
      </NuxtLink>
    </div>

    <!-- Game Details -->
    <div class="p-3 flex flex-col flex-grow">
      <!-- Game Title -->
      <h2
        class="text-base font-semibold text-second-500 hover:text-second-400 transition truncate"
        title="Click to view details"
      >
        {{ game.title || "Untitled Game" }}
      </h2>

      <!-- Game Description -->
      <p class="text-xs text-white line-clamp-2 mt-1" title="Game Description">
        {{ game.description || "No description available." }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-2">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span
            @click="tagClick(tag)"
            class="bg-gradient-to-r from-custom-300  to-custom-500 text-white px-2 py-1  text-[10px] cursor-pointer hover:bg-second-100 hover:text-second-500 shadow transition-all"
            :title="getTagTitle(tag)"
          >
            <NuxtLink to="/search">
              {{ tag }}
            </NuxtLink>
          </span>
        </template>
      </div>

      <!-- Play Now Button -->
      <div class="mt-auto flex justify-center">
        <button
          @click.stop="playnow"
          class="bg-gradient-to-r from-custom-300  to-custom-500 text-white px-3 py-1 my-2  text-xs font-medium shadow-md hover:bg-second-600 hover:shadow-lg transition-transform transform hover:scale-105"
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

const router = useRouter();
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
