<template>
  <div class="min-h-screen py-4">
    <!-- Back to Home Button -->
    <div class="container mx-auto  mb-4">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 px-6 py-3 bg-custom-500 text-white font-semibold rounded-lg shadow hover:bg-custom-600 transition duration-300"
      >
        <UIcon name="i-heroicons-arrow-left-circle" class="w-6 h-6" />
        Back to Home
      </NuxtLink>
    </div>

    <!-- Hero Section -->
    <section class="bg-custom-500 text-white py-16">
      <div
        class="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 p-6"
      >
        <!-- Game Thumbnail -->
        <div class="w-full lg:w-1/3">
          <img
            :src="data?.thumb"
            :alt="data?.title"
            class="rounded-xl shadow-xl w-full h-auto border-4 border-custom-400"
          />
        </div>

        <!-- Game Title and Play Button -->
        <div class="flex-1 space-y-6">
          <h1 class="text-5xl font-extrabold">{{ data?.title }}</h1>
          <p class="text-lg text-gray-500 leading-relaxed">
            {{ data?.description }}
          </p>
          <button
            @click="playnow"
            class="bg-second-500 hover:bg-second-600 text-white py-3 px-8 rounded-lg font-semibold shadow-lg transition-all"
          >
            Play Now
          </button>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto mt-12 space-y-16">
      <!-- Game Details and Tags -->
      <section class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Details Section -->
        <div class="space-y-6 bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-900">Game Details</h2>
          <ul class="space-y-3 text-gray-700">
            <li><strong>Category:</strong> {{ data?.category }}</li>
            <li><strong>Width:</strong> {{ data?.width }} px</li>
            <li><strong>Height:</strong> {{ data?.height }} px</li>
          </ul>
        </div>

        <!-- Tags Section -->
        <div class="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Tags</h2>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="tag in data?.tags?.split(', ')"
              :key="tag"
              class="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-custom-200 hover:text-custom-700 transition"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </section>

      <!-- Description and Instructions -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Description -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Description</h2>
          <p class="text-gray-700 leading-relaxed">{{ data?.description }}</p>
        </div>

        <!-- How to Play -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">How to Play</h2>
          <p class="text-gray-700 leading-relaxed">{{ data?.instructions }}</p>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="bg-custom-100 rounded-lg shadow-md p-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Stay Connected</h2>
        <SocialShareList />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import API from "@/common/api";
import SocialShareList from "@/components/SocialShareList.vue";
import { useGameModal } from "~/common/useGameModal";
import { useLoading } from "~/common/useLoading";
import { useGameTitleSeo } from "~/common/seo";

const route = useRoute();
const id = route.params.id;

// Fetch game details
const { data, pending } = API.getGamesById({ id: id as string });

const { openGameModal } = useGameModal();
const { startLoading, stopLoading } = useLoading();

watchEffect(() => {
  if (data.value?.title) {
    useGameTitleSeo(data.value?.title);
  }
});

watchEffect(() => {
  if (pending.value) {
    startLoading();
  } else {
    stopLoading();
  }
});

function playnow() {
  openGameModal(data.value);
}
</script>
