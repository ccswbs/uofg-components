'use client';

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
    'mb-1',
    'rounded-t-sm',
    'bg-grey-light-bg',
    'px-4',
    'py-3',
    'text-lg',
    'font-bold',
    'text-black',
    'transition-colors',
    'hover:bg-grey-light',
    'focus:bg-grey-light',
    'focus:outline-none',
    'ui-selected:mb-0',
    'ui-selected:border-2',
    'ui-selected:border-yellow',
    'ui-selected:bg-yellow',
    'ui-selected:focus:bg-grey-light',
    'flex-1',
    className,
  );

  return <HUITab className={`uofg-tab ${classes}`}>{children}</HUITab>;
}

Tab.displayName = 'Tab';
