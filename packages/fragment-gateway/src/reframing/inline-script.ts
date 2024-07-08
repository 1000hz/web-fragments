import { reframed } from 'reframed';

document.addEventListener("DOMContentLoaded", async () => {
    const host = document.querySelector('piercing-fragment-host')
    const hostShadowRoot = host?.shadowRoot;

    if(hostShadowRoot) {
        reframed(hostShadowRoot, { container: host as HTMLElement, containerTagName: 'article' });
    }
}, { once: true });