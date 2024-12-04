<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 bg-white shadow-2xl rounded-xl">
      <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-10">About Us</h1>

      <section class="mb-8">
        <p class="text-gray-700 text-lg leading-relaxed">
          Welcome to <span class="font-semibold">InferGrid</span>—a platform designed for
          players who thrive on strategy, innovation, and tactical challenges. At InferGrid, 
          we unite gamers to explore dynamic grids, master strategic gameplay, and build 
          lasting connections.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          A World of Strategic Grids
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          InferGrid isn’t just about gaming—it’s about mastering innovative gameplay 
          and redefining tactics. Here, you’ll navigate intricate challenges, refine your 
          strategies, and collaborate with others to dominate the grid.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Community at the Core</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          <span class="font-semibold">At InferGrid, community is everything.</span> We are
          built on the principles of collaboration and shared success. Whether you’re 
          forming alliances, exchanging strategies, or celebrating victories, you’re part 
          of a global network of passionate gamers.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Innovate, Collaborate, Dominate
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          InferGrid empowers you to tackle the toughest challenges with ingenuity and 
          teamwork. Join forces with like-minded players, shape your strategies, and leave 
          your mark in a world of evolving grids and endless possibilities.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Have questions, feedback, or ready to embark on your InferGrid journey? Reach out
          to us at
          <a href="mailto:support@infergrid.com" class="text-blue-600 hover:underline">
            support@infergrid.com
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
