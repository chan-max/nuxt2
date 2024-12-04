<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 bg-white shadow-2xl rounded-xl">
      <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-10">About Us</h1>

      <section class="mb-8">
        <p class="text-gray-700 text-lg leading-relaxed">
          Welcome to <span class="font-semibold">CelForge</span>—a platform where 
          creativity, strategy, and community converge. At CelForge, we empower players 
          to craft their worlds, master innovative gameplay, and connect with like-minded 
          creators and adventurers.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Forge Your Destiny
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          CelForge isn’t just about playing games—it’s about creating, innovating, and 
          conquering challenges. Here, you’ll shape dynamic worlds, refine your strategies, 
          and build something extraordinary with the power of your imagination.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Community at the Heart</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          <span class="font-semibold">At CelForge, community is everything.</span> We are 
          a thriving hub for collaboration, innovation, and shared creativity. Whether 
          you're building alliances, crafting unique experiences, or celebrating triumphs, 
          you're part of a vibrant global network.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Create, Collaborate, Conquer
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          CelForge empowers you to turn ideas into reality and challenges into victories. 
          Join forces with fellow players, forge unique paths, and leave your mark in a 
          constantly evolving universe of infinite possibilities.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Have questions, feedback, or ready to embark on your CelForge journey? Reach out 
          to us at
          <a href="mailto:support@celforge.com" class="text-blue-600 hover:underline">
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
/* Optional: Add additional custom styles if needed */
</style>
