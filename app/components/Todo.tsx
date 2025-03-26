import { FC, HTMLAttributes } from 'react';

export const Todo: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  ...props
}) => {
  return (
    <code {...props} style={{ color: 'yellow', width: '100%' }}>
      {children}
    </code>
  );
};
