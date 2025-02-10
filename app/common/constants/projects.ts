import { Project } from '@/common/types/Project';

export const projects: Project[] = [
  {
    link: 'https://refleep.vercel.app/',
    title: 'Refleep',
    description:
      'Refleep is a landing site for a website development studio, representing one of my initial experiences with Next.js',
    image: 'https://i.imgur.com/Ec9Jw23.png',
    tags: ['NextJS', 'Typescript', 'SCSS', 'hygen', 'husky'],
  },

  {
    link: 'https://discord.gg/4m8Rq8gTgp',
    title: 'Aura RP',
    description:
      'Aura RP is a big RP server owned by 89squad, I worked on this project for 1.6 years, the project has a huge code base. The team consisted of 10 people. The server platform is RageMP',
    tags: [
      'RageMP',
      'TypeScript',
      'NodeJS',
      'React',
      'StyledComponents',
      'Mobx',
      'Vite',
    ],
    image: 'https://i.imgur.com/R3fg4f1.jpeg',
  },

  {
    link: 'https://discord.gg/cybermp',
    title: 'CyberMP',
    description:
      'CyberMP is a major modification of Cyberpunk 2077 that adds a multiplayer platform to the game. I created the launcher, website, and server manager website for this project.',
    tags: [
      'TypeScript',
      'Rust',
      'Tauri',
      'NodeJS',
      'NestJS',
      'React',
      'Tailwind',
      'Redux toolkit',
      'Vite',
    ],
    image: 'https://i.imgur.com/htJdzpv.png',
  },

  {
    githubLink: 'https://github.com/terminaate/canvas-particles',
    link: 'https://terminaate.github.io/canvas-particles',
    title: 'Canvas particles',
    description:
      'The canvas particles are just for testing my canvas skills and just for fun. You can deeply tune the particles in real time. Written in vanilla Typescript.',
    image: 'https://i.imgur.com/eV4hcph.png',
    tags: ['Typescript', 'Canvas', 'HTML', 'CSS'],
  },
];
