// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import embeds from 'astro-embed/integration';
import pagefind from "astro-pagefind";

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://aarond.me',
	// outDir: './docs',
	integrations: [pagefind(), embeds(), mdx(), sitemap(), robotsTxt()],
});
