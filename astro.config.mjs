// @ts-check
import { defineConfig } from 'astro/config';

import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

import vercel from '@astrojs/vercel';

import decapCmsOauth from 'astro-decap-cms-oauth';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast',
    },
    rehypePlugins: [rehypeAccessibleEmojis],
  },

  integrations: [mdx(), icon(), decapCmsOauth()],

  adapter: vercel(),
});