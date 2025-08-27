// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';
import decapCmsOauth from 'astro-decap-cms-oauth';
import expressiveCode from 'astro-expressive-code';
import sitemap from '@astrojs/sitemap';

const IS_DEV = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  site: 'https://terminaate.site',

  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast',
    },
  },

  integrations: [
    icon(),
    ...(IS_DEV
      ? []
      : [
          decapCmsOauth({
            decapCMSSrcUrl:
              'https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js',
          }),
        ]),
    expressiveCode(),
    sitemap(),
    mdx(),
  ],

  adapter: vercel(),
});
