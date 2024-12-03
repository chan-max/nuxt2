<template>
  <div class="max-w-6xl mx-auto py-8 px-6 lg:px-10 my-10 bg-white rounded-xl shadow-lg">
    <!-- 内容布局 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- 左侧：图片和相关内容 -->
      <div class="md:col-span-1 flex flex-col items-start">
        <!-- 游戏封面 -->
        <img
          :src="data?.thumb"
          :alt="data?.title"
          class="w-full h-auto rounded-lg shadow-lg mb-6"
        />

        <!-- 游戏标签 -->
        <div class="mb-6">
          <h2 class="text-xl font-bold text-gray-800 mb-3">Tags</h2>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in data?.tags?.split(', ')"
              :key="tag"
              class="bg-gradient-to-r from-syrixal-200 to-syrixal-100 text-syrixal-800 px-3 py-1 rounded-full text-sm font-medium shadow hover:from-syrixal-300 hover:to-syrixal-200 hover:text-syrixal-900 transition-all"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- 游戏分类和尺寸 -->
        <div>
          <h2 class="text-xl font-bold text-gray-800 mb-3">Details</h2>
          <ul class="text-gray-700 space-y-2">
            <li><strong>Category:</strong> {{ data?.category }}</li>
            <li><strong>Width:</strong> {{ data?.width }} px</li>
            <li><strong>Height:</strong> {{ data?.height }} px</li>
          </ul>
        </div>
      </div>

      <!-- 右侧：主要内容 -->
      <div class="md:col-span-2 flex flex-col">
        <!-- 游戏标题和按钮 -->
        <div class="mb-6">
          <h1 class="text-4xl font-extrabold text-gray-900 mb-4">{{ data?.title }}</h1>
          <button
            @click="playnow"
            class="inline-block px-8 py-3 bg-gradient-to-r from-syrixal-500 to-syrixal-400 text-white font-bold rounded-lg shadow hover:from-syrixal-600 hover:to-syrixal-500 transition-all"
          >
            Play Now
          </button>
        </div>

        <!-- 游戏描述 -->
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-3">Description</h2>
          <p class="text-gray-700 leading-relaxed text-lg">{{ data?.description }}</p>
        </div>

        <!-- 游戏说明 -->
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-3">How to Play</h2>
          <p class="text-gray-700 leading-relaxed">{{ data?.instructions }}</p>
        </div>

        <!-- 联系方式或分享 -->
        <div>
          <h2 class="text-2xl font-bold text-gray-800 mb-3">Contact</h2>
          <SocialShareList />
        </div>
      </div>
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

// 获取游戏详情数据
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
