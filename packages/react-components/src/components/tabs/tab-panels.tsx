import { TabPanels as HUITabPanels } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type TabPanelsProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function TabPanels({ children, className }: TabPanelsProps) {
  const classes = twMerge('uofg-tab-panels', className);
  return <HUITabPanels className={`uofg-tab-panels ${classes}`}>{children}</HUITabPanels>;
}

TabPanels.displayName = 'TabPanels';
