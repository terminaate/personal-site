import { nameFromPath } from '@/common/utils/nameFromPath';
import { Post } from '@/common/types/Post';

export async function getPosts(
  modules: Record<string, () => Promise<unknown>>,
) {
  const postPromises = Object.entries(modules).map(([path, resolver]) =>
    resolver().then((post: any) => {
      return {
        slug: nameFromPath(path),
        ...post.frontmatter,
      };
    }),
  );

  let posts = await Promise.all(postPromises);

  if (!import.meta.env.DEV) {
    posts = posts.filter((post) => post.published);
  }

  return posts as Post[];
}
