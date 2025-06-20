'use client';

import { TabList as HUITabList } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type TabListProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function TabList({ children, className }: TabListProps) {
  const classes = twMerge(
    'uofg-tab-list uog:flex uog:gap-1 uog:border-b-4 uog:border-yellow uog:w-full uog:flex-col uog:md:flex-row',
    className,
  );
  return <HUITabList className={`uofg-tab-list ${classes}`}>{children}</HUITabList>;
}

TabList.displayName = 'TabList';
