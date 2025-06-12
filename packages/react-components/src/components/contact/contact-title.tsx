import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type ContactTitleProps = PropsWithChildren<{
  /** Additional classes to apply to the title */
  className?: string;
}>;

/** The ContactTitle component is used to display a title for a contact. */
export function ContactTitle({ children, className }: ContactTitleProps) {
  const title = twMerge('uog:text-body-copy-on-light', className);
  return <span className={`uofg-contact-title ${title}`}>{children}</span>;
}

ContactTitle.displayName = 'ContactTitle';
