import { generateRss } from '@/common/utils/generateRss';
import { getPosts } from '@/common/utils/getPosts';
import { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const modules = import.meta.glob('/app/content/blog/**/*.mdx');
  const posts = await getPosts(modules);
  const baseUrl = new URL(request.url).origin;

  const feed = generateRss(baseUrl, posts);

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=2419200',
    },
  });
};
