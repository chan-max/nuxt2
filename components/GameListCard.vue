<template>
  <div class="max-w-7xl mx-auto p-6">
    <!-- Top Section -->
    <div class="flex items-center justify-between mb-8">
      <!-- Title -->
      <h1
        class="text-3xl sm:text-5xl font-extrabold text-second-500 flex items-center"
      >
        {{ title }}
      </h1>

      <button
        v-if="viewMore && games?.length > 0"
        @click="clickViewMore(title)"
        class="flex items-center px-6 py-3 bg-second-500 text-white text-sm sm:text-base font-medium rounded-lg shadow-md hover:bg-second-600 hover:shadow-lg transition"
      >
        <NuxtLink to="/search">View More →</NuxtLink>
      </button>
    </div>

    <!-- Game Cards Grid -->
    <div
      v-if="games?.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6"
    >
      <GameCard
        v-for="(game, index) in games"
        :key="game.id"
        :game="game"
        class="rounded-lg overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 shadow-lg transform transition-transform hover:scale-105"
        @playnow="$emit('playnow', game)"
        @thumbClick="$emit('thumbClick', game)"
        @tagClick="$emit('tagClick')"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="flex flex-col items-center justify-center py-12 bg-gray-50 rounded-lg shadow-inner">
      <p class="text-gray-400 text-lg sm:text-xl">No games available at the moment.</p>
      <NuxtLink
        to="/"
        class="mt-6 bg-second-500 text-white px-6 py-2 text-sm font-medium rounded-lg shadow-md hover:bg-second-600 transition-all"
      >
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import GameCard from "@/components/GameCard.vue";
import { useRouter } from "vue-router";
import { SearchTypes, searchContent, searchType } from "~/common/search";

const router = useRouter();

defineProps({
  title: {
    type: String,
    default: "",
  },
  games: {
    type: Array,
    default: () => null, // 默认值为 null
  },
  viewMore: {
    type: Boolean,
    default: true,
  },
});

const clickViewMore = (title) => {
  searchContent.value = title;
  searchType.value = SearchTypes.Category;
};
</script>
