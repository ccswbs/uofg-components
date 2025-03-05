import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type ContactNameProps = PropsWithChildren<{
  /** Additional classes to apply to the name */
  className?: string;
}>;

/** The ContactName component is used to display the name of a contact. */
export function ContactName({ children, className }: ContactNameProps) {
  const name = twMerge('tw:text-body-copy-bold tw:font-bold', className);
  return <span className={name}>{children}</span>;
}

ContactName.displayName = 'ContactName';
