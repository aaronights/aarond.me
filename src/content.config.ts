import {statSync, readFileSync} from 'fs';
// import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { globWithParser } from './utils/globWithParser';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	// loader: glob({
		// base: './src/content/blog',
		// pattern: '**/*.{md,mdx}'
	// }),
	loader: globWithParser({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/blog",
		parser: async (entry) => {
			const { id, data, filePath } = entry;
			if (!data.date) data.date = new Date(statSync(id).birthtime);
			// (data as { year?: string }).year = data.date.toISOString().slice(0, 4);
			data.year = data.date.toISOString().slice(0, 4);
			data.month = data.date.toISOString().slice(5, 7);
			data.day = data.date.toISOString().slice(8, 10);
			if (!data.image) {
				const content = readFileSync(filePath, 'utf-8');
				// Find first image in markdown content
				const match = content.match(/!\[.*?\]\((.*?)\)/);
				data.image = match ? match[1] : '../../assets/images/aaron-landscape.jpg';
			}
			// if (!data.imagePath) data.imagePath = data.image;
			if (!data.slug) data.slug = id; // .replace(/\.md$/, '');
			return entry;
		}
	}),
	schema: ({image}) => z.object({
		title: z.string(),
		author: z.string().optional(),
		description: z.string().optional(),
		date: z.coerce.date(),
		year: z.string(),
		month: z.string(),
		day: z.string(),
		slug: z.string(),
		updated: z.coerce.date().optional(),
		image: image().optional(),
		// imagePath: z.string().optional(),
	}),
});

export const collections = { blog };
