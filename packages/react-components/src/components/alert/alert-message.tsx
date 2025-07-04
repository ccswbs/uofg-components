import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type AlertMessageProps = PropsWithChildren<{
  /** Additional classes to apply to the alert message */
  className?: string;
}>;

/** The AlertMessage component is used to display the main content of an alert. */
export function AlertMessage({ children, className }: AlertMessageProps) {
  const alertMessage = twMerge('flex flex-col border-x border-b border-grey-light bg-white px-4 py-3', className);

  return <div className={`uofg-alert-message ${alertMessage}`}>{children}</div>;
}

AlertMessage.displayName = 'AlertMessage';
