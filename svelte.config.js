import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter()
	},
	vite: {
		resolve: {
			alias: {
				$lib: resolve('./src/lib')
			}
		}
	}
};

export default config;
