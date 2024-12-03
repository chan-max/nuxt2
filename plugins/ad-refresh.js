// plugins/ad-refresh.js
export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        if (!window.xAdConfig) return;
        const currentChannel = getCurrentChannel();
        const adConfig = window.xAdConfig[currentChannel] || window.xAdConfig['default']

        if (!adConfig || !adConfig.interstitial) return;
        const excludedAdSlots = [adConfig.interstitial.containerId];
        window.excludedAdSlots = excludedAdSlots
        let isFirstLoad = true;
        nuxtApp.hook('page:finish', () => {
            if (!isFirstLoad) {
                refreshAds();
                console.log('Ads refreshed!');
            }
            isFirstLoad = false;
        });
        function refreshAds() {
            if (window.googletag && window.googletag.apiReady) {
                const slots = window.googletag.pubads().getSlots();
                const slotsToRefresh = slots.filter(slot => {
                    console.log(slot.getSlotElementId())
                    return !excludedAdSlots.includes(slot.getSlotElementId()) && slot.getSlotElementId().includes('div-gpt');
                });
                if (slotsToRefresh.length > 0) {
                    window.googletag.pubads().refresh(slotsToRefresh);
                }
            } else {
                console.log('GPT library not ready');
            }
        }
    }
});
