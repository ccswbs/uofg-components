import { PropsWithChildren, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { useResizeObserver } from '../../utils/use-resize-observer';
import { StatisticsContext } from './statistics-context';

export type StatisticsProps = PropsWithChildren<{
  /** The variant of the statistics */
  variant: 'solid-colors-full' | 'solid-colors-no-gap' | 'solid-colors' | 'light-grey' | 'left-border';
  /** Additional classes to apply to the statistics */
  className?: string;
}>;

/** The Statistic component is used to display a list of statistics in a grid layout. */
export function Statistics({ children, variant, className }: StatisticsProps) {
  const [count, setCount] = useState<number>(0);
  const [ref, entry] = useResizeObserver<HTMLDListElement>();

  const classes = tv({
    base: 'uofg-statistics uog:mx-auto uog:my-4 uog:flex uog:flex-col uog:flex-wrap uog:sm:flex-row',
    variants: {
      divisibleByTwo: {
        true: '',
      },
      divisibleByThree: {
        true: '',
      },
      divisibleByFour: {
        true: 'uog:grid uog:grid-cols-1 uog:sm:grid-cols-2 uog:lg:grid-cols-4',
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
        class: 'uog:gap-4',
      },
      {
        divisibleByTwo: true,
        divisibleByThree: false,
        divisibleByFour: false,
        class: 'uog:grid uog:grid-cols-1 uog:sm:grid-cols-2',
      },
      {
        divisibleByThree: true,
        divisibleByFour: false,
        class: 'uog:grid uog:grid-cols-1 uog:sm:grid-cols-3',
      },
    ],
  });

  return (
    <StatisticsContext.Provider
      value={{
        variant,
        incrementCount: () => setCount(prev => prev + 1),
      }}
    >
      <dl
        className={twMerge(
          classes({
            variant,
            divisibleByTwo: count % 2 === 0,
            divisibleByThree: count % 3 === 0,
            divisibleByFour: count % 4 === 0,
          }),
          className,
        )}
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
