import { faCircleExclamation } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type AlertTitleProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the alert title
   */
  className?: string;
  /**
   * The background color of the alert title
   * @default 'red'
   */
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white';
}>;

/**
 * The AlertTitle component is used to display the title of an alert.
 */
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
