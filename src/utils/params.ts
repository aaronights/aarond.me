import type { CollectionEntry } from 'astro:content';

export async function getBlogParams(post: CollectionEntry<'blog'>) {
	const year = String(post.data.date.getFullYear()).padStart(4, '0');
	const month = String(post.data.date.getMonth() + 1).padStart(2, '0');
	const day = String(post.data.date.getDate()).padStart(2, '0');
	let image;
	if (post.rendered?.metadata?.imagePaths?.length) {
		image = post.rendered.metadata.imagePaths[0];
	}
	return {
		year,
		month,
		day,
		image,
	};
}
