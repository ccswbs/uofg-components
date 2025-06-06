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
    base: 'uog:flex uog:flex-col uog:gap-1 uog:border-l-4 uog:pl-4',
    variants: {
      color: {
        'red': 'uog:border-l-red',
        'yellow': 'uog:border-l-yellow',
        'blue': 'uog:border-l-blue',
        'green': 'uog:border-l-green',
        'grey-light': 'uog:border-l-grey-light',
        'grey-dark': 'uog:border-l-grey-dark',
        'black': 'uog:border-l-black',
        'white': 'uog:border-l-white',
      },
    },
  });

  return <div className={`uofg-info ${info({ color })}`}>{children}</div>;
}

Info.displayName = 'Info';
