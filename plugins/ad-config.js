export default defineNuxtPlugin(nuxtApp => {

    if (process.client) {
        if (!window.xAdConfig || useRuntimeConfig().public.appEnv === 'development') return;

        const adConfig = useState('adConfig', () => ({}));
        const currentChannel = getCurrentChannel();

        const nullAdConfig = {
            anchor: null,
            interstitial: null,
            header: null,
            footer: null,
            content: null,
            slot1: null,
            slot2: null,
            slot3: null,
        };

        window.xAdConfig.default = window.xAdConfig.default || nullAdConfig;

        if (currentChannel === '0') {
            adConfig.value = nullAdConfig;
            nuxtApp.provide('adConfig', adConfig.value);
            return;
        }
        adConfig.value = window.xAdConfig[currentChannel] || window.xAdConfig['default'];
        nuxtApp.provide('adConfig', adConfig.value);
    }
});