<template>
  <div class="min-h-screen py-12">
    <main class="container mx-auto px-6 py-10 shadow-2xl rounded-xl bg-transparent">
      <!-- Page Header -->
      <h1 class="text-5xl font-extrabold text-second-500 text-center mb-12">
        Terms of Service
      </h1>

      <!-- Welcome Section -->
      <section class="mb-10">
        <p class="text-second-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Welcome to <span class="font-semibold text-second-500">CelForge</span>! These
          terms and conditions outline the rules and regulations for using CelForge's
          website. If you do not agree to these terms, we kindly ask you to discontinue
          using this website.
        </p>
      </section>

      <!-- Terminology Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-second-500 mb-4">Terminology</h2>
        <p class="text-second-600 text-lg leading-relaxed">
          The following terminology applies to these Terms and Conditions, Privacy Policy,
          and Disclaimer Notice, as well as all Agreements:
        </p>
        <ul class="list-disc list-inside text-second-600 mt-4 space-y-2">
          <li>"Client," "You," and "Your" refer to you, the user of this website.</li>
          <li>"The Company," "We," "Our," and "Us" refer to CelForge.</li>
          <li>
            "Party," "Parties," or "Us" refers to both the Client and CelForge
            collectively.
          </li>
        </ul>
      </section>

      <!-- Cookies Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-second-500 mb-4">Cookies</h2>
        <p class="text-second-600 text-lg leading-relaxed">
          We use cookies to enhance your experience on CelForge. By using our website, you
          consent to the use of cookies in accordance with our
          <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </section>

      <!-- License Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-second-500 mb-4">License</h2>
        <p class="text-second-600 text-lg leading-relaxed">
          Unless otherwise stated, CelForge and its licensors own the intellectual
          property rights for all material on this website. All rights are reserved. The
          following actions are not permitted:
        </p>
        <ul class="list-disc list-inside text-second-600 mt-4 space-y-2">
          <li>Republishing material from CelForge without explicit permission.</li>
          <li>Selling, renting, or sub-licensing material from CelForge.</li>
          <li>Reproducing, duplicating, or copying material from CelForge.</li>
          <li>Redistributing content from CelForge without explicit permission.</li>
        </ul>
      </section>

      <!-- Hyperlinking Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-second-500 mb-4">Hyperlinking to Our Content</h2>
        <p class="text-second-600 text-lg leading-relaxed">
          Certain organizations may link to our website without prior approval, including
          government agencies, search engines, and news organizations. However, such links
          must not falsely imply sponsorship or endorsement by CelForge.
        </p>
      </section>

      <!-- Content Liability Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-second-500 mb-4">Content Liability</h2>
        <p class="text-second-600 text-lg leading-relaxed">
          CelForge is not responsible for content appearing on your website. You agree to
          protect and defend us against any claims arising from content on your website.
          Links to CelForge must not promote unlawful activities or infringe on the rights
          of others.
        </p>
      </section>

      <!-- Disclaimer Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-second-500 mb-4">Disclaimer</h2>
        <p class="text-second-600 text-lg leading-relaxed">
          To the fullest extent permitted by law, CelForge excludes all warranties and is
          not responsible for any loss or damage resulting from the use of this website.
        </p>
      </section>

      <!-- Contact Section -->
      <section>
        <h2 class="text-3xl font-bold text-second-500 mb-4">Contact</h2>
        <p class="text-second-600 text-lg leading-relaxed">
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
/* Define custom styles for second theme colors */
.text-second-500 {
  color: #4d9fef; /* Replace with primary color of your second theme */
}
.text-second-600 {
  color: #3b82d8; /* Replace with secondary color of your second theme */
}
</style>
