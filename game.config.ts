
import { defineGameConfig } from "./common/config"

export default defineGameConfig({
    tailwindColors: {
        'custom': {
            '50': '#f1fdf9',
            '100': '#dff8f0',
            '200': '#b8eede',
            '300': '#8fe4cb',
            '400': '#5cdab9',
            '500': '#30c8a5',  // 主色，青绿色
            '600': '#25a386',
            '700': '#1c7e68',
            '800': '#14594a',
            '900': '#0c352d',
            '950': '#062018',
        },
    },

    apiKey: 'f298164b-2e79-4823-ac51-53ffb604813d',
    apiURL: 'https://api.ohioon.com',
    favicon: '/favicon.svg',


    gtmID: 'GTM-WPZQPNBH',

    brandName: "Wynorix",
    tagline: "Redefining gaming with strategy and innovation",
    metaDescription: `Discover Wynorix, a visionary gaming platform where strategy meets creativity. Dive into thrilling adventures, master tactical gameplay, and join a vibrant global community of gamers.`,
    metaKeywords: `Wynorix, gaming platform, online games, strategy games, adventure games, multiplayer games, innovative gaming, immersive worlds, creative gameplay, game community, play online`,

})