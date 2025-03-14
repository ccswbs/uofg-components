import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type ContactNameProps = PropsWithChildren<{
  /** Additional classes to apply to the name */
  className?: string;
}>;

/** The ContactName component is used to display the name of a contact. */
export function ContactName({ children, className }: ContactNameProps) {
  const name = twMerge('uog:text-body-copy-bold uog:font-bold', className);
  return <span className={name}>{children}</span>;
}

ContactName.displayName = 'ContactName';
