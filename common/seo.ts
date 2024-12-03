
import gameConfig from "~/game.config";


const {
    brandName
} = gameConfig


export const useGameAboutSeo = () => {
    return useSeoMeta({
        title: `About Us - ${brandName}`,
        description: `Learn more about ${brandName}, our mission, and our commitment to delivering the best gaming experiences. Discover our story, our passion for gaming, and how we strive to innovate and entertain gamers around the world.`,
    });
}


export const useGameTermsSeo = () => {
    return useSeoMeta({
        title: `Terms of Service - ${brandName}`,
        description: `Familiarize yourself with ${brandName}'s Terms of Service. Understanding your rights and responsibilities ensures a better experience for all our users.`,
    });
}


export const useGamePrivacySeo = () => {
    return useSeoMeta({
        title: `Privacy Policy - ${brandName}`,
        description: `Your privacy is paramount to us. Read ${brandName}'s Privacy Policy to understand how we collect, use, and protect your information with utmost care.`,
    });
}

export const useGameTitleSeo = (title: string) => {
    return useSeoMeta({
        title: `${title} - ${brandName}`,
        description: `Step into the ${title} world at ${brandName} and explore our exciting collection of games. Whether you're a fan of the fast-paced action of arcade games, the intricate puzzles of strategy games, or the challenge of logic games, we have something to ignite your passion and test your skills. Dive into our diverse gaming landscape and experience the thrill of mastering new games.`,
    });
}







