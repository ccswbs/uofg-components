'use client';

import { TabList as HUITabList } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type TabListProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function TabList({ children, className }: TabListProps) {
  const classes = twMerge('uofg-tab-list flex w-full flex-col gap-1 border-b-4 border-yellow md:flex-row', className);
  return <HUITabList className={`uofg-tab-list ${classes}`}>{children}</HUITabList>;
}

TabList.displayName = 'TabList';
