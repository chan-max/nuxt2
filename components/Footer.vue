<template>
  <footer class="bg-second-700 border-t-4 border-custom-500 text-white py-10">
    <div class="container mx-auto text-center space-y-6">
      <!-- Brand and Copyright -->
      <p class="text-sm tracking-wide">
        &copy; 2024
        <span class="font-bold text-custom-400">{{ gameConfig.brandName }}</span
        >. All rights reserved.
      </p>

      <!-- Navigation Links -->
      <div class="flex justify-center space-x-8">
        <NuxtLink
          to="/privacy"
          class="text-sm font-semibold text-white hover:text-custom-400 transition duration-300"
        >
          Privacy Policy
        </NuxtLink>
        <NuxtLink
          to="/terms"
          class="text-sm font-semibold text-white hover:text-custom-400 transition duration-300"
        >
          Terms of Service
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-sm font-semibold text-white hover:text-custom-400 transition duration-300"
        >
          About Us
        </NuxtLink>
      </div>

      <!-- Social Media Icons -->
      <div class="flex justify-center space-x-6 mt-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-custom-400 transition"
        >
          <UIcon name="i-heroicons-facebook-circle" class="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-custom-400 transition"
        >
          <UIcon name="i-heroicons-twitter" class="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-custom-400 transition"
        >
          <UIcon name="i-heroicons-instagram" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import gameConfig from "@/game.config";
</script>
