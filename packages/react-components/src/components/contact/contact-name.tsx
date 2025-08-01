import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type ContactNameProps = PropsWithChildren<{
  /** Additional classes to apply to the name */
  className?: string;
}>;

/** The ContactName component is used to display the name of a contact. */
export function ContactName({ children, className }: ContactNameProps) {
  const name = twMerge('font-bold text-body-copy-bold-on-light', className);
  return <span className={`uofg-contact-name ${name}`}>{children}</span>;
}

ContactName.displayName = 'ContactName';
