const isNode = typeof window === 'undefined';

export function generateProxyUrl(sourceUrl) {
    const base64Url = isNode ? Buffer.from(sourceUrl).toString('base64') : window.btoa(sourceUrl);
    return `https://cdn.adspot.workers.dev/?format=image&source=${base64Url}`;
}

export function getCurrentChannel() {
    if (process.client) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('channel') || '';
    }
    return ''
};

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}