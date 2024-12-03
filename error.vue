<template>
  <Header />
  <main class="container mx-auto">
    <div
      class="min-h-screen flex flex-col items-center justify-center bg-cover"
      style="background-image: url('your_space-themed_background.jpg')"
    >
      <div class="text-center">
        <h1
          class="text-6xl font-bold text-black transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Whoops!
        </h1>
        <p class="text-xl text-gray-300 mt-4 mb-2">
          It looks like you've flown into uncharted territory.
        </p>
        <p class="text-md text-gray-400 mb-4">No worries, let's get you back on track:</p>
        <NuxtLink
          href="/"
          class="px-6 py-3 bg-custom-500 text-white font-semibold rounded-md shadow transition duration-500 ease-in-out hover:bg-custom-600 transform hover:-translate-y-1 hover:scale-105"
        >
          Take me home</NuxtLink
        >
      </div>
    </div>
  </main>
  <Footer />
</template>

<script setup>
useSeoMeta({
  title: "404 Not Found",
  description: `The page you're looking for doesn't seem to exist.`,
});
</script>
