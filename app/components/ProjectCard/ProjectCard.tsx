import cl from './ProjectCard.module.scss';
import { FC, HTMLAttributes } from 'react';
import { Project } from '@/common/types/Project';
import classNames from 'classnames';

type Props = HTMLAttributes<HTMLDivElement> & {
  project: Project;
};

export const ProjectCard: FC<Props> = ({ className, project, ...props }) => {
  return (
    <div {...props} className={classNames(cl.projectCard, className)}>
      <img className={cl.projectImage} src={project.image} alt="" />
      <div className={cl.projectInfoContainer}></div>
    </div>
  );
};
