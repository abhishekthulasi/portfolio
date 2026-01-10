import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build', // Output directory for pages (index.html will go here)
			assets: 'build', // Output directory for assets
			fallback: '404.html', // Prevents overwriting the actual index.html
			precompress: false, // Set to true if you want gzip/brotli precompression
			strict: true
		}),
		// Ensure that SvelteKit knows your application should be fully static
		prerender: {
			entries: ['*', '/'] // '*' prerenders all found routes, '/' ensures index.html is there
		}
	}
};

export default config;
