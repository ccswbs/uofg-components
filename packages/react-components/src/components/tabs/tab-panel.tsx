import { TabPanel as HUITabPanel } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type TabPanelsProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function TabPanel({ children, className }: TabPanelsProps) {
  const classes = twMerge('uofg-tab-panel uog:py-4', className);
  return <HUITabPanel className={`uofg-tab-panel ${classes}`}>{children}</HUITabPanel>;
}

TabPanel.displayName = 'TabPanel';
