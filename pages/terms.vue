<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 shadow-2xl rounded-xl bg-transparent">
      <!-- Page Header -->
      <h1 class="text-5xl font-extrabold text-primary-500 text-center mb-12">
        Terms of Service
      </h1>

      <!-- Welcome Section -->
      <section class="mb-10">
        <p class="text-primary-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Welcome to <span class="font-semibold text-primary-500">TitanRun</span>! These
          terms and conditions outline the rules and regulations for using TitanRun's
          website. By accessing TitanRun, you agree to comply with these terms. If you do
          not agree, please discontinue using our services.
        </p>
      </section>

      <!-- Terminology Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-primary-500 mb-4">Terminology</h2>
        <p class="text-primary-600 text-lg leading-relaxed">
          The following terminology applies to these Terms and Conditions, Privacy Policy,
          and Disclaimer Notice, as well as all Agreements:
        </p>
        <ul class="list-disc list-inside text-primary-600 mt-4 space-y-2">
          <li>"Client," "You," and "Your" refer to the user of this website.</li>
          <li>"The Company," "We," "Our," and "Us" refer to TitanRun.</li>
          <li>
            "Party," "Parties," or "Us" refers to both the Client and TitanRun
            collectively.
          </li>
        </ul>
      </section>

      <!-- Cookies Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-primary-500 mb-4">Cookies</h2>
        <p class="text-primary-600 text-lg leading-relaxed">
          TitanRun uses cookies to enhance your experience. By continuing to use our
          website, you consent to our use of cookies as outlined in our
          <a href="/privacy-policy" class="text-blue-600 hover:underline"
            >Privacy Policy</a
          >.
        </p>
      </section>

      <!-- License Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-primary-500 mb-4">License</h2>
        <p class="text-primary-600 text-lg leading-relaxed">
          Unless otherwise stated, TitanRun and its licensors own the intellectual
          property rights for all material on this website. All rights are reserved. The
          following actions are prohibited without prior permission:
        </p>
        <ul class="list-disc list-inside text-primary-600 mt-4 space-y-2">
          <li>Republishing material from TitanRun.</li>
          <li>Selling, renting, or sub-licensing material from TitanRun.</li>
          <li>Reproducing, duplicating, or copying material from TitanRun.</li>
          <li>Redistributing content without explicit permission.</li>
        </ul>
      </section>

      <!-- Hyperlinking Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-primary-500 mb-4">
          Hyperlinking to Our Content
        </h2>
        <p class="text-primary-600 text-lg leading-relaxed">
          Approved organizations may link to our website without prior approval, such as
          government agencies, search engines, and news organizations. Links must not
          falsely imply sponsorship or endorsement by TitanRun.
        </p>
      </section>

      <!-- Content Liability Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-primary-500 mb-4">Content Liability</h2>
        <p class="text-primary-600 text-lg leading-relaxed">
          TitanRun is not responsible for any content appearing on third-party websites
          linked to or from our platform. You agree to indemnify us against any claims
          arising from content shared on your website. Links to TitanRun must not promote
          unlawful activities or violate the rights of others.
        </p>
      </section>

      <!-- Disclaimer Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-primary-500 mb-4">Disclaimer</h2>
        <p class="text-primary-600 text-lg leading-relaxed">
          To the fullest extent permitted by law, TitanRun excludes all representations,
          warranties, and conditions related to this website. We will not be liable for
          any loss or damage arising from your use of our website.
        </p>
      </section>

      <!-- Contact Section -->
      <section>
        <h2 class="text-3xl font-bold text-primary-500 mb-4">Contact</h2>
        <p class="text-primary-600 text-lg leading-relaxed">
          If you have any questions about these terms, please feel free to
          <a href="/contact" class="text-blue-600 hover:underline">contact us</a>.
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
/* Define custom styles for TitanRun */
.text-primary-500 {
  color: #4a90e2; /* Replace with TitanRun's primary color */
}
.text-primary-600 {
  color: #357abd; /* Replace with TitanRun's secondary color */
}
</style>
