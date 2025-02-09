import type { MetaFunction } from '@remix-run/node';
import { BasicPage } from '@/components/BasicPage';
import cl from '#/contact.module.scss';
import { contacts } from '@/common/constants/contact';

export const meta: MetaFunction = () => {
  return [{ title: 'Terminaate | Contact' }];
};

export default function Contact() {
  return (
    <BasicPage className={cl.page}>
      <h3 className={cl.title}>
        Ways to get in touch, in order from fastest to slowest.
      </h3>
      {contacts.map(({ icon: ContactIcon, ...contact }, index) => (
        <a
          target={'_blank'}
          key={index}
          className={cl.contact}
          href={contact.link}
          rel="noreferrer"
        >
          <ContactIcon size={25} />
          <span>{contact.text}</span>
        </a>
      ))}
    </BasicPage>
  );
}
