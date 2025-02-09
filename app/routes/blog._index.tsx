import type { MetaFunction } from '@remix-run/node';
import { BasicPage } from '@/components/BasicPage';
import cl from '#/blog.module.scss';
import { getPosts } from '@/common/utils/getPosts';
import { Link, useLoaderData } from '@remix-run/react';
import { Post } from '@/common/types/Post';

export const meta: MetaFunction = () => {
  return [{ title: 'Terminaate | Blog' }];
};

export const loader = async () => {
  const modules = import.meta.glob('/app/content/blog/**/*.mdx');
  const posts = (await getPosts(modules)).filter((post) => post.published);

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return Response.json(posts);
};

const PostComponent = (props: Post) => {
  return (
    <Link to={props.slug}>
      <div className={cl.postContainer}>
        <span className={cl.date}>{props.date}</span>
        <h1 className={cl.title}>{props.name}</h1>
        <span className={cl.description}>{props.description}</span>
      </div>
    </Link>
  );
};

export default function Blog_index() {
  const data = useLoaderData<Post[]>();

  if (!data) {
    return null;
  }

  return (
    <BasicPage className={cl.page}>
      <h3 className={cl.title}>
        Here you can find some of my thoughts about anything
      </h3>
      <div className={cl.posts}>
        {data.map((post, key) => (
          <PostComponent {...post} key={key} />
        ))}
      </div>
    </BasicPage>
  );
}
