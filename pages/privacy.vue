<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 shadow-2xl rounded-xl bg-transparent">
      <!-- Page Header -->
      <h1 class="text-5xl font-extrabold text-primary-500 text-center mb-12">
        Privacy Policy
      </h1>

      <!-- Introduction -->
      <section class="mb-10">
        <p class="text-primary-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          This Privacy Policy, together with the Terms of Service posted on our website,
          outlines the general rules and policies governing your use of
          <span class="font-semibold text-primary-500">TitanRun</span>. Depending on your
          activities while visiting TitanRun, you may be required to agree to additional
          terms of service.
        </p>
      </section>

      <!-- Website Visitors -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-primary-500 mb-6 text-center">Website Visitors</h2>
        <p class="text-primary-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Like most websites, TitanRun collects non-personally-identifying information that
          web browsers and servers typically make available. This includes details such as
          browser type, language preference, referring site, and the date and time of each
          visitor request. We use this information in aggregate to better understand usage
          trends and improve our platform.
        </p>
      </section>

      <!-- Personally-Identifying Information -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-primary-500 mb-6 text-center">
          Personally-Identifying Information
        </h2>
        <p class="text-primary-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Certain interactions with TitanRun may require us to collect personally-identifying
          information, such as when you create an account or participate in multiplayer games.
          This typically includes details like your username, email address, and gameplay
          preferences.
        </p>
      </section>

      <!-- Security -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-primary-500 mb-6 text-center">Security</h2>
        <p class="text-primary-600 text-lg leading-relaxed max-w-3xl mx-auto">
          At TitanRun, protecting your personal information is a top priority. While we use
          industry-standard methods to secure your data, no online system can guarantee
          complete security. We are committed to maintaining your trust by continuously
          improving our security measures.
        </p>
      </section>

      <!-- Advertisements -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-primary-500 mb-6 text-center">Advertisements</h2>
        <p class="text-primary-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Ads displayed on TitanRun may be served by third-party partners who use cookies to
          deliver targeted advertisements. These cookies help align ads with your interests
          based on your activities. Please review the privacy policies of these partners to
          understand their practices.
        </p>
      </section>

      <!-- Links to External Sites -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-primary-500 mb-6 text-center">Links to External Sites</h2>
        <p class="text-primary-600 text-lg leading-relaxed max-w-3xl mx-auto">
          TitanRun may include links to external websites not operated by us. If you follow
          such a link, you will be directed to their website. We strongly encourage reviewing
          the privacy policies and terms of these external sites to ensure your data remains
          secure.
        </p>
      </section>

      <!-- Aggregated Statistics -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-primary-500 mb-6 text-center">Aggregated Statistics</h2>
        <p class="text-primary-600 text-lg leading-relaxed max-w-3xl mx-auto">
          TitanRun may collect aggregated, anonymized data on user behavior, such as time spent
          on challenges or community activities. This data helps us enhance the user experience
          and improve platform features. Aggregated statistics never include personally-identifying
          information.
        </p>
      </section>

      <!-- Cookies -->
      <section>
        <h2 class="text-3xl font-bold text-primary-500 mb-6 text-center">Cookies</h2>
        <p class="text-primary-600 text-lg leading-relaxed max-w-3xl mx-auto">
          TitanRun uses cookies and similar technologies to provide a personalized gaming experience.
          These tools help us deliver relevant content, save your preferences, and improve our services.
          By continuing to use our website without adjusting your settings, you consent to our use of cookies.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useGamePrivacySeo } from "@/common/seo";
useGamePrivacySeo();
</script>

<style scoped>
/* Customize colors for the TitanRun theme */
.text-primary-500 {
  color: #4a90e2; /* Replace with TitanRun's primary color */
}
.text-primary-600 {
  color: #357abd; /* Replace with TitanRun's secondary color */
}
</style>
