import {statSync, readFileSync} from 'fs';
import { glob } from 'astro/loaders';
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
			// (data as { year?: string }).year = String(data.date.getFullYear()).padStart(4, '0');
			if (!data.date) {
				data.date = new Date(statSync(id).birthtime);
			}
			data.year = data.date.toISOString().slice(0, 4);
			data.month = data.date.toISOString().slice(5, 7);
			data.day = data.date.toISOString().slice(8, 10);
			if (!data.image) {
				const content = readFileSync(filePath, 'utf-8');
				// Find first image in markdown content
				const match = content.match(/!\[.*?\]\((.*?)\)/);
				data.image = match ? match[1] : '../../../public/blog-placeholder-2.jpg';
			}
			if (!data.slug) data.slug = id; // .replace(/\.md$/, '');
			return entry;
		}
	}),
	// Type-check frontmatter using a schema
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
	}),
});

export const collections = { blog };
