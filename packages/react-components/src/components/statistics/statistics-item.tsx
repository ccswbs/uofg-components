'use client';

import { PropsWithChildren, useContext, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { StatisticsContext } from './statistics-context';

export type StatisticsItemProps = PropsWithChildren<{
  /** Additional classes to apply to the item. */
  className?: string;
}>;

export function StatisticsItem({ children, className }: StatisticsItemProps) {
  const context = useContext(StatisticsContext);

  useEffect(() => {
    context?.incrementCount();
  }, []);

  const classes = tv({
    base: 'relative flex flex-1 flex-col justify-around gap-2',
    variants: {
      variant: {
        'solid-colors-full': [
          'sm:before:content-[""]',
          'before:absolute',
          'before:top-0',
          'before:right-full',
          'before:w-[calc((100vw-var(--statistic-bg-width))/2)]',
          'before:h-full',
          'before:bg-inherit',
          'before:z-[-1]',
          'first:before:z-0',
          'sm:after:content-[""]',
          'after:absolute',
          'after:top-0',
          'after:left-full',
          'after:w-[calc((100vw-var(--statistic-bg-width))/2)]',
          'after:h-full',
          'after:bg-inherit',
          'after:z-[-1]',
          'last:after:z-0',
        ],
        'solid-colors-no-gap': '',
        'solid-colors': '',
        'light-grey': '',
        'left-border': 'border-l-8 border-black nth-[2n]:border-red nth-[3n]:border-yellow nth-[4n]:border-blue',
      },
    },
    compoundVariants: [
      {
        variant: ['light-grey', 'left-border'],
        class: 'bg-grey-light-bg text-black-on-light',
      },
      {
        variant: ['solid-colors-full', 'solid-colors-no-gap', 'solid-colors', 'light-grey'],
        class: 'text-center',
      },
      {
        variant: ['solid-colors-full', 'solid-colors-no-gap', 'solid-colors'],
        class:
          'bg-black text-black-contrast nth-[2n]:bg-red nth-[2n]:text-red-contrast nth-[3n]:bg-yellow nth-[3n]:text-yellow-contrast nth-[4n]:bg-blue nth-[4n]:text-blue-contrast',
      },
    ],
  });

  return (
    <div className={`uofg-statistics-item ${twMerge(classes({ variant: context?.variant }), className)}`}>
      {children}
    </div>
  );
}

StatisticsItem.displayName = 'StatisticsItem';
