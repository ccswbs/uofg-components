import { Tab as HUITab } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type TabProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function Tab({ children, className }: TabProps) {
  const classes = twMerge(
    'uofg-tab-list',
    'uog:mb-1',
    'uog:rounded-t-sm',
    'uog:bg-grey-light-bg',
    'uog:px-4',
    'uog:py-3',
    'uog:text-lg',
    'uog:font-bold',
    'uog:text-black',
    'uog:transition-colors',
    'uog:hover:bg-grey-light',
    'uog:focus:bg-grey-light',
    'uog:focus:outline-none',
    'uog:ui-selected:mb-0',
    'uog:ui-selected:border-2',
    'uog:ui-selected:border-yellow',
    'uog:ui-selected:bg-yellow',
    'uog:flex-1',
    className,
  );

  return <HUITab className={classes}>{children}</HUITab>;
}

Tab.displayName = 'Tab';
