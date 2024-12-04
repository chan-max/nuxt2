<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 shadow-2xl rounded-xl bg-transparent">
      <!-- Page Header -->
      <h1 class="text-5xl font-extrabold text-primary-500 text-center mb-12">About Us</h1>

      <!-- Welcome Section -->
      <section class="mb-10">
        <p class="text-primary-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Welcome to <span class="font-semibold text-primary-500">TitanRun</span>—a
          platform where adventure, strategy, and innovation collide. At TitanRun, we
          empower players to explore, conquer, and connect with a global community of
          creators and gamers.
        </p>
      </section>

      <!-- Forge Your Destiny -->
      <section class="mb-10">
        <h2 class="text-3xl font-semibold text-primary-500 mb-6 text-center">
          Forge Your Destiny
        </h2>
        <p class="text-primary-600 text-lg leading-relaxed max-w-3xl mx-auto">
          TitanRun is more than just a gaming platform—it’s your gateway to limitless
          possibilities. Build dynamic worlds, master strategic gameplay, and challenge
          yourself to achieve greatness in every adventure.
        </p>
      </section>

      <!-- Community at the Heart -->
      <section class="mb-10">
        <h2 class="text-3xl font-semibold text-primary-500 mb-6 text-center">
          Community at the Heart
        </h2>
        <p class="text-primary-600 text-lg leading-relaxed max-w-3xl mx-auto">
          <span class="font-semibold text-primary-500"
            >At TitanRun, community drives everything we do.</span
          >
          We are a thriving network where players collaborate, innovate, and celebrate
          together. Forge alliances, share unique creations, and be part of an inspiring
          global community.
        </p>
      </section>

      <!-- Create, Collaborate, Conquer -->
      <section class="mb-10">
        <h2 class="text-3xl font-semibold text-primary-500 mb-6 text-center">
          Create, Collaborate, Conquer
        </h2>
        <p class="text-primary-600 text-lg leading-relaxed max-w-3xl mx-auto">
          TitanRun gives you the tools to transform imagination into action and challenges
          into triumphs. Partner with other players, pave your unique path, and make your
          mark in a universe of endless possibilities.
        </p>
      </section>

      <!-- Contact Us -->
      <section>
        <h2 class="text-3xl font-semibold text-primary-500 mb-6 text-center">
          Contact Us
        </h2>
        <p class="text-primary-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Have questions, feedback, or ready to start your
          <span class="font-semibold text-primary-500">TitanRun</span> journey? Reach out
          to us at
          <a
            href="mailto:support@titanrun.com"
            class="text-primary-500 hover:underline font-bold"
          >
            support@titanrun.com
          </a>
          . We’re here to support you every step of the way!
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
/* Customize colors for the primary theme */
.text-primary-500 {
  color: #4a90e2; /* Replace with TitanRun's primary color */
}
.text-primary-600 {
  color: #357abd; /* Replace with TitanRun's secondary color */
}
</style>
