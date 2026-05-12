import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: new URL('./content/projects', import.meta.url) }),
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		description: z.string(),
		publishDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		demoUrl: z.string().url().optional(),
		screenshots: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string(),
				})
			)
			.default([]),
		references: z.array(z.string()).default([]),
	}),
});

export const collections = { projects };