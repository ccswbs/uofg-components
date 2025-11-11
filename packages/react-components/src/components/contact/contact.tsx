import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { ContactEmail } from './contact-email';
import { ContactName } from './contact-name';
import { ContactPhone } from './contact-phone';
import { ContactTitle } from './contact-title';

export type ContactProps = PropsWithChildren<{
  id?: string;
  /** Additional classes to apply to the contact */
  className?: string;
}>;

/**
 * The Contact component is a container used to group contact information like name, title, phone number, and email
 * address in a styled, organized layout
 */
export function Contact({ id, children, className }: ContactProps) {
  const contact = twMerge('mb-2 flex flex-col bg-grey-light-bg p-4 text-body-copy-on-light', className);

  return (
    <div id={id} className={`uofg-contact ${contact}`}>
      {children}
    </div>
  );
}

Contact.displayName = 'Contact';

export { ContactEmail, ContactName, ContactPhone, ContactTitle };
