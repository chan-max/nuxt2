<template>
  <div class="min-h-screen py-12 ">
    <main class="container mx-auto px-6 py-10 bg-white shadow-2xl rounded-xl">
      <!-- Page Header -->
      <h1 class="text-5xl font-extrabold text-gray-900 text-center mb-12">
        Terms of Service
      </h1>

      <!-- Welcome Section -->
      <section class="mb-10">
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Welcome to <span class="font-semibold text-indigo-600">WarpNix</span>! These
          terms and conditions outline the rules and regulations for using the WarpNix
          platform. By accessing WarpNix, you agree to these terms. If you do not agree,
          we kindly ask you to discontinue using our services.
        </p>
      </section>

      <!-- Terminology Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">Terminology</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          The following terminology applies to these Terms and Conditions, Privacy Policy,
          and Disclaimer Notice:
        </p>
        <ul class="list-disc list-inside text-gray-800 mt-4 space-y-2">
          <li>"Client," "You," and "Your" refer to you, the user of this platform.</li>
          <li>"The Company," "We," "Our," and "Us" refer to WarpNix.</li>
          <li>
            "Party," "Parties," or "Us" refers to both the Client and WarpNix
            collectively.
          </li>
        </ul>
      </section>

      <!-- Cookies Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">Cookies</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          WarpNix uses cookies to enhance your experience. By continuing to use our
          platform, you consent to the use of cookies as outlined in our
          <a href="/privacy-policy" class="text-indigo-600 hover:underline">
            Privacy Policy </a
          >.
        </p>
      </section>

      <!-- License Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">License</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          Unless otherwise stated, WarpNix and its licensors own the intellectual property
          rights for all material on this platform. All rights are reserved. The following
          actions are strictly prohibited without prior permission:
        </p>
        <ul class="list-disc list-inside text-gray-800 mt-4 space-y-2">
          <li>Republishing material from WarpNix.</li>
          <li>Selling, renting, or sub-licensing material from WarpNix.</li>
          <li>Reproducing, duplicating, or copying material from WarpNix.</li>
          <li>Redistributing content from WarpNix.</li>
        </ul>
      </section>

      <!-- Hyperlinking Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">
          Hyperlinking to Our Content
        </h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          Certain organizations may link to our platform without prior approval, such as
          government agencies, search engines, and news organizations. However, these
          links must not falsely imply sponsorship or endorsement by WarpNix.
        </p>
      </section>

      <!-- Content Liability Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">Content Liability</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          WarpNix is not responsible for content appearing on your platform. You agree to
          indemnify us against any claims arising from such content. Links to WarpNix must
          not promote unlawful activities or violate the rights of others.
        </p>
      </section>

      <!-- Disclaimer Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          To the fullest extent permitted by law, WarpNix excludes all warranties and
          disclaims liability for any loss or damage arising from the use of this
          platform.
        </p>
      </section>

      <!-- Contact Section -->
      <section>
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">Contact</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          If you have any questions regarding these terms, feel free to
          <a href="/contact" class="text-indigo-600 hover:underline">contact us</a>.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
// Import SEO configuration for "Terms of Service" page
import { useGameTermsSeo } from "@/common/seo";
useGameTermsSeo();
</script>

<style scoped>
/* WarpNix branding styles */
.text-indigo-600 {
  color: #5a67d8; /* WarpNix primary color */
}
.bg-gradient-to-b {
  background: linear-gradient(to bottom, #f7fafc, #edf2f7, #e2e8f0); /* Subtle gradient */
}
</style>
