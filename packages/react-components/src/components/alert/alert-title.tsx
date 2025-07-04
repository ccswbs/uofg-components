import { faCircleExclamation } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type AlertTitleProps = PropsWithChildren<{
  /** Additional classes to apply to the alert title */
  className?: string;
  /**
   * The background color of the alert title
   *
   * @default 'red'
   */
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'grey-light' | 'grey-dark' | 'black' | 'white';
}>;

/** The AlertTitle component is used to display the title of an alert. */
export function AlertTitle({ color = 'red', className, children }: AlertTitleProps) {
  const alertTitle = tv({
    slots: {
      container: 'flex items-center gap-2 p-4 text-xl',
      icon: 'h-[1.5em]',
      text: '',
    },
    variants: {
      color: {
        'red': {
          container: 'bg-red text-red-contrast',
        },
        'yellow': {
          container: 'bg-yellow text-yellow-contrast',
        },
        'blue': {
          container: 'bg-blue text-blue-contrast',
        },
        'green': {
          container: 'bg-green text-green-contrast',
        },
        'grey-light': {
          container: 'bg-grey-light text-grey-light-contrast',
        },
        'grey-dark': {
          container: 'bg-grey-dark text-grey-dark-contrast',
        },
        'black': {
          container: 'bg-black text-black-contrast',
        },
        'white': {
          container: 'bg-white text-white-contrast',
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
