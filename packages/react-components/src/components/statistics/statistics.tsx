import { PropsWithChildren, useState } from 'react';
import { tv } from 'tailwind-variants';
import { StatisticsContext } from './statistics-context';

export type StatisticsProps = PropsWithChildren<{
  variant: 'solid-colors-full' | 'solid-colors-no-gap' | 'solid-colors' | 'light-blue' | 'left-border';
}>;

export function Statistics({ children, variant }: StatisticsProps) {
  const [count, setCount] = useState<number>(0);

  const classes = tv({
    base: 'mx-auto my-4 flex flex-col flex-wrap sm:flex-row',
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
        'solid-colors': 'gap-4',
        'light-blue': 'gap-4',
        'left-border': 'gap-4',
      },
    },
    compoundVariants: [
      {
        divisibleByTwo: true,
        divisibleByThree: false,
        divisibleByFour: false,
        classes: 'grid grid-cols-1 sm:grid-cols-2',
      },
      {
        divisibleByTwo: false,
        divisibleByThree: true,
        divisibleByFour: false,
        classes: 'grid grid-cols-1 sm:grid-cols-3',
      },
    ],
  });

  return (
    <StatisticsContext.Provider
      value={{
        variant,
        incrementCount: () => setCount(prev => prev + 1),
        count,
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
