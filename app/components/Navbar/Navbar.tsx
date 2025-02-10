import cl from './Navbar.module.scss';
import { Link, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';

const pages: Record<string, string> = {
  '/': 'Home',
  '/blog': 'Blog',
  '/projects': 'Projects',
  '/contact': 'Contact',
};

export const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav className={cl.navBarContainer}>
      <Link to={'/'} className={cl.title}>
        Termina<span>a</span>te
      </Link>
      <div className={cl.navBar}>
        {Object.entries(pages).map(([href, name], index) => (
          <>
            <Link to={href} key={index}>
              {location.pathname === href
                ? `[${name.slice(0, 1)}]${name.slice(1)}`
                : name}
            </Link>
          </>
        ))}
      </div>
    </motion.nav>
  );
};
