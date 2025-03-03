import type { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

export type AlertTitleProps = PropsWithChildren<{
  className?: string;
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white';
}>;
export function AlertTitle({ color = 'red', className, children }: AlertTitleProps) {
  const alertTitle = tv({
    slots: {
      container: 'tw:flex tw:items-center tw:gap-2 tw:p-4 tw:text-xl',
      icon: 'tw:h-[1.5em]',
      text: '',
    },
    variants: {
      color: {
        'red': {
          container: 'tw:bg-red tw:text-red-contrast',
        },
        'yellow': {
          container: 'tw:bg-yellow tw:text-yellow-contrast',
        },
        'blue': {
          container: 'tw:bg-blue tw:text-blue-contrast',
        },
        'green': {
          container: 'tw:bg-green tw:text-green-contrast',
        },
        'light-grey': {
          container: 'tw:bg-light-grey tw:text-light-grey-contrast',
        },
        'dark-grey': {
          container: 'tw:bg-dark-grey tw:text-dark-grey-contrast',
        },
        'black': {
          container: 'tw:bg-black tw:text-black-contrast',
        },
        'white': {
          container: 'tw:bg-white tw:text-white-contrast',
        },
      },
    },
  });

  const { container, icon, text } = alertTitle({ color });

  return (
    <div className={`uofg-alert-title-container ${twMerge(container(), className)}`}>
      <FontAwesomeIcon className={`uofg-alert-title-icon ${icon()}`} icon={faCircleExclamation} />
      <div className={`uofg-alert-title ${text()}`}>{children}</div>
    </div>
  );
}
AlertTitle.displayName = 'AlertTitle';

export type AlertSubtitleProps = PropsWithChildren<{
  className?: string;
}>;
export function AlertSubtitle({ children, className }: AlertSubtitleProps) {
  const alertSubtitle = twMerge('tw:font-bold tw:mb-4 tw:text-xl', className);

  return <span className={`uofg-alert-subtitle ${alertSubtitle}`}>{children}</span>;
}
AlertSubtitle.displayName = 'AlertSubtitle';

export type AlertMessageProps = PropsWithChildren<{
  className?: string;
}>;
export function AlertMessage({ children, className }: AlertMessageProps) {
  const alertMessage = twMerge(
    'tw:flex tw:flex-col tw:border-x tw:border-b tw:border-light-grey tw:bg-white tw:px-4 tw:py-3',
    className,
  );

  return <div className={`uofg-alert-message ${alertMessage}`}>{children}</div>;
}
AlertMessage.displayName = 'AlertMessage';

export type AlertFooterProps = PropsWithChildren<{
  className?: string;
}>;
export function AlertFooter({ children, className }: AlertFooterProps) {
  const alertFooter = twMerge('tw:flex tw:bg-light-grey tw:px-4 tw:py-2', className);

  return <div className={`uofg-alert-footer ${alertFooter}`}>{children}</div>;
}
AlertFooter.displayName = 'AlertFooter';

export type AlertProps = PropsWithChildren<{
  className?: string;
}>;
export function Alert({ children, className }: AlertProps) {
  const alert = twMerge('tw:flex tw:flex-col', className);

  return <div className={`uofg-alert ${alert}`}>{children}</div>;
}
Alert.displayName = 'Alert';
