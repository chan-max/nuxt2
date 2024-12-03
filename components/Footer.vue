<template>
  <footer class="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8">
    <div class="container mx-auto text-center space-y-4">
      <!-- Brand and Copyright -->
      <p class="text-sm tracking-wide">
        &copy; 2024
        <span class="font-bold text-custom-400">{{ gameConfig.brandName }}</span
        >. All rights reserved.
      </p>

      <!-- Navigation Links -->
      <div class="flex justify-center space-x-6">
        <NuxtLink
          to="/privacy"
          class="text-sm text-custom-400 hover:text-custom-300 transition-colors duration-300"
        >
          Privacy Policy
        </NuxtLink>
        <NuxtLink
          to="/terms"
          class="text-sm text-custom-400 hover:text-custom-300 transition-colors duration-300"
        >
          Terms of Service
        </NuxtLink>
      </div>

      <!-- Decorative Divider -->
      <div
        class="h-1 bg-gradient-to-r from-custom-500 via-custom-400 to-custom-500 w-32 mx-auto rounded"
      ></div>
    </div>
  </footer>
</template>

<script setup>
import gameConfig from "@/game.config";
</script>
