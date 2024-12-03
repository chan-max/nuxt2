<template>
  <div
    class="bg-gradient-to-b from-syrixal-50 via-white to-syrixal-100 border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
  >
    <!-- Game Thumbnail -->
    <div class="relative aspect-w-16 aspect-h-9">
      <NuxtLink :to="`/detail/${game.id}`" class="block h-full">
        <img
          :src="game.thumb"
          :alt="game.title"
          class="w-full h-full object-cover rounded-t-xl"
        />
      </NuxtLink>
    </div>

    <!-- Game Details -->
    <div class="p-4 flex flex-col flex-grow space-y-4">
      <!-- Game Title -->
      <h2
        class="text-lg font-bold text-syrixal-700 hover:text-syrixal-500 transition cursor-pointer truncate"
      >
        {{ game.title }}
      </h2>

      <!-- Game Description -->
      <p
        class="text-sm text-gray-700 overflow-hidden overflow-ellipsis flex-grow"
        style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical"
      >
        {{ game.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span
            @click="tagClick(tag)"
            class="bg-gradient-to-r from-syrixal-200 to-syrixal-100 text-syrixal-800 px-2 py-1 rounded-full text-xs cursor-pointer hover:from-syrixal-300 hover:to-syrixal-200 hover:text-syrixal-900 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            :title="getTagTitle(tag)"
          >
            <NuxtLink to="/search">
              {{ tag }}
            </NuxtLink>
          </span>
        </template>
      </div>

      <!-- Play Now Button -->
      <div class="flex justify-center">
        <a
          @click.stop="playnow"
          target="_blank"
          class="bg-gradient-to-r from-syrixal-500 to-syrixal-400 text-custom-600 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:from-syrixal-600 hover:to-syrixal-500 hover:scale-105 transform transition-transform duration-300 cursor-pointer"
        >
          Play Now
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { searchClickEventBus } from "~/common/eventBus";
import { searchContent, searchType, SearchTypes } from "~/common/search";

defineProps({
  game: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const emits = defineEmits(["playnow"]);

function playnow(game) {
  emits("playnow", game);
}

// 格式化标签，最多显示8个标签
function formatTags(tags) {
  return tags.split(",").slice(0, 8);
}

function tagClick(tag) {
  searchType.value = SearchTypes.Tags;
  searchContent.value = tag;
  searchClickEventBus.emit(tag);
}

// 动态生成标签的title，假设我们希望显示 "Browse games with [tag]"
function getTagTitle(tag) {
  return `Browse games with the "${tag}" tag.`;
}
</script>
