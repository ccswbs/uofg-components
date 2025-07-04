import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

export type InfoProps = PropsWithChildren<{
  /**
   * The color of the left border in the info component.
   *
   * @default 'red'
   */
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'grey-light' | 'grey-dark' | 'black' | 'white';
}>;

export function Info({ children, color = 'red' }: InfoProps) {
  const info = tv({
    base: 'flex flex-col gap-1 border-l-4 pl-4',
    variants: {
      color: {
        'red': 'border-l-red',
        'yellow': 'border-l-yellow',
        'blue': 'border-l-blue',
        'green': 'border-l-green',
        'grey-light': 'border-l-grey-light',
        'grey-dark': 'border-l-grey-dark',
        'black': 'border-l-black',
        'white': 'border-l-white',
      },
    },
  });

  return <div className={`uofg-info ${info({ color })}`}>{children}</div>;
}

Info.displayName = 'Info';
