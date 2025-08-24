// 1. Import utilities from `astro:content`
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// 3. Define your collection(s)
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.boolean(),
    date: z.date(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { posts, projects };
