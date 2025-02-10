import type { MetaFunction } from '@remix-run/node';
import { BasicPage } from '@/components/BasicPage';
import cl from '#/projects.module.scss';
import { projects } from '@/common/constants/projects';

export const meta: MetaFunction = () => {
  return [{ title: 'Terminaate | Projects' }];
};

// const ProjectCard = () => {};

export default function Projects() {
  return (
    <BasicPage className={cl.page}>
      {projects.map((project, index) => (
        <div key={index} className={cl.projectCard}>
          <img
            className={cl.projectImage}
            src={project.image}
            alt={project.title}
          />
          <div className={cl.projectInfoContainer}>
            <h2>{project.title}</h2>
            <span>{project.description}</span>
          </div>
        </div>
      ))}
    </BasicPage>
  );
}
