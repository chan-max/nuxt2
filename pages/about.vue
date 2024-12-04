<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 bg-white shadow-2xl rounded-xl">
      <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-10">About Us</h1>

      <section class="mb-8">
        <p class="text-gray-700 text-lg leading-relaxed">
          Welcome to <span class="font-semibold">Cryonix</span>—a platform designed for
          gamers who seek immersive adventures, masterful strategies, and meaningful
          connections. At Cryonix, we blend creativity, competition, and collaboration to
          create unforgettable gaming experiences.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">A Realm of Innovation</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Cryonix isn’t just about gaming—it’s a journey into uncharted territories of
          strategy and creativity. Here, you’ll explore groundbreaking challenges, refine
          your skills, and lead your team to unparalleled achievements. This is your stage
          to innovate, conquer, and excel.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Community at the Core</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          <span class="font-semibold"
            >At Cryonix, community is the foundation of success.</span
          >
          Whether you’re forging alliances, crafting new strategies, or celebrating
          victories, you’re part of a thriving network of passionate gamers who inspire
          and uplift one another.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Elevate Your Gaming Experience
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Cryonix empowers players to push boundaries and redefine what’s possible. With
          innovative tools, dynamic multiplayer modes, and a vibrant community, we provide
          the ultimate platform to unleash your creativity and strategic prowess.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Have questions, feedback, or ready to embark on your Cryonix journey? Reach out
          to us at
          <a href="mailto:support@cryonix.com" class="text-blue-600 hover:underline">
            support@cryonix.com
          </a>
          . We’re here to help and celebrate your success!
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
/* Optional: Add additional custom styles if needed */
</style>
