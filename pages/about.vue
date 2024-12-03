<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 bg-white shadow-2xl rounded-xl">
      <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-10">About Us</h1>

      <section class="mb-8">
        <p class="text-gray-700 text-lg leading-relaxed">
          Welcome to <span class="font-semibold">OrbRaid</span>—a platform designed for
          players who thrive on strategy, collaboration, and challenge. At OrbRaid, we
          bring gamers together to experience epic raids, conquer formidable battles, and
          build lasting alliances.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          A World of Epic Raids
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          OrbRaid isn’t just about gaming—it’s about embarking on unforgettable journeys.
          Here, you’ll tackle exhilarating challenges, push your strategic skills to the
          limit, and emerge victorious as part of a dedicated team. This is your arena to
          rise, lead, and achieve greatness.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Community at Heart</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          <span class="font-semibold">At OrbRaid, community comes first.</span> We are
          built on the foundation of teamwork and camaraderie. Whether you’re forming
          alliances, sharing strategies, or celebrating victories, you’re part of a
          vibrant global network of passionate gamers.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Conquer, Collaborate, Create
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          OrbRaid empowers you to take on the toughest challenges with innovation and
          collaboration. Join forces with like-minded players, forge your path to
          success, and leave your mark on the gaming world.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Have questions, feedback, or ready to embark on your OrbRaid journey? Reach out
          to us at
          <a href="mailto:support@orbraid.com" class="text-blue-600 hover:underline">
            support@orbraid.com
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
/* Optional: Add any additional custom styles if needed */
</style>
