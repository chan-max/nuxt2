<template>
  <header class="text-white shadow-md z-10 bg-custom-300">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- 左侧：Logo 和导航菜单 -->
      <div class="flex items-center space-x-8">
        <!-- Logo -->
        <div class="flex items-center shrink-0">
          <NuxtLink to="/">
            <img
              src="/logo.svg"
              alt="Logo"
              class="h-8 w-auto pr-2 max-w-[120px] md:max-w-none hover:scale-105"
            />
          </NuxtLink>
        </div>

        <!-- 导航菜单 -->
        <nav class="hidden md:flex space-x-6">
          <NuxtLink
            to="/"
            class="flex flex-col items-center justify-center space-y-1 group"
          >
            <!-- <UIcon
              name="i-heroicons-home"
              class="w-6 h-6 text-white group-hover:text-custom-200 transition-transform transform group-hover:scale-110"
            /> -->
            <span class="text-sm text-white group-hover:text-custom-200 transition">
              Home
            </span>
          </NuxtLink>
          <NuxtLink
            to="/games"
            class="flex flex-col items-center justify-center space-y-1 group"
          >
            <!-- <UIcon
              name="i-heroicons-bars-3-16-solid"
              class="w-6 h-6 text-white group-hover:text-custom-200 transition-transform transform group-hover:scale-110"
            /> -->
            <span class="text-sm text-white group-hover:text-custom-200 transition">
              Games
            </span>
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="flex flex-col items-center justify-center space-y-1 group"
          >
            <!-- <UIcon
              name="i-heroicons-information-circle"
              class="w-6 h-6 text-white group-hover:text-custom-200 transition-transform transform group-hover:scale-110"
            /> -->
            <span class="text-sm text-white group-hover:text-custom-200 transition">
              About
            </span>
          </NuxtLink>
        </nav>
      </div>

      <!-- 右侧：搜索框 -->
      <div class="hidden md:flex items-center space-x-4">
        <div
          class="flex items-center bg-custom-500 bg-opacity-80 hover:bg-opacity-100 rounded-lg overflow-hidden border-2 border-custom-600 focus-within:border-custom-700 transition"
        >
          <!-- 分类选择下拉框 -->
          <select
            v-model="searchType"
            @change="searchTypeChange"
            class="px-4 py-2 text-sm text-white bg-transparent border-none focus:outline-none sm:w-32 md:w-40 w-20 border-r-2 border-custom-400"
          >
            <option value="title">Title</option>
            <option value="category">Category</option>
            <option value="tags">Tags</option>
          </select>

          <!-- 搜索框输入 -->
          <input
            v-model="searchContent"
            @keyup.enter="searchClick"
            type="text"
            placeholder="Search..."
            class="px-4 py-2 text-sm text-white bg-transparent border-none focus:outline-none sm:w-64 md:w-72 w-48 border-r-2 border-custom-400"
          />

          <!-- 搜索按钮 -->
          <button
            @click="searchClick"
            class="px-4 py-2 text-white bg-custom-600 hover:bg-custom-700 focus:outline-none transition"
          >
            <NuxtLink to="/search"> Search </NuxtLink>
          </button>
        </div>
      </div>

      <!-- 移动菜单按钮 -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    <!-- 移动菜单 -->
    <div v-if="isMenuOpen" class="md:hidden bg-custom-500">
      <nav class="flex flex-col space-y-2 p-4">
        <NuxtLink to="/" class="text-white hover:text-custom-200">Home</NuxtLink>
        <NuxtLink to="/games" class="text-white hover:text-custom-200">Games</NuxtLink>
        <NuxtLink to="/about" class="text-white hover:text-custom-200">About</NuxtLink>
      </nav>

      <!-- 移动端搜索框 -->
      <div class="mt-4 px-4 py-4">
        <div
          class="bg-custom-600 rounded-lg overflow-hidden flex border-2 border-custom-700 focus-within:border-custom-800 transition"
        >
          <!-- 移动端的下拉框 -->
          <select
            v-model="searchType"
            class="px-4 py-2 text-sm text-white bg-transparent border-none focus:outline-none w-24 sm:w-32 md:w-40 border-r-2 border-custom-500"
          >
            <option value="title">Title</option>
            <option value="category">Category</option>
            <option value="tags">Tags</option>
          </select>

          <!-- 移动端搜索框输入 -->
          <input
            v-model="searchContent"
            type="text"
            placeholder="Search..."
            class="px-4 py-2 text-sm text-white bg-transparent border-none focus:outline-none w-full border-r-2 border-custom-500"
          />

          <!-- 移动端搜索按钮 -->
          <button
            @click="searchClick"
            class="px-4 py-2 text-white bg-custom-700 hover:bg-custom-800 focus:outline-none transition"
          >
            <NuxtLink to="/search"> Search</NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { searchContent, searchType } from "~/common/search";
import { searchTypeEventBus, searchClickEventBus } from "@/common/eventBus";

// 控制移动菜单的状态
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

// 处理搜索逻辑
function searchClick() {
  searchClickEventBus.emit(searchContent.value);
}

function searchTypeChange() {
  searchTypeEventBus.emit(searchType.value);
}
</script>
