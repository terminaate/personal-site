import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
  useOutlet,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import { PropsWithChildren, useEffect, useState } from 'react';
import './index.scss';
import { Navbar } from '@/components/Navbar';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import ogImageUrl from './assets/og-image.png?format=webp&w=1280&h=600&lossless&imagetools';
import { YTMPlayer } from '@/components/YTMPlayer';
import { AnimatePresence } from 'framer-motion';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap',
  },
];

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Terminaate" />
        <meta
          name="description"
          content="Hey! I'm a young web developer from Russia who loves building and designing for the web."
        />
        <meta
          name="keywords"
          content="terminaate,terminate,react,reactjs,termi,next,nextjs,web,webdev,web dev,dev,portfolio,personal,frontend,backend"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="2 days" />
        <meta name="author" content="Terminaate" />
        <meta property="og:site_name" content="terminaate.site" />
        <meta property="og:title" content="terminaate" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Hey! I'm a young web developer from Russia who loves building and designing for the web."
        />
        <meta property="og:url" content="https://terminaate.site" />
        <meta property="og:image" content={ogImageUrl} />

        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="d35a301a-4cfd-43e7-adca-bb450237c5ca"
        ></script>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// @info: https://stackoverflow.com/questions/74190609/exit-animations-with-animatepresence-framer-motion-and-createbrowserrouter-r
const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return outlet;
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // @info: fixing touch hover event
    document.addEventListener('touchstart', function () {}, true);
  }, []);

  return (
    <SkeletonTheme
      baseColor={'var(--background-ui)'}
      highlightColor={`var(--text-secondary)`}
    >
      <Navbar />
      <AnimatePresence mode={'wait'}>
        <AnimatedOutlet key={location.pathname} />
      </AnimatePresence>
      <YTMPlayer />
    </SkeletonTheme>
  );
}
