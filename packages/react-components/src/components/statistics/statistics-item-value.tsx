'use client';

import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StatisticsItemValueProps = PropsWithChildren<{
  /** Additional classes to apply to the item. */
  className?: string;
}>;

export function StatisticsItemValue({ children, className }: StatisticsItemValueProps) {
  const classes = twMerge('break-auto p-6 pb-0 text-3xl leading-tight font-bold', className);
  return <dt className={`uofg-statistics-item-value ${classes}`}>{children}</dt>;
}

StatisticsItemValue.displayName = 'StatisticsItemValue';
