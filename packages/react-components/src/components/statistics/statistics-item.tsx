'use client';

import { PropsWithChildren, useContext, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { StatisticsContext } from './statistics-context';

export type StatisticsItemProps = PropsWithChildren<{
  /** Additional classes to apply to the item. */
  className?: string;
}>;

export function StatisticsItem({ children, className }: StatisticsItemProps) {
  const context = useContext(StatisticsContext);
  const ref = useRef<HTMLDivElement | null>(null);

  const setColor = () => {
    const colors = ['black', 'red', 'yellow', 'blue'];

    if (!ref.current) {
      return;
    }

    const item = ref.current;
    const parent = ref.current.parentElement;

    if (!parent) {
      return;
    }

    const allItems = Array.from(parent.querySelectorAll('.uofg-statistics-item'));
    const index = allItems.indexOf(item);

    item.style.setProperty('--statistic-color', `var(--color-${colors[index % colors.length]})`);
    item.style.setProperty('--statistic-color-contrast', `var(--color-${colors[index % colors.length]}-contrast)`);
  };

  useEffect(() => {
    context?.incrementCount();

    setColor();

    return () => {
      context?.decrementCount();
    };
  }, []);

  const classes = tv({
    base: 'relative flex min-w-1/3 flex-1 flex-col items-center justify-around gap-2',
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
        'left-border': 'items-start border-l-8 border-(--statistic-color)',
      },
      threeColumn: {
        true: '',
      },
      fourColumn: {
        true: '',
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
        class: 'bg-(--statistic-color) text-(--statistic-color-contrast)',
      },
      {
        variant: ['solid-colors-full'],
        threeColumn: true,
        class: 'nth-[4n]:before:z-0',
      },
      {
        variant: ['solid-colors-full'],
        fourColumn: true,
        class: 'nth-[5n]:before:z-0',
      },
    ],
  });

  const count = context?.count ?? NaN;

  return (
    <div
      ref={ref}
      className={`uofg-statistics-item ${twMerge(
        classes({
          variant: context?.variant,
          threeColumn: count >= 5 && count % 4 !== 0,
          fourColumn: count >= 5 && count % 4 === 0,
        }),
        className,
      )}`}
    >
      {children}
    </div>
  );
}

StatisticsItem.displayName = 'StatisticsItem';
