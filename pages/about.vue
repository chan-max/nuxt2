<template>
  <div class="min-h-screen py-12 ">
    <main class="container mx-auto px-6 py-10 bg-white shadow-2xl rounded-xl">
      <!-- Header -->
      <h1 class="text-4xl font-extrabold text-gray-900 text-center mb-10">About Us</h1>

      <!-- Welcome Section -->
      <section class="mb-8">
        <p class="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Welcome to <span class="font-semibold text-indigo-600">EchoCry</span>—where
          mystery, sound, and adventure come together. EchoCry is your gateway to a
          groundbreaking platform where auditory exploration meets thrilling gameplay.
          Step into a world where every sound reveals a new story.
        </p>
      </section>

      <!-- Sound-Based Exploration -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">
          A New Dimension of Gaming
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          EchoCry is not just about playing—it’s about listening, exploring, and solving.
          Dive into an auditory adventure where every echo guides you closer to the truth.
          With innovative sound-based mechanics, every challenge is a chance to think
          beyond the visual and immerse yourself in mystery.
        </p>
      </section>

      <!-- Community Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">
          A Community of Adventurers
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          <span class="font-semibold text-indigo-600">At EchoCry, community is the core of the experience.</span>
          We bring together puzzle-solvers, storytellers, and gamers who share a love for
          the unknown. Join a vibrant network of players who think differently and inspire
          each other to uncover every hidden secret.
        </p>
      </section>

      <!-- Innovation Meets Mystery -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Where Innovation Meets Mystery
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          EchoCry redefines gaming by combining innovative sound-based mechanics with
          immersive storytelling. Solve puzzles, uncover hidden truths, and let your
          imagination guide you. This is where your senses come alive, and every step
          forward is a testament to your curiosity.
        </p>
      </section>

      <!-- Contact Section -->
      <section>
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">Contact Us</h2>
        <p class="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Have questions, feedback, or ready to begin your EchoCry journey? Connect with
          us at
          <a href="mailto:support@echocry.com" class="text-indigo-600 hover:underline">
            support@echocry.com
          </a>
          . We’re here to guide you and celebrate every discovery you make!
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
/* Optional: Customize additional styles for EchoCry branding */
.text-indigo-600 {
  color: #5a67d8; /* EchoCry brand accent color */
}
</style>
