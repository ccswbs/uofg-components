import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { AlertFooter } from './alert-footer';
import { AlertMessage } from './alert-message';
import { AlertSubtitle } from './alert-subtitle';
import { AlertTitle } from './alert-title';

export type AlertProps = PropsWithChildren<{
  /** Additional classes to apply to the alert */
  className?: string;
}>;

/** The Alert component is used to display critical feedback, such as warnings, errors, or informational messages. */
export function Alert({ children, className }: AlertProps) {
  const alert = twMerge('uog:flex uog:flex-col', className);

  return <div className={`uofg-alert ${alert}`}>{children}</div>;
}

Alert.displayName = 'Alert';

export { AlertFooter, AlertMessage, AlertSubtitle, AlertTitle };
