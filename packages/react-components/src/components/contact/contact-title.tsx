import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type ContactTitleProps = PropsWithChildren<{
  /** Additional classes to apply to the title */
  className?: string;
}>;

/** The ContactTitle component is used to display a title for a contact. */
export function ContactTitle({ children, className }: ContactTitleProps) {
  const title = twMerge('uog:text-body-copy', className);
  return <span className={title}>{children}</span>;
}

ContactTitle.displayName = 'ContactTitle';
