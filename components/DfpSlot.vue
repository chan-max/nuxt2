<template>
  <section class="ad-container">
    <div
      :id="adDivId"
      class="ad-slot flex items-center justify-center"
      v-show="showAd"
    ></div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";

const props = defineProps({
  adUnitPath: String,
  adType: String, // Accepts 'anchor', 'interstitial', 'static', 'native'
  adSizes: Array, // e.g., [[300, 250]], or 'fluid' for native ads
  containerId: String, // Optional: Custom container ID
});

const adDivId = ref(props.containerId || `div-gpt-ad-${Date.now()}`); // Generates a unique ID for each ad instance
const showAd = ref(false); // Used to control the visibility of the ad slot
let adSlot = null; // This will hold the reference to the ad slot

// Function to define the ad slot based on the props
const defineAdSlot = () => {
  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(() => {
    switch (props.adType) {
      case "anchor":
        adSlot = googletag.defineOutOfPageSlot(
          props.adUnitPath,
          googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
        );
        break;
      case "interstitial":
        adSlot = googletag.defineOutOfPageSlot(
          props.adUnitPath,
          googletag.enums.OutOfPageFormat.INTERSTITIAL
        );
        break;
      case "native":
        adSlot = googletag.defineSlot(
          props.adUnitPath,
          props.adSizes || "fluid",
          adDivId.value
        );
        break;
      default:
        console.error(`Unsupported ad type: ${props.adType}`);
    }
    if (adSlot) {
      if (props.adType === "anchor") {
        adSlot.setTargeting("test", "anchor");
      }
      // Set up the interstitial ad configuration
      if (props.adType === "interstitial") {
        adSlot.addService(googletag.pubads()).setConfig({
          interstitial: {
            triggers: {
              navBar: true,
              unhideWindow: true,
            },
          },
        });
      } else {
        adSlot.addService(googletag.pubads());
      }

      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    }
  });
};

// Initialize and display the ad when the component is mounted
onMounted(async () => {
  defineAdSlot();
  await nextTick(); // Wait for the DOM to be updated

  googletag.cmd.push(() => {
    googletag.display(adDivId.value); // Display the ad
    showAd.value = true; // Make the ad slot visible
  });
});

// Clean up the ad slot when the component is about to unmount
onBeforeUnmount(() => {
  if (window.googletag && adSlot) {
    googletag.cmd.push(() => {
      googletag.destroySlots([adSlot]); // Clean up the ad slot
      adSlot = null; // Reset the adSlot reference
    });
  }
});
</script>
