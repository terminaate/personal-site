import { Post } from '@/common/types/Post';

const RSS_TITLE = 'Terminaate';
const RSS_DESCRIPTION =
  "Hey! I'm a young web developer from Russia who loves building and designing for the web.";

export const generateRss = (baseUrl: string, posts: Post[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${RSS_TITLE}</title>
    <description>${RSS_DESCRIPTION}</description>
    <link>${baseUrl}/blog</link>
    <language>en-us</language>
    <ttl>60</ttl>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${posts
      .map(
        (post) => `
      <item>
        <title><![CDATA[${post.name}]]></title>
        <description><![CDATA[${post.description}]]></description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <link>${baseUrl}/${post.slug}</link>
      </item>`,
      )
      .join('')}
  </channel>
</rss>`;
};
