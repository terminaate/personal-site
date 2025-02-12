import cl from '#/blog-slug.module.scss';
import { LoaderFunctionArgs } from '@remix-run/router';
import { nameFromPath } from '@/common/utils/nameFromPath';
import { Await, useLoaderData } from '@remix-run/react';
import { BasicPage } from '@/components/BasicPage';
import { defer, MetaFunction } from '@remix-run/node';
import { renderToString } from 'react-dom/server';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import { MDXModule } from 'mdx/types';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Terminaate | Blog',
    },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const modules = import.meta.glob('/app/content/blog/**/*.mdx');

  let match = null;

  for (const [path, resolver] of Object.entries(modules)) {
    if (nameFromPath(path) === params.slug) {
      match = { path, resolver };
      break;
    }
  }

  if (!match) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  const postPromise = match?.resolver?.() as Promise<MDXModule>;

  const renderedPost = postPromise.then((post) => {
    return renderToString(
      post.default({
        components: {
          h2({ children, id }) {
            return (
              <a id={id} href={`#${id}`}>
                <h2 className={'mdx-slug-link'}>{children}</h2>
              </a>
            );
          },
          a({ children, ...props }) {
            return (
              <a
                className={'mdx-link'}
                rel={'noreferrer'}
                target={'_blank'}
                {...props}
              >
                {children}
              </a>
            );
          },
        },
      }),
    );
  });

  return defer({
    post: renderedPost,
    meta: {
      title: postPromise.then((post: any) => post?.frontmatter?.name),
      description: postPromise.then(
        (post: any) => post?.frontmatter?.description,
      ),
    },
  });
};

const SkeletonPost = () => {
  return (
    <div className={'mdx-content'}>
      <h2>
        <Skeleton />
      </h2>
      <h3>
        <Skeleton />
      </h3>
      <p>
        <Skeleton />
      </p>
      <p>
        <Skeleton />
        <Skeleton />
      </p>
      <h2>
        <Skeleton />
      </h2>
      <p>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </p>
      <p>
        <Skeleton />
      </p>
      <p>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </p>
      <p>
        <Skeleton />
        <Skeleton />
      </p>
    </div>
  );
};

export default function BlogSlug() {
  const data = useLoaderData<typeof loader>();

  return (
    <BasicPage className={cl.page}>
      <Suspense
        fallback={
          <h2>
            <Skeleton />
          </h2>
        }
      >
        <Await resolve={data.meta.title}>{(title) => <h2>{title}</h2>}</Await>
      </Suspense>

      <Suspense
        fallback={
          <span>
            <Skeleton />
          </span>
        }
      >
        <Await resolve={data.meta.description}>
          {(description) => <span>{description}</span>}
        </Await>
      </Suspense>

      <Suspense fallback={<SkeletonPost />}>
        <Await resolve={data.post}>
          {(post) => (
            <div
              className={'mdx-content'}
              dangerouslySetInnerHTML={{ __html: post }}
            />
          )}
        </Await>
      </Suspense>
    </BasicPage>
  );
}
