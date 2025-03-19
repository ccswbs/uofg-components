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
      container: 'uog:flex uog:items-center uog:gap-2 uog:p-4 uog:text-xl',
      icon: 'uog:h-[1.5em]',
      text: '',
    },
    variants: {
      color: {
        'red': {
          container: 'uog:bg-red uog:text-red-contrast',
        },
        'yellow': {
          container: 'uog:bg-yellow uog:text-yellow-contrast',
        },
        'blue': {
          container: 'uog:bg-blue uog:text-blue-contrast',
        },
        'green': {
          container: 'uog:bg-green uog:text-green-contrast',
        },
        'grey-light': {
          container: 'uog:bg-grey-light uog:text-grey-light-contrast',
        },
        'grey-dark': {
          container: 'uog:bg-grey-dark uog:text-grey-dark-contrast',
        },
        'black': {
          container: 'uog:bg-black uog:text-black-contrast',
        },
        'white': {
          container: 'uog:bg-white uog:text-white-contrast',
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
