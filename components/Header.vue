<template>
  <header
    class="text-second-500 shadow-md z-10 border-b-8 border-second-500 cloud-border"
  >
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
            active-class="underline decoration-2 underline-offset-4 text-second-600"
          >
            <span class="text-lg font-bold group-hover:text-second-500 transition">
              Home
            </span>
          </NuxtLink>
          <NuxtLink
            to="/games"
            class="flex flex-col items-center justify-center space-y-1 group"
            active-class="underline decoration-2 underline-offset-4 text-second-600"
          >
            <span class="text-lg font-bold group-hover:text-second-500 transition">
              Games
            </span>
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="flex flex-col items-center justify-center space-y-1 group"
            active-class="underline decoration-2 underline-offset-4 text-second-600"
          >
            <span class="text-lg font-bold group-hover:text-second-500 transition">
              About
            </span>
          </NuxtLink>
        </nav>
      </div>

      <!-- 右侧：搜索框 -->
      <div class="hidden md:flex items-center space-x-4">
        <div
          class="flex items-center bg-white rounded-full border-4 border-second-500 focus-within:border-second-600 transition"
        >
          <!-- 分类选择下拉框 -->
          <select
            v-model="searchType"
            @change="searchTypeChange"
            class="px-4 py-3 text-sm bg-transparent border-none focus:outline-none text-custom-700 font-semibold border-r-2 border-second-400"
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
            class="px-4 py-3 text-sm bg-white border-none focus:outline-none text-custom-700 w-full"
          />

          <!-- 搜索按钮 -->
          <button
            @click="searchClick"
            class="px-6 py-3 text-sm bg-second-500 text-white rounded-full hover:bg-second-600 focus:outline-none transition font-bold"
          >
            Search
          </button>
        </div>
      </div>

      <!-- 移动菜单按钮 -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-second-500"
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
        <NuxtLink
          to="/"
          class="hover:text-second-500"
          active-class="underline decoration-2 underline-offset-4 text-second-600"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/games"
          class="hover:text-second-500"
          active-class="underline decoration-2 underline-offset-4 text-second-600"
        >
          Games
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="hover:text-second-500"
          active-class="underline decoration-2 underline-offset-4 text-second-600"
        >
          About
        </NuxtLink>
      </nav>

      <!-- 移动端搜索框 -->
      <div class="p-4 bg-white rounded-md mt-4">
        <div
          class="flex items-center bg-white rounded-full border-4 border-second-500 focus-within:border-second-600 transition"
        >
          <!-- 分类选择下拉框 -->
          <select
            v-model="searchType"
            @change="searchTypeChange"
            class="px-4 py-3 text-sm bg-transparent border-none focus:outline-none text-custom-700 font-semibold border-r-2 border-second-400"
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
            class="px-4 py-3 text-sm bg-white border-none focus:outline-none text-custom-700 w-full"
          />

          <!-- 搜索按钮 -->
          <button
            @click="searchClick"
            class="px-6 py-3 text-sm bg-second-500 text-white rounded-full hover:bg-second-600 focus:outline-none transition font-bold"
          >
            Search
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

const router = useRouter();

// 处理搜索逻辑
function searchClick() {
  searchClickEventBus.emit(searchContent.value);
  router.push({ path: "/search" });
}

function searchTypeChange() {
  searchTypeEventBus.emit(searchType.value);
}
</script>
