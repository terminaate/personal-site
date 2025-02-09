import type { MetaFunction } from '@remix-run/node';
import { BasicPage } from '@/components/BasicPage';
import cl from '#/projects.module.scss';
import { projects } from '@/common/constants/projects';
import { ProjectCard } from '@/components/ProjectCard';

export const meta: MetaFunction = () => {
  return [{ title: 'Terminaate | Projects' }];
};

export default function Projects() {
  return (
    <BasicPage className={cl.page}>
      {projects.map((project, index) => (
        <ProjectCard className={cl.projectCard} key={index} project={project} />
      ))}
    </BasicPage>
  );
}
