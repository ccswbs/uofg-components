import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type AlertMessageProps = PropsWithChildren<{
  /** Additional classes to apply to the alert message */
  className?: string;
}>;

/** The AlertMessage component is used to display the main content of an alert. */
export function AlertMessage({ children, className }: AlertMessageProps) {
  const alertMessage = twMerge(
    'uog:flex uog:flex-col uog:border-x uog:border-b uog:border-light-grey uog:bg-white uog:px-4 uog:py-3',
    className,
  );

  return <div className={`uofg-alert-message ${alertMessage}`}>{children}</div>;
}

AlertMessage.displayName = 'AlertMessage';
