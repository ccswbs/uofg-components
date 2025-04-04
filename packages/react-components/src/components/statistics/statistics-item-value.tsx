import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StatisticsItemValueProps = PropsWithChildren<{
  /** Additional classes to apply to the item. */
  className?: string;
}>;

export function StatisticsItemValue({ children, className }: StatisticsItemValueProps) {
  const classes = twMerge(
    'uofg-statistics-item-value uog:break-auto uog:p-6 uog:pb-0 uog:text-3xl uog:leading-tight uog:font-bold',
    className,
  );
  return <dt className={classes}>{children}</dt>;
}

StatisticsItemValue.displayName = 'StatisticsItemValue';
