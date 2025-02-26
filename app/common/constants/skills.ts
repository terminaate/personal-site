import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMobx,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSass,
  SiSqlite,
  SiTraefikproxy,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiWebstorm,
} from 'react-icons/si';
import { Skill } from '@/common/types/Skill';
import { VscVscode } from 'react-icons/vsc';

export const skills: Record<string, Skill[]> = {
  core: [
    {
      name: 'JavaScript',
      icon: SiJavascript,
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
    },
    {
      name: 'HTML5',
      icon: SiHtml5,
    },
    {
      name: 'CSS3',
      icon: SiCss3,
    },
    {
      name: 'SASS',
      icon: SiSass,
    },
  ],
  frameworks: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'Next',
      icon: SiNextdotjs,
    },
    {
      name: 'Nest',
      icon: SiNestjs,
    },
    {
      name: 'Express',
      icon: SiExpress,
    },
  ],
  bundlers: [
    {
      name: 'Webpack',
      icon: SiWebpack,
    },
    {
      name: 'Vite',
      icon: SiVite,
    },
  ],
  tools: [
    {
      name: 'Webstorm',
      icon: SiWebstorm,
    },
    {
      name: 'VSCode',
      icon: VscVscode,
    },
    {
      name: 'Figma',
      icon: SiFigma,
    },
  ],
  devops: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'Nginx',
      icon: SiNginx,
    },
    {
      name: 'Traefik',
      icon: SiTraefikproxy,
    },
    {
      name: 'Linux',
      icon: SiLinux,
    },
  ],
  databases: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'SQLite',
      icon: SiSqlite,
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
    },
  ],
  'state managers': [
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'Mobx',
      icon: SiMobx,
    },
  ],
};
