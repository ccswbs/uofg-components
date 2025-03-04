import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { faEnvelope } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'react';

export type ContactNameProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the name
   */
  className?: string;
}>;
export function ContactName({ children, className }: ContactNameProps) {
  const name = twMerge('tw:text-body-copy-bold tw:font-bold', className);
  return <span className={name}>{children}</span>;
}

export type ContactTitleProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the title
   */
  className?: string;
}>;
export function ContactTitle({ children, className }: ContactTitleProps) {
  const title = twMerge('tw:text-body-copy', className);
  return <span className={title}>{children}</span>;
}

export type ContactPhoneProps = {
  /**
   * Additional classes to apply to the phone number
   */
  className?: string;
  /**
   * The phone number to display
   */
  number: string;
  /**
   * The phone number extension to display
   */
  extension?: string;
};
export function ContactPhone({ number, extension, className }: ContactPhoneProps) {
  const phone = tv({
    slots: {
      container: 'tw:flex tw:items-center tw:gap-1',
      link: 'tw:underline tw:decoration-current tw:hocus-visible:decoration-transparent tw:transition-colors tw:text-body-copy-link-on-light tw:focus-visible:ring-2 tw:focus-visible:ring-offset-2 tw:focus-visible:outline-none',
    },
  });

  const { container, link } = phone();

  return (
    <div className={twMerge(container(), className)}>
      <FontAwesomeIcon icon={faPhone} />
      <a className={link()} href={`tel:${number}`}>
        {number}
      </a>
      {extension && <span> - Ext. {extension}</span>}
    </div>
  );
}

export type ContactEmailProps = {
  /**
   * Additional classes to apply to the email
   */
  className?: string;
  /**
   * The email address to display
   */
  email: string;
};
export function ContactEmail({ email, className }: ContactEmailProps) {
  const contactEmail = tv({
    slots: {
      container: 'tw:flex tw:items-center tw:gap-1',
      link: 'tw:underline tw:decoration-current tw:hocus-visible:decoration-transparent tw:transition-colors tw:text-body-copy-link-on-light tw:focus-visible:ring-2 tw:focus-visible:ring-offset-2 tw:focus-visible:outline-none',
    },
  });

  const { container, link } = contactEmail();

  return (
    <div className={twMerge(container(), className)}>
      <FontAwesomeIcon icon={faEnvelope} />
      <a className={link()} href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
}

export type ContactProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the contact
   */
  className?: string;
}>;
/**
 * The Contact component is a container used to group contact information like name, title, phone number, and email address in a styled, organized layout
 */
export function Contact({ children, className }: ContactProps) {
  const contact = twMerge('tw:bg-light-grey-bg tw:mb-2 tw:flex tw:flex-col tw:p-4 tw:text-body-copy', className);

  return <div className={contact}>{children}</div>;
}
Contact.displayName = 'Contact';
