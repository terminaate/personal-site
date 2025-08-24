// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast',
    },
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  integrations: [preact(), mdx()],
});
