<template>
  <div class="min-h-screen py-12 bg-gradient-to-b from-gray-50 via-white to-gray-100">
    <main class="container mx-auto px-6 py-10 bg-white shadow-2xl rounded-xl">
      <!-- Page Header -->
      <h1 class="text-5xl font-extrabold text-gray-800 text-center mb-12">
        Terms of Service
      </h1>

      <!-- Welcome Section -->
      <section class="mb-10">
        <p class="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Welcome to <span class="font-semibold">InferGrid</span>! These terms and
          conditions outline the rules and regulations for using InferGrid's website. If you
          do not agree to these terms, we kindly ask you to discontinue using this
          website.
        </p>
      </section>

      <!-- Terminology Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Terminology</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          The following terminology applies to these Terms and Conditions, Privacy Policy,
          and Disclaimer Notice, as well as all Agreements:
        </p>
        <ul class="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>"Client," "You," and "Your" refer to you, the user of this website.</li>
          <li>"The Company," "We," "Our," and "Us" refer to InferGrid.</li>
          <li>
            "Party," "Parties," or "Us" refers to both the Client and InferGrid
            collectively.
          </li>
        </ul>
      </section>

      <!-- Cookies Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Cookies</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          We use cookies to enhance your experience on InferGrid. By using our website, you
          consent to the use of cookies in accordance with our
          <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </section>

      <!-- License Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">License</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Unless otherwise stated, InferGrid and its licensors own the intellectual property
          rights for all material on this website. All rights are reserved. The following
          actions are not permitted:
        </p>
        <ul class="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>Republishing material from InferGrid without explicit permission.</li>
          <li>Selling, renting, or sub-licensing material from InferGrid.</li>
          <li>Reproducing, duplicating, or copying material from InferGrid.</li>
          <li>Redistributing content from InferGrid without explicit permission.</li>
        </ul>
      </section>

      <!-- Hyperlinking Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Hyperlinking to Our Content</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Certain organizations may link to our website without prior approval, including
          government agencies, search engines, and news organizations. However, such links
          must not falsely imply sponsorship or endorsement by InferGrid.
        </p>
      </section>

      <!-- Content Liability Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Content Liability</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          InferGrid is not responsible for content appearing on your website. You agree to
          protect and defend us against any claims arising from content on your website.
          Links to InferGrid must not promote unlawful activities or infringe on the rights
          of others.
        </p>
      </section>

      <!-- Disclaimer Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Disclaimer</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          To the fullest extent permitted by law, InferGrid excludes all warranties and is
          not responsible for any loss or damage resulting from the use of this website.
        </p>
      </section>

      <!-- Contact Section -->
      <section>
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          If you have any questions about these terms, feel free to
          <a href="#" class="text-blue-600 hover:underline">contact us</a>.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useGameTermsSeo } from "@/common/seo";

useGameTermsSeo();
</script>

<style scoped>
/* Optional: Add additional styles if needed */
</style>
