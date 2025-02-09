import { Contact } from '@/common/types/Contact';
import { SiDiscord, SiGithub, SiGmail } from 'react-icons/si';

export const contacts: Contact[] = [
  {
    text: 'terminaate',
    icon: SiDiscord,
  },
  {
    text: 'terminaatecorp@gmail.com',
    icon: SiGmail,
    link: 'mailto:terminaatecorp@gmail.com',
  },
  {
    text: '@Terminaate',
    icon: SiGithub,
    link: 'https://github.com/terminaate',
  },
];
