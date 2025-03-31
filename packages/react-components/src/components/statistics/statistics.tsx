import { PropsWithChildren, useState } from 'react';
import { tv } from 'tailwind-variants';
import { StatisticsContext } from './statistics-context';

export type StatisticsProps = PropsWithChildren<{
  variant: 'solid-colors-full' | 'solid-colors-no-gap' | 'solid-colors' | 'light-grey' | 'left-border';
}>;

/** The Statistic component is used to display a list of statistics in a grid layout. */
export function Statistics({ children, variant }: StatisticsProps) {
  const [count, setCount] = useState<number>(0);

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
        className={classes({
          variant,
          divisibleByTwo: count % 2 === 0,
          divisibleByThree: count % 3 === 0,
          divisibleByFour: count % 4 === 0,
        })}
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
