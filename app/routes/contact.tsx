import type { MetaFunction } from '@remix-run/node';
import { BasicPage } from '@/components/BasicPage';
import cl from '#/contact.module.scss';

export const meta: MetaFunction = () => {
  return [{ title: 'Terminaate | Contact' }];
};

export default function Contact() {
  return <BasicPage className={cl.page}>contact page</BasicPage>;
}
