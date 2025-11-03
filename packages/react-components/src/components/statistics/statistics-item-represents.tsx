'use client';

import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StatisticsItemRepresentsProps = PropsWithChildren<{
  /** Additional classes to apply to the item. */
  className?: string;
}>;

export function StatisticsItemRepresents({ children, className }: StatisticsItemRepresentsProps) {
  const classes = twMerge('text-normal flex-1 p-6 pt-0 text-lg font-normal', className);

  return <dd className={`uofg-statistics-item-represents ${classes}`}>{children}</dd>;
}

StatisticsItemRepresents.displayName = 'StatisticsItemRepresents';
