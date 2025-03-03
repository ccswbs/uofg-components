import type { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { tv } from 'tailwind-variants';
import { twJoin } from 'tailwind-merge';

export type AlertTitleProps = PropsWithChildren<{
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white';
}>;
export function AlertTitle({ color = 'red', children }: AlertTitleProps) {
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
    <div className={container()}>
      <FontAwesomeIcon className={icon()} icon={faCircleExclamation} />
      <div className={text()}>{children}</div>
    </div>
  );
}
AlertTitle.displayName = 'AlertTitle';

export type AlertSubtitleProps = PropsWithChildren;

export function AlertSubtitle({ children }: AlertSubtitleProps) {
  const alertSubtitle = twJoin('tw:font-bold tw:mb-4 tw:text-xl');

  return <span className={alertSubtitle}>{children}</span>;
}
AlertSubtitle.displayName = 'AlertSubtitle';

export type AlertMessageProps = PropsWithChildren;
export function AlertMessage({ children }: AlertMessageProps) {
  const alertMessage = twJoin(
    'tw:flex tw:flex-col tw:border-x tw:border-b tw:border-light-grey tw:bg-white tw:px-4 tw:py-3',
  );

  return <div className={alertMessage}>{children}</div>;
}
AlertMessage.displayName = 'AlertMessage';

export type AlertFooterProps = PropsWithChildren;
export function AlertFooter({ children }: AlertFooterProps) {
  const alertFooter = twJoin('tw:flex tw:bg-light-grey tw:px-4 tw:py-2');

  return <div className={alertFooter}>{children}</div>;
}
AlertFooter.displayName = 'AlertFooter';

export type AlertProps = PropsWithChildren;
export function Alert({ children }: AlertProps) {
  const alert = twJoin('tw:flex tw:flex-col');

  return <div className={alert}>{children}</div>;
}
Alert.displayName = 'Alert';
