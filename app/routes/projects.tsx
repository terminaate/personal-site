import type { MetaFunction } from '@remix-run/node';
import { BasicPage } from '@/components/BasicPage';
import cl from '#/projects.module.scss';
import { projects } from '@/common/constants/projects';
import { Todo } from '@/components/Todo';

export const meta: MetaFunction = () => {
  return [{ title: 'Terminaate | Projects' }];
};

export default function Projects() {
  return (
    <BasicPage className={cl.page}>
      <Todo>// TODO: redesign this page (but rn im out of ideas)</Todo>
      {projects.map((project, index) => (
        <a
          style={{ backgroundImage: `url(${project.image})` }}
          key={index}
          className={cl.projectCard}
          target={'_blank'}
          rel={'noreferrer'}
          href={project.link ?? project.githubLink ?? ''}
        >
          <h2 className={cl.projectTitle}>{project.title}</h2>
          <span className={cl.projectDescription}>{project.description}</span>
        </a>
      ))}
    </BasicPage>
  );
}
