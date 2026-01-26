import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type AlertSubtitleProps = PropsWithChildren<{
  /** Additional classes to apply to the alert subtitle */
  className?: string;
}>;

/** The AlertSubtitle component is used to display a subtitle for an alert. */
export function AlertSubtitle({ children, className }: AlertSubtitleProps) {
  const alertSubtitle = twMerge('mb-4 text-xl font-bold text-black', className);

  return <div className={`uofg-alert-subtitle ${alertSubtitle}`}>{children}</div>;
}

AlertSubtitle.displayName = 'AlertSubtitle';
