import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { faEnvelope } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { tv } from 'tailwind-variants';

export type ContactProps = {
  name: string;
  title: string;
  phone:
    | {
        number: string;
        extension: string;
      }
    | string;
  email: string;
};

export function Contact({ name, title, phone, email }: ContactProps) {
  const contact = tv({
    slots: {
      base: 'tw:bg-light-grey-bg tw:mb-2 tw:flex tw:flex-col tw:p-4 tw:text-body-copy',
      name: 'tw:font-bold tw:text-body-copy-bold',
      container: 'tw:flex tw:items-center tw:gap-1',
      link: 'tw:underline tw:decoration-current tw:hocus:decoration-transparent tw:transition-colors tw:text-body-copy-link-on-light',
    },
  });

  const { base, name: nameClasses, container, link } = contact();

  const phoneNumber = typeof phone === 'string' ? phone : phone.number;

  return (
    <div className={base()}>
      <span className={nameClasses()}>{name}</span>

      <span>{title}</span>

      <div className={container()}>
        <FontAwesomeIcon icon={faPhone} />
        <a className={link()} href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>
        {typeof phone === 'object' && <span> - Ext. {phone.extension}</span>}
      </div>

      <div className={container()}>
        <FontAwesomeIcon icon={faEnvelope} />
        <a className={link()} href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </div>
  );
}

Contact.displayName = 'Contact';
