import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { ContactEmail } from './contact-email';
import { ContactName } from './contact-name';
import { ContactPhone } from './contact-phone';
import { ContactTitle } from './contact-title';

export type ContactProps = PropsWithChildren<{
  /** Additional classes to apply to the contact */
  className?: string;
}>;

/**
 * The Contact component is a container used to group contact information like name, title, phone number, and email
 * address in a styled, organized layout
 */
export function Contact({ children, className }: ContactProps) {
  const contact = twMerge('uog:bg-light-grey-bg uog:mb-2 uog:flex uog:flex-col uog:p-4 uog:text-body-copy', className);

  return <div className={contact}>{children}</div>;
}

Contact.displayName = 'Contact';

export { ContactEmail, ContactName, ContactPhone, ContactTitle };
