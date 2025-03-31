import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StatisticsItemRepresentsProps = PropsWithChildren<{
  /** Additional classes to apply to the item. */
  className?: string;
}>;

export function StatisticsItemRepresents({ children, className }: StatisticsItemRepresentsProps) {
  const classes = twMerge(
    'uofg-statistics-item-represents uog:text-normal uog:p-6 uog:pt-0 uog:text-lg uog:font-normal',
    className,
  );

  return <dd className={classes}>{children}</dd>;
}

StatisticsItemRepresents.displayName = 'StatisticsItemRepresents';
