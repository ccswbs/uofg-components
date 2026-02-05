'use client';

import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type ListItemProps = PropsWithChildren<
  {
    /** Additional classes to apply to the list item. */
    className?: string;
  } & ComponentPropsWithoutRef<'li'>
>;

/** A list item component. */
export function ListItem({ className, children, ...rest }: ListItemProps) {
  return (
    <li {...rest} className={`uofg-list-item ${twMerge('relative break-inside-avoid', className)}`}>
      {children}
    </li>
  );
}

ListItem.displayName = 'ListItem';
