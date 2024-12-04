<template>
  <div class="min-h-screen py-12 ">
    <main class="container mx-auto px-6 py-10 bg-white shadow-2xl rounded-xl">
      <!-- Header -->
      <h1 class="text-4xl font-extrabold text-gray-900 text-center mb-10">About Us</h1>

      <!-- Welcome Section -->
      <section class="mb-8">
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Welcome to <span class="font-semibold text-blue-600">Thundrix</span>—where
          innovation meets the ultimate gaming experience. Built for adventurers,
          strategists, and visionaries, Thundrix is your gateway to thrilling challenges,
          immersive gameplay, and a global community of passionate players.
        </p>
      </section>

      <!-- Transformative Gaming -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Unleashing the Power of Immersion
        </h2>
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Thundrix is more than just a gaming platform—it’s a transformative journey into
          worlds of creativity and innovation. Whether you’re conquering epic battles,
          exploring vast landscapes, or forging strategic alliances, every moment is an
          opportunity to excel.
        </p>
      </section>

      <!-- Community Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">
          A Vibrant Global Community
        </h2>
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          <span class="font-semibold text-blue-600">At Thundrix, community is everything.</span>
          We unite players from around the globe to collaborate, compete, and celebrate
          achievements. Dive into a network of innovators who inspire and challenge each
          other, making every game a shared triumph.
        </p>
      </section>

      <!-- Innovation Meets Ambition -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Innovation Meets Ambition
        </h2>
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          With cutting-edge tools and limitless possibilities, Thundrix empowers you to
          turn ambition into achievement. Redefine what's possible in gaming, innovate
          with creativity, and leave a legacy in immersive worlds.
        </p>
      </section>

      <!-- Contact Section -->
      <section>
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">Contact Us</h2>
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Have questions, feedback, or ready to embark on your Thundrix adventure? Reach
          out to us at
          <a href="mailto:support@thundrix.com" class="text-blue-600 hover:underline">
            support@thundrix.com
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
/* Optional: Customize additional styles for Thundrix branding */
.text-blue-600 {
  color: #4a90e2; /* Thundrix brand color */
}
</style>
