// 1. Import utilities from `astro:content`
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// 3. Define your collection(s)
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    // layout: z.string().optional(),
    title: z.string(),
    published: z.boolean(),
    date: z.date(),
    thumbnail: z.string().optional(),
    // body: z.string(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { posts };
