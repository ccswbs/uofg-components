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
    base: 'uog:relative uog:flex uog:flex-1 uog:flex-col uog:justify-around uog:gap-2',
    variants: {
      variant: {
        'solid-colors-full': [
          'uog:sm:before:content-[""]',
          'uog:before:absolute',
          'uog:before:top-0',
          'uog:before:right-full',
          'uog:before:w-[calc((100vw-var(--statistic-bg-width))/2)]',
          'uog:before:h-full',
          'uog:before:bg-inherit',
          'uog:before:z-[-1]',
          'uog:first:before:z-0',
          'uog:sm:after:content-[""]',
          'uog:after:absolute',
          'uog:after:top-0',
          'uog:after:left-full',
          'uog:after:w-[calc((100vw-var(--statistic-bg-width))/2)]',
          'uog:after:h-full',
          'uog:after:bg-inherit',
          'uog:after:z-[-1]',
          'uog:last:after:z-0',
        ],
        'solid-colors-no-gap': '',
        'solid-colors': '',
        'light-grey': '',
        'left-border':
          'uog:border-l-8 uog:border-black uog:nth-[2n]:border-red uog:nth-[3n]:border-yellow uog:nth-[4n]:border-blue',
      },
    },
    compoundVariants: [
      {
        variant: ['light-grey', 'left-border'],
        class: 'uog:bg-grey-light-bg uog:text-black-on-light',
      },
      {
        variant: ['solid-colors-full', 'solid-colors-no-gap', 'solid-colors', 'light-grey'],
        class: 'uog:text-center',
      },
      {
        variant: ['solid-colors-full', 'solid-colors-no-gap', 'solid-colors'],
        class:
          'uog:bg-black uog:text-black-contrast uog:nth-[2n]:bg-red uog:nth-[2n]:text-red-contrast uog:nth-[3n]:bg-yellow uog:nth-[3n]:text-yellow-contrast uog:nth-[4n]:bg-blue uog:nth-[4n]:text-blue-contrast uog:border-b uog:border-white',
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
