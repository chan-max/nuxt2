<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
  >
    <div class="flex flex-col items-center space-y-4">
      <!-- Enhanced Loading Spinner -->
      <div class="relative w-12 h-12">
        <div
          class="absolute inset-0 border-4 border-transparent border-t-custom-500 rounded-full animate-spin-slow"
        ></div>
        <div
          class="absolute inset-0 border-4 border-transparent border-b-custom-300 rounded-full animate-spin-fast"
        ></div>
      </div>
      <!-- Loading Text -->
      <p class="text-white text-lg font-semibold tracking-widest">Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { useLoading } from "~/common/useLoading";

const { isLoading } = useLoading();
</script>

<style scoped>
/* Custom animations for the spinner */
@keyframes spinSlow {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spinFast {
  100% {
    transform: rotate(-360deg);
  }
}
.animate-spin-slow {
  animation: spinSlow 1.5s linear infinite;
}
.animate-spin-fast {
  animation: spinFast 1s linear infinite;
}
</style>
