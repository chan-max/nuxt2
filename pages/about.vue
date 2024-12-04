<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 shadow-2xl rounded-xl bg-transparent">
      <!-- Page Header -->
      <h1 class="text-5xl font-extrabold text-second-500 text-center mb-12">
        About Us
      </h1>

      <!-- Welcome Section -->
      <section class="mb-10">
        <p class="text-second-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Welcome to <span class="font-semibold text-second-500">CelForge</span>—a
          platform where creativity, strategy, and community converge. At CelForge, we
          empower players to craft their worlds, master innovative gameplay, and connect
          with like-minded creators and adventurers.
        </p>
      </section>

      <!-- Forge Your Destiny -->
      <section class="mb-10">
        <h2 class="text-3xl font-semibold text-second-500 mb-6 text-center">
          Forge Your Destiny
        </h2>
        <p class="text-second-600 text-lg leading-relaxed max-w-3xl mx-auto">
          CelForge isn’t just about playing games—it’s about creating, innovating, and
          conquering challenges. Here, you’ll shape dynamic worlds, refine your strategies,
          and build something extraordinary with the power of your imagination.
        </p>
      </section>

      <!-- Community at the Heart -->
      <section class="mb-10">
        <h2 class="text-3xl font-semibold text-second-500 mb-6 text-center">
          Community at the Heart
        </h2>
        <p class="text-second-600 text-lg leading-relaxed max-w-3xl mx-auto">
          <span class="font-semibold text-second-500">At CelForge, community is
          everything.</span> We are a thriving hub for collaboration, innovation, and
          shared creativity. Whether you're building alliances, crafting unique
          experiences, or celebrating triumphs, you're part of a vibrant global network.
        </p>
      </section>

      <!-- Create, Collaborate, Conquer -->
      <section class="mb-10">
        <h2 class="text-3xl font-semibold text-second-500 mb-6 text-center">
          Create, Collaborate, Conquer
        </h2>
        <p class="text-second-600 text-lg leading-relaxed max-w-3xl mx-auto">
          CelForge empowers you to turn ideas into reality and challenges into victories.
          Join forces with fellow players, forge unique paths, and leave your mark in a
          constantly evolving universe of infinite possibilities.
        </p>
      </section>

      <!-- Contact Us -->
      <section>
        <h2 class="text-3xl font-semibold text-second-500 mb-6 text-center">
          Contact Us
        </h2>
        <p class="text-second-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Have questions, feedback, or ready to embark on your
          <span class="font-semibold text-second-500">CelForge</span> journey? Reach out
          to us at
          <a
            href="mailto:support@celforge.com"
            class="text-second-500 hover:underline font-bold"
          >
            support@celforge.com
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
/* Customize colors for the second theme */
.text-second-500 {
  color: #4d9fef; /* Replace with your second theme primary color */
}
.text-second-600 {
  color: #3b82d8; /* Replace with your second theme secondary color */
}
</style>
