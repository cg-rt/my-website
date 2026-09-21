// A public form ID, not an API key. Override for a separate staging form if needed.
export const formEndpoint = import.meta.env.PUBLIC_FORMSPREE_ENDPOINT?.trim() ?? 'https://formspree.io/f/xppwqlza';
