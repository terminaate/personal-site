import cl from '#/blog-slug.module.scss';
import { LoaderFunctionArgs } from '@remix-run/router';
import { nameFromPath } from '@/common/utils/nameFromPath';
import { useLoaderData } from '@remix-run/react';
import { BasicPage } from '@/components/BasicPage';
import { MetaFunction } from '@remix-run/node';
import { renderToString } from 'react-dom/server';

type PostResponse = {
  post: string;
  meta: {
    title: string;
    description: string;
    type: string;
  };
};

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Terminaate | Blog',
    },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const modules = import.meta.glob('/app/content/blog/**/*.mdx');

  let match = {} as any;

  for (const [path, resolver] of Object.entries(modules)) {
    if (nameFromPath(path) === params.slug) {
      match = { path, resolver };
      break;
    }
  }

  const post = await match?.resolver?.();

  return Response.json({
    post: renderToString(
      post.default({
        components: {
          h2({ children, id }: any) {
            return (
              <a id={id} href={`#${id}`}>
                <h2 className={'mdx-slug-link'}>{children}</h2>
              </a>
            );
          },
          a({ children, ...props }: any) {
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
    ),
    meta: {
      title: post.frontmatter.name,
      description: post.frontmatter.description,
      type: 'article',
    },
  });
};

export default function BlogSlug() {
  const data = useLoaderData<PostResponse>();

  if (!data) {
    return null;
  }

  const { meta, post } = data;
  const { title, description } = meta;

  return (
    <BasicPage className={cl.page}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <div
        className={'mdx-content'}
        dangerouslySetInnerHTML={{ __html: post }}
      />
    </BasicPage>
  );
}
