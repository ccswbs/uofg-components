'use client';

import { PropsWithChildren, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { useResizeObserver } from '../../utils/use-resize-observer';
import { StatisticsContext } from './statistics-context';

export type StatisticsProps = PropsWithChildren<{
  id?: string;
  /** The variant of the statistics */
  variant: 'solid-colors-full' | 'solid-colors-no-gap' | 'solid-colors' | 'light-grey' | 'left-border';
  /** Additional classes to apply to the statistics */
  className?: string;
}>;

/** The Statistic component is used to display a list of statistics in a grid layout. */
export function Statistics({ id, children, variant, className }: StatisticsProps) {
  const [count, setCount] = useState<number>(0);
  const [ref, entry] = useResizeObserver<HTMLDListElement>();

  const classes = tv({
    base: 'mx-auto my-0 flex flex-col flex-wrap sm:flex-row',
    variants: {
      divisibleByTwo: {
        true: '',
      },
      divisibleByThree: {
        true: '',
      },
      divisibleByFour: {
        true: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      },
      variant: {
        'solid-colors-full': '',
        'solid-colors-no-gap': '',
        'solid-colors': '',
        'light-grey': '',
        'left-border': '',
      },
    },
    compoundVariants: [
      {
        variant: ['solid-colors', 'light-grey', 'left-border'],
        class: 'gap-4',
      },
      {
        variant: ['left-border'],
        divisibleByFour: true,
        class: 'lg:grid-cols-2',
      },
      {
        divisibleByTwo: true,
        divisibleByThree: false,
        divisibleByFour: false,
        class: 'grid grid-cols-1 sm:grid-cols-2',
      },
      {
        divisibleByThree: true,
        divisibleByFour: false,
        class: 'grid grid-cols-1 sm:grid-cols-3',
      },
    ],
  });

  const mergedClasses = twMerge(
    classes({
      variant,
      divisibleByTwo: count % 2 === 0,
      divisibleByThree: count % 3 === 0,
      divisibleByFour: count % 4 === 0,
    }),
    className,
  );

  return (
    <StatisticsContext.Provider
      value={{
        variant,
        incrementCount: () => setCount(prev => prev + 1),
        count,
      }}
    >
      <dl
        id={id}
        className={`uofg-statistics ${mergedClasses}`}
        style={
          /* @ts-expect-error TypeScript doesn't like CSS Variables */
          variant === 'solid-colors-full' ? { '--statistic-bg-width': entry?.contentRect.width + 'px' } : undefined
        }
        ref={ref}
      >
        {children}
      </dl>
    </StatisticsContext.Provider>
  );
}

Statistics.displayName = 'Statistics';

export { StatisticsItem } from './statistics-item';
export { StatisticsItemImage } from './statistics-item-image';
export { StatisticsItemRepresents } from './statistics-item-represents';
export { StatisticsItemValue } from './statistics-item-value';
