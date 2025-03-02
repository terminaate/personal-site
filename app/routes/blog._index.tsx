import { defer, MetaFunction } from '@remix-run/node';
import { BasicPage } from '@/components/BasicPage';
import cl from '#/blog.module.scss';
import { getPosts } from '@/common/utils/getPosts';
import { Await, Link } from '@remix-run/react';
import { Post } from '@/common/types/Post';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useAnimatedLoaderData } from '@/hooks/useAnimatedLoaderData';

export const meta: MetaFunction = () => {
  return [{ title: 'Terminaate | Blog' }];
};

export const loader = async () => {
  const modules = import.meta.glob('/app/content/blog/**/*.mdx');
  const posts = getPosts(modules);

  return defer({
    posts: posts.then((response) => {
      response = response.filter((post) => post.published);

      response.sort((a, b) => +new Date(b.date) - +new Date(a.date));

      return response;
    }),
  });
};

const PostComponent = (props: Post) => {
  return (
    <Link className={cl.postContainer} to={props.slug}>
      <span className={cl.date}>{props.date}</span>
      <h1 className={cl.title}>{props.name}</h1>
      <span className={cl.description}>{props.description}</span>
    </Link>
  );
};

export default function Blog() {
  const { posts: data } = useAnimatedLoaderData<typeof loader>();

  return (
    <BasicPage className={cl.page}>
      <h3 className={cl.title}>Some of my notes and thoughts.</h3>
      <div className={cl.posts}>
        <Suspense
          fallback={
            <>
              <Skeleton className={cl.postContainer} />
              <Skeleton className={cl.postContainer} />
              <Skeleton className={cl.postContainer} />
              <Skeleton className={cl.postContainer} />
            </>
          }
        >
          <Await resolve={data}>
            {(posts) =>
              posts.map((post, key) => <PostComponent {...post} key={key} />)
            }
          </Await>
        </Suspense>
      </div>
    </BasicPage>
  );
}
