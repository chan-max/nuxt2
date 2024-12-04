<template>
  <div class="bg-white" style="background: linear-gradient(to bottom, #87cefa, #4682b4)">
    <NuxtLoadingIndicator :color="loadingColor" />
    <!-- <BackToTop /> -->
    <Header />
    <!-- native header -->
    <ClientOnly>
      <DfpSlot
        class="px-3"
        v-if="$adConfig && $adConfig.header"
        :ad-type="$adConfig.header.type"
        :ad-unit-path="$adConfig.header.adUnitPath"
        :ad-sizes="$adConfig.header.sizes"
        :container-id="$adConfig.header.containerId"
      />
    </ClientOnly>
    <main class="container mx-auto">
      <NuxtPage />
    </main>
    <!-- native footer -->
    <ClientOnly>
      <DfpSlot
        class="px-3"
        v-if="$adConfig && $adConfig.footer"
        :ad-type="$adConfig.footer.type"
        :ad-unit-path="$adConfig.footer.adUnitPath"
        :ad-sizes="$adConfig.footer.sizes"
        :container-id="$adConfig.footer.containerId"
      />
    </ClientOnly>
    <Footer />
    <!-- anchor -->
    <ClientOnly>
      <DfpSlot
        v-if="$adConfig && $adConfig.anchor"
        :ad-type="$adConfig.anchor.type"
        :ad-unit-path="$adConfig.anchor.adUnitPath"
        :ad-sizes="$adConfig.anchor.sizes"
        :container-id="$adConfig.anchor.containerId"
      />
    </ClientOnly>
    <!-- interstitial -->
    <ClientOnly>
      <DfpSlot
        v-if="$adConfig && $adConfig.interstitial"
        :ad-type="$adConfig.interstitial.type"
        :ad-unit-path="$adConfig.interstitial.adUnitPath"
        :ad-sizes="$adConfig.interstitial.sizes"
        :container-id="$adConfig.interstitial.containerId"
      />
    </ClientOnly>
  </div>
  <GameModal></GameModal>
  <GlobalLoading></GlobalLoading>
</template>

<script setup>
const $adConfig = ref(null);
if (process.client) {
  $adConfig.value = useNuxtApp().$adConfig;
}

const { ui } = useAppConfig();
const loadingColor = computed(() => {
  return ui.primary ? ui.primary : "";
});
</script>
