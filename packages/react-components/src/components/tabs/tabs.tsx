'use client';

import { TabGroup } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type TabsProps = PropsWithChildren<{
  id?: string;
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function Tabs({ id, children, className }: TabsProps) {
  const classes = twMerge('uofg-tabs', className);
  return (
    <TabGroup id={id} className={`uofg-tabs ${classes}`}>
      {children}
    </TabGroup>
  );
}

Tabs.displayName = 'Tabs';

export { Tab } from './tab';
export { TabList } from './tab-list';
export { TabPanel } from './tab-panel';
export { TabPanels } from './tab-panels';
