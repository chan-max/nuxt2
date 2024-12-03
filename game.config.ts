
import { defineGameConfig } from "./common/config"

export default defineGameConfig({
    tailwindColors: {
        'custom': {
            '50': '#fff9e6',  // 非常浅的黄色
            '100': '#fff3cc',  // 浅黄色
            '200': '#ffe799',  // 较浅黄色
            '300': '#ffdb66',  // 浅亮黄色
            '400': '#ffd033',  // 明亮黄色
            '500': '#ffcb31',  // 主色，黄色
            '600': '#e6b52b',  // 微暗黄色
            '700': '#b38a21',  // 暗黄色
            '800': '#805f18',  // 深黄色
            '900': '#4d360f',  // 很深的黄色
            '950': '#2f2009',  // 接近棕色
        },
        'second': {
            '50': '#fdebf2',  // 非常浅的粉红色
            '100': '#f9cde0',  // 浅粉红色
            '200': '#f39bbf',  // 较浅的粉红色
            '300': '#ec699f',  // 亮粉红色
            '400': '#e5397f',  // 明亮玫红色
            '500': '#D91965',  // 主色，玫红色
            '600': '#c1155b',  // 微暗玫红色
            '700': '#9b1048',  // 深玫红色
            '800': '#750b36',  // 更深的玫红色
            '900': '#500724',  // 接近紫色的深玫红色
            '950': '#330416',  // 极深的玫红色
        }
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