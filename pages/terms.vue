<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 bg-white shadow-2xl rounded-xl">
      <!-- Page Header -->
      <h1 class="text-5xl font-extrabold text-gray-900 text-center mb-12">
        Terms of Service
      </h1>

      <!-- Welcome Section -->
      <section class="mb-10">
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Welcome to <span class="font-semibold text-custom-500">NovaClash</span>! These
          terms and conditions outline the rules and regulations for using NovaClash's
          website. By accessing NovaClash, you agree to these terms. If you do not agree,
          we kindly ask you to discontinue using this website.
        </p>
      </section>

      <!-- Terminology Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Terminology</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          The following terminology applies to these Terms and Conditions, Privacy Policy,
          and Disclaimer Notice:
        </p>
        <ul class="list-disc list-inside text-gray-800 mt-4 space-y-2">
          <li>"Client," "You," and "Your" refer to you, the user of this website.</li>
          <li>"The Company," "We," "Our," and "Us" refer to NovaClash.</li>
          <li>
            "Party," "Parties," or "Us" refers to both the Client and NovaClash
            collectively.
          </li>
        </ul>
      </section>

      <!-- Cookies Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Cookies</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          NovaClash uses cookies to enhance your experience. By continuing to use our
          website, you consent to the use of cookies as outlined in our
          <a href="/privacy-policy" class="text-custom-500 hover:underline"
            >Privacy Policy</a
          >.
        </p>
      </section>

      <!-- License Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">License</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          Unless otherwise stated, NovaClash and its licensors own the intellectual
          property rights for all material on this website. All rights are reserved. The
          following actions are strictly prohibited without prior permission:
        </p>
        <ul class="list-disc list-inside text-gray-800 mt-4 space-y-2">
          <li>Republishing material from NovaClash.</li>
          <li>Selling, renting, or sub-licensing material from NovaClash.</li>
          <li>Reproducing, duplicating, or copying material from NovaClash.</li>
          <li>Redistributing content from NovaClash.</li>
        </ul>
      </section>

      <!-- Hyperlinking Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Hyperlinking to Our Content</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          Certain organizations may link to our website without prior approval, such as
          government agencies, search engines, and news organizations. However, these
          links must not falsely imply sponsorship or endorsement by NovaClash.
        </p>
      </section>

      <!-- Content Liability Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Content Liability</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          NovaClash is not responsible for content appearing on your website. You agree to
          indemnify us against any claims arising from such content. Links to NovaClash
          must not promote unlawful activities or violate the rights of others.
        </p>
      </section>

      <!-- Disclaimer Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          To the fullest extent permitted by law, NovaClash excludes all warranties and
          disclaims liability for any loss or damage arising from the use of this website.
        </p>
      </section>

      <!-- Contact Section -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          If you have any questions regarding these terms, feel free to
          <a href="/contact" class="text-custom-500 hover:underline">contact us</a>.
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
/* Optional: Customize additional styles for branding */
</style>
