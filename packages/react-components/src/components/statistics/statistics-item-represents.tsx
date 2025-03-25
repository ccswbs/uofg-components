import { PropsWithChildren } from 'react';

export type StatisticsItemRepresentsProps = PropsWithChildren<{
  /** Additional classes to apply to the statistics item represents. */
  className?: string;
}>;

export function StatisticsItemRepresents({ children }: StatisticsItemRepresentsProps) {
  return <dd className="text-normal p-6 pt-0 text-center text-lg font-normal">{children}</dd>;
}
