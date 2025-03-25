import { PropsWithChildren } from 'react';

export type StatisticsItemValueProps = PropsWithChildren<{
  /** Additional classes to apply to the statistics item value. */
  className?: string;
}>;

export function StatisticsItemValue({ children }: StatisticsItemValueProps) {
  return <dt className="break-auto p-6 pb-0 text-center text-3xl leading-tight font-bold">{children}</dt>;
}
