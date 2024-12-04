<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 bg-white shadow-2xl rounded-xl">
      <!-- Page Header -->
      <h1 class="text-5xl font-extrabold text-gray-900 text-center mb-12">
        Privacy Policy
      </h1>

      <!-- Introduction -->
      <section class="mb-10">
        <p class="text-gray-800 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Welcome to the
          <span class="font-semibold text-indigo-600">WarpNix</span> Privacy Policy. This
          document, along with our Terms of Service, outlines the rules and policies
          governing your use of WarpNix. Depending on your activities on WarpNix,
          additional terms may apply.
        </p>
      </section>

      <!-- Website Visitors -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">Website Visitors</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          WarpNix collects non-personally-identifying information typically made available
          by web browsers and servers, such as browser type, language preference, and
          referral site details. We analyze this aggregated data to improve our platform
          and deliver a better user experience.
        </p>
      </section>

      <!-- Personally-Identifying Information -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">
          Personally-Identifying Information
        </h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          Certain WarpNix features may require you to share personally-identifying
          information, such as your username, email address, and gameplay preferences.
          This information helps us personalize your experience and ensure seamless
          interactions across the platform.
        </p>
      </section>

      <!-- Security -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">Security</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          Protecting your data is our priority. WarpNix employs industry-standard security
          measures to safeguard your personal information. While we strive for robust
          protection, no system is entirely secure. We encourage vigilance when sharing
          sensitive data online.
        </p>
      </section>

      <!-- Advertisements -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">Advertisements</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          Ads on WarpNix may be provided by advertising partners who may use cookies to
          collect data. This information enables targeted advertisements tailored to your
          interests. We recommend reviewing the privacy policies of these partners for
          more information.
        </p>
      </section>

      <!-- Links to External Sites -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">Links to External Sites</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          WarpNix may contain links to third-party websites. While we strive to link only
          to trustworthy sites, we are not responsible for their content or practices. We
          encourage you to review their privacy policies before sharing personal
          information.
        </p>
      </section>

      <!-- Aggregated Statistics -->
      <section class="mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">Aggregated Statistics</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          WarpNix may compile anonymized, aggregated data on user behavior, such as the
          most visited pages or average time spent on the platform. This information helps
          us optimize features and improve overall usability without including
          personally-identifiable details.
        </p>
      </section>

      <!-- Cookies -->
      <section>
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">Cookies</h2>
        <p class="text-gray-800 text-lg leading-relaxed">
          WarpNix uses cookies and similar technologies to personalize your experience.
          These tools enable us to display relevant content, tailor advertisements, and
          save your preferences. By continuing to use the site, you agree to our use of
          cookies as outlined in this policy.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
// Import SEO configuration for "Privacy Policy" page
import { useGamePrivacySeo } from "@/common/seo";
useGamePrivacySeo();
</script>

<style scoped>
/* WarpNix branding colors and gradients */
.text-indigo-600 {
  color: #5a67d8; /* WarpNix primary accent color */
}
.bg-gradient-to-b {
  background: linear-gradient(to bottom, #f7fafc, #edf2f7, #e2e8f0); /* Subtle gradient */
}
</style>
