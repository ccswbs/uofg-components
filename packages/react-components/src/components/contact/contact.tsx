import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'react';
import { ContactName } from './contact-name';
import { ContactTitle } from './contact-title';
import { ContactPhone } from './contact-phone';
import { ContactEmail } from './contact-email';

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

export { ContactName, ContactTitle, ContactPhone, ContactEmail };
