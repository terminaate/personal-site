import cl from './ProjectCard.module.scss';
import { FC, HTMLAttributes } from 'react';
import { Project } from '@/common/types/Project';
import classNames from 'classnames';

type Props = HTMLAttributes<HTMLDivElement> & {
  project: Project;
};

export const ProjectCard: FC<Props> = ({ className, project, ...props }) => {
  return (
    <div
      {...props}
      style={{ backgroundImage: `url(${project.image})` }}
      className={classNames(cl.projectCard, className)}
    >
      {/*<div className={cl.projectInfoContainer}>*/}
      {/*  <span>{project.description}</span>*/}
      {/*</div>*/}
    </div>
  );
};
