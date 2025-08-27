// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast',
    },
    rehypePlugins: [rehypeAccessibleEmojis],
  },

  integrations: [preact(), mdx(), icon()],

  adapter: node({
    mode: 'standalone',
  }),
});
