import { TabGroup } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type TabsProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function Tabs({ children, className }: TabsProps) {
  const classes = twMerge('uofg-tabs', className);
  return <TabGroup className={classes}>{children}</TabGroup>;
}

Tabs.displayName = 'Tabs';

export { Tab } from './tab';
export { TabList } from './tab-list';
export { TabPanel } from './tab-panel';
export { TabPanels } from './tab-panels';
