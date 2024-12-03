<template>
  <div class="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-gray-100">
    <main class="container mx-auto px-6 py-10 bg-white shadow-lg rounded-xl">
      <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-10">About Us</h1>

      <section class="mb-8">
        <p class="text-gray-700 text-lg leading-relaxed">
          Welcome to <span class="font-semibold">Craythar</span>—a platform where
          innovation, creativity, and strategy come together. Designed for gamers,
          creators, and visionaries, Craythar is your gateway to a vibrant gaming
          ecosystem where skills are honed, ambitions are realized, and passions come
          alive.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          A Transformative Experience
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Gaming at Craythar is more than just entertainment—it’s an immersive journey of
          exploration, growth, and achievement. Whether you’re mastering strategies,
          crafting groundbreaking content, or forming lifelong connections, every step
          forward is a testament to your dedication and drive.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Community at the Core</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          <span class="font-semibold">At Craythar, community is everything.</span> We
          bring together individuals who share a love for creativity, competition, and
          innovation. This is a place where collaboration flourishes, camaraderie thrives,
          and every idea and achievement contributes to our shared legacy.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Where Ambition Meets Creativity
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Craythar empowers you to turn ambition into achievement. With advanced tools,
          supportive communities, and limitless opportunities, this is your stage to
          innovate, compete, and leave your mark. Step into Craythar and become part of a
          movement that redefines the gaming landscape.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Have questions, feedback, or ready to begin your Craythar journey? Connect with
          us at
          <a href="mailto:contact@craythar.com" class="text-blue-600 hover:underline">
            contact@craythar.com </a
          >. We’re here to support you and celebrate your success!
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
// Import SEO configuration for "About Us" page
import { useGameAboutSeo } from "@/common/seo";
useGameAboutSeo();
</script>

<style scoped>
/* Optional: Add any additional custom styles if needed */
</style>
