<template>
  <div class="max-w-7xl mx-auto p-4">
    <!-- Top Section -->
    <div class="flex items-center justify-between mb-6">
      <!-- Title -->
      <h1
        class="text-2xl sm:text-4xl font-bold flex items-end justify-between space-x-4 text-second-500 w-full"
      >
        <span>{{ title }}</span>

        <button
          v-if="viewMore && games?.length > 0"
          @click="clickViewMore(title)"
          class="px-4 text-lg py-2 bg-second-500 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-second-600 transition"
        >
          <NuxtLink to="/search"> More → </NuxtLink>
        </button>
      </h1>
    </div>

    <!-- Game Cards Grid -->
    <div
      v-if="games?.length > 0"
      class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-5"
    >
      <GameCard
        v-for="(game, index) in games"
        :key="game.id"
        :game="game"
        class="transform transition-transform hover:scale-105 rounded-lg"
        @playnow="$emit('playnow', game)"
        @thumbClick="$emit('thumbClick', game)"
        @tagClick="$emit('tagClick')"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="flex flex-col items-center justify-center py-12">
      <p class="text-gray-500 text-lg">No games available at the moment.</p>
      <NuxtLink
        to="/"
        class="mt-4 bg-custom-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-custom-600 transition-all"
      >
        Go Back to Home
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
