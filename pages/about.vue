<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 bg-white shadow-2xl rounded-xl">
      <!-- Header -->
      <h1 class="text-4xl font-extrabold text-gray-900 text-center mb-10">About Us</h1>

      <!-- Welcome Section -->
      <section class="mb-8">
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Welcome to <span class="font-semibold text-indigo-600">WarpNix</span>—where
          sound, mystery, and adventure converge. Step into an auditory journey that
          challenges your senses and unveils thrilling discoveries. WarpNix isn't just a
          platform; it's a call to explore the unseen through sound.
        </p>
      </section>

      <!-- Sound-Based Exploration -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Gaming Beyond the Visual
        </h2>
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          WarpNix introduces a revolutionary approach to gaming, where sound leads the
          way. Through immersive auditory cues, you’ll navigate mysteries, uncover hidden
          stories, and solve intricate puzzles. Each echo brings you closer to the truth,
          redefining how games are experienced.
        </p>
      </section>

      <!-- Community Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">
          A Community Built on Curiosity
        </h2>
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          <span class="font-semibold text-indigo-600"
            >At WarpNix, our community is our strength.</span
          >
          We connect adventurers, puzzle-solvers, and dreamers who thrive on uncovering
          the unknown. Share your discoveries, celebrate breakthroughs, and inspire others
          to dive deeper into the WarpNix universe.
        </p>
      </section>

      <!-- Innovation Meets Mystery -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Innovation Meets Immersion
        </h2>
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Experience gaming like never before with WarpNix’s sound-driven mechanics and
          captivating storytelling. Each step forward invites you to question, imagine,
          and immerse yourself in a world where sound unveils secrets.
        </p>
      </section>

      <!-- Contact Section -->
      <section>
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">Contact Us</h2>
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Ready to begin your WarpNix adventure or have questions? Reach out to us at
          <a href="mailto:support@WarpNix.com" class="text-indigo-600 hover:underline">
            support@WarpNix.com
          </a>
          . We’re here to assist you and celebrate your journey through sound and
          discovery!
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
/* WarpNix branding and accent colors */
.text-indigo-600 {
  color: #5a67d8; /* WarpNix brand color */
}
.bg-gradient-to-b {
  background: linear-gradient(
    to bottom,
    #f7fafc,
    #edf2f7
  ); /* Subtle gradient for WarpNix */
}
</style>
