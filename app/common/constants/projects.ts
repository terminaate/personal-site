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
    githubLink: 'https://github.com/terminaate/lonely-chat',
    link: 'https://terminaate.github.io/lonely-chat',
    title: 'Lonely chat',
    description:
      "Lonely Chat is a test project by Frontend Production. It's a local chat where you enter a nickname, stored in the tab, and chat between browser tabs with yourself. Messages update in real time and are stored locally",
    image: 'https://i.imgur.com/DCfvpSd.png',
    tags: [
      'React',
      'Typescript',
      'Redux toolkit',
      'Bootstrap',
      'Local storage',
      'Session storage',
    ],
  },

  {
    githubLink: 'https://github.com/terminaate/old-site',
    link: 'https://terminaate.github.io/old-site',
    title: 'Old personal site',
    description:
      "This is my old personal site, highlighting its main feature: a drag-and-drop system for modal windows. It's built with vanilla React, without using any additional libraries for functionality",
    image: 'https://i.imgur.com/u8lC2HY.png',
    tags: ['React', 'Typescript', 'CSS'],
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

  {
    githubLink: 'https://github.com/terminaate/contacts-app',
    title: 'Contacts app',
    description:
      'The "Contacts" app is a test project with a mock server. It\'s a basic CRUD application featuring user authentication. You can log in, create, read, update, and delete contacts, and even add photos.',
    image: 'https://i.imgur.com/NNkIPDR.png',
    tags: [
      'React',
      'Typescript',
      'Redux toolkit',
      'MUI',
      'Axios',
      'Json server',
    ],
  },

  {
    githubLink: 'https://github.com/terminaate/mesto',
    title: 'Mesto',
    description:
      'Mesto is my personal social network, currently under full development and not functional yet. I need to rewrite most of the code to make it more extensible. I have many ideas to implement in the future.',
    image: 'https://i.imgur.com/xVa8oD0.png',
    tags: [
      'React',
      'Typescript',
      'Framer motion',
      'Redux toolkit',
      'Axios',
      'Nest',
      'Mongodb',
      'Passportjs',
      'JWT',
    ],
  },
];
