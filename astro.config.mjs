// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import embeds from 'astro-embed/integration';
import pagefind from "astro-pagefind";
import robotsTxt from 'astro-robots-txt';
// import oembed from 'remark-oembed';
import remarkYoutube from 'remark-youtube';
import playformCompress from '@playform/compress';
// import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
		site: 'https://aarond.me',
		// outDir: './docs',
		integrations: [
			embeds(),
			pagefind(),
			mdx(),
			sitemap(),
			robotsTxt(),
			playformCompress({
				// CSS: false,
				// HTML: false,
				Image: false,
				// JavaScript: false,
				// SVG: false,
			}),
			// compressor(),
		],
		markdown: {
				// remarkPlugins: [[oembed, { width: 800, height: 450 }]],
				remarkPlugins: [remarkYoutube],
		},
		image: {
				experimentalLayout: 'responsive',
		},
		experimental: {
				responsiveImages: true,
		},
});
