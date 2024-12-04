<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 bg-gray-50 shadow-2xl rounded-xl">
      <!-- Header -->
      <h1 class="text-4xl font-extrabold text-gray-900 text-center mb-10">About Us</h1>

      <!-- Welcome Section -->
      <section class="mb-8">
        <p class="text-gray-800 text-lg leading-relaxed">
          Welcome to <span class="font-semibold text-custom-500">NovaClash</span>—a dynamic
          platform where strategy meets creativity. Built for gamers and innovators,
          NovaClash is the ultimate destination for those seeking thrilling challenges,
          immersive gameplay, and a vibrant global community.
        </p>
      </section>

      <!-- Transformative Gaming -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Unleash Your Potential</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          NovaClash offers more than just games—it’s a transformative experience that
          pushes the boundaries of strategy and imagination. Whether you’re conquering
          tactical missions, building awe-inspiring worlds, or forging alliances, every
          step forward showcases your skill and determination.
        </p>
      </section>

      <!-- Community Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">A Thriving Community</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          <span class="font-semibold text-custom-500"
            >At NovaClash, community is at the heart of everything we do.</span
          >
          We connect passionate players, creators, and visionaries to share ideas,
          celebrate achievements, and grow together. Join a network of innovators who
          inspire and challenge each other every day.
        </p>
      </section>

      <!-- Innovation Meets Ambition -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">
          Innovation Meets Ambition
        </h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          At NovaClash, we empower you to turn your dreams into reality. With advanced
          tools, competitive opportunities, and limitless possibilities, you can innovate,
          excel, and leave your mark. Together, we redefine what’s possible in the world
          of gaming.
        </p>
      </section>

      <!-- Contact Section -->
      <section>
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          Have questions, feedback, or ready to embark on your NovaClash journey? Reach
          out to us at
          <a href="mailto:support@novaclash.com" class="text-custom-500 hover:underline">
            support@novaclash.com
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
/* Optional: Customize additional styles for brand identity */
</style>
