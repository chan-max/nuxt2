<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 shadow-2xl rounded-xl bg-transparent">
      <!-- Page Header -->
      <h1 class="text-5xl font-extrabold text-second-500 text-center mb-12">
        Privacy Policy
      </h1>

      <!-- Introduction -->
      <section class="mb-10">
        <p class="text-second-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          This Privacy Policy, together with the Terms of Service posted on our website,
          outlines the general rules and policies governing your use of
          <span class="font-semibold text-second-500">CelForge</span>. Depending on your
          activities while visiting CelForge, you may be required to agree to additional
          terms of service.
        </p>
      </section>

      <!-- Website Visitors -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-second-500 mb-6 text-center">Website Visitors</h2>
        <p class="text-second-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Like most websites, CelForge collects non-personally-identifying information that
          web browsers and servers typically make available. This includes details like
          browser type, language preference, referring site, and the date and time of each
          visitor request. From time to time, we may use this information in aggregate to
          better understand website usage trends and improve our services.
        </p>
      </section>

      <!-- Personally-Identifying Information -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-second-500 mb-6 text-center">
          Personally-Identifying Information
        </h2>
        <p class="text-second-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Certain interactions with CelForge may require the collection of
          personally-identifying information, such as when you create an account or join a
          collaborative game. The type and amount of information collected depend on the
          nature of the interaction, typically including a username, email address, and
          gameplay preferences.
        </p>
      </section>

      <!-- Security -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-second-500 mb-6 text-center">Security</h2>
        <p class="text-second-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Protecting your personal information is a top priority at CelForge. While we
          employ industry-standard methods to safeguard your data, no online transmission
          or storage system is 100% secure. We strive to protect your information but
          cannot guarantee complete security.
        </p>
      </section>

      <!-- Advertisements -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-second-500 mb-6 text-center">Advertisements</h2>
        <p class="text-second-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Ads appearing on CelForge may be served by our advertising partners, who may use
          cookies to collect information. These cookies help deliver targeted
          advertisements that align with your gaming interests and preferences. Please
          review the privacy policies of these advertising partners to understand their
          practices.
        </p>
      </section>

      <!-- Links to External Sites -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-second-500 mb-6 text-center">Links to External Sites</h2>
        <p class="text-second-600 text-lg leading-relaxed max-w-3xl mx-auto">
          CelForge may include links to external websites that are not operated by us. If
          you follow a third-party link, you will be redirected to their website. We strongly
          recommend reviewing the privacy policies and terms of service of any external site
          you visit to ensure your data remains protected.
        </p>
      </section>

      <!-- Aggregated Statistics -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-second-500 mb-6 text-center">Aggregated Statistics</h2>
        <p class="text-second-600 text-lg leading-relaxed max-w-3xl mx-auto">
          CelForge may collect aggregated, anonymized data about user behavior, such as
          time spent in specific creative challenges or community activities. This data is
          used to improve the overall player experience and optimize gameplay features.
          Aggregated data never includes personally-identifying information.
        </p>
      </section>

      <!-- Cookies -->
      <section>
        <h2 class="text-3xl font-bold text-second-500 mb-6 text-center">Cookies</h2>
        <p class="text-second-600 text-lg leading-relaxed max-w-3xl mx-auto">
          To personalize your gaming experience, CelForge uses cookies and similar
          technologies. These tools help deliver tailored content, provide customized game
          recommendations, and save your preferences. By continuing to use our website
          without adjusting your cookie settings, you agree to our use of cookies.
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
/* Customize colors for the second theme */
.text-second-500 {
  color: #4d9fef; /* Replace with your second theme primary color */
}
.text-second-600 {
  color: #3b82d8; /* Replace with your second theme secondary color */
}
</style>
