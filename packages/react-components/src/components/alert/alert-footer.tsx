import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type AlertFooterProps = PropsWithChildren<{
  /** Additional classes to apply to the alert footer */
  className?: string;
}>;

/** The AlertFooter component is used to display additional information or actions at the bottom of an alert. */
export function AlertFooter({ children, className }: AlertFooterProps) {
  const alertFooter = twMerge('flex bg-grey-light px-4 py-2', className);

  return <div className={`uofg-alert-footer ${alertFooter}`}>{children}</div>;
}

AlertFooter.displayName = 'AlertFooter';
