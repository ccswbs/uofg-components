import { PropsWithChildren } from 'react';

export type StatisticsItemProps = PropsWithChildren<{
  /** Additional classes to apply to the statistics item. */
  className?: string;
}>;

export function StatisticsItem({ children }: StatisticsItemProps) {
  return <div>{children}</div>;
}
