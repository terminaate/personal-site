import classNames from 'classnames';
import { FC } from 'react';
import cl from './BasicPage.module.scss';
import { HTMLMotionProps, motion } from 'framer-motion';

type Props = HTMLMotionProps<'div'>;

export const BasicPage: FC<Props> = ({ children, className, ...props }) => {
  return (
    <motion.div
      {...props}
      initial={{ filter: 'blur(5px)', opacity: 0.4 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      exit={{ filter: 'blur(5px)', opacity: 0 }}
      className={classNames(cl.basicPage, className)}
    >
      {children}
    </motion.div>
  );
};
