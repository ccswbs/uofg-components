import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

export type InfoProps = PropsWithChildren<{
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white';
}>;

export function Info({ children, color = 'red' }: InfoProps) {
  const info = tv({
    base: 'tw:flex tw:flex-col tw:gap-1 tw:border-l-4 tw:pl-4',
    variants: {
      color: {
        red: 'tw:border-l-red',
        yellow: 'tw:border-l-yellow',
        blue: 'tw:border-l-blue',
        green: 'tw:border-l-green',
        'light-grey': 'tw:border-l-light-grey',
        'dark-grey': 'tw:border-l-dark-grey',
        black: 'tw:border-l-black',
        white: 'tw:border-l-white',
      },
    },
  });

  return <div className={info({ color })}>{children}</div>;
}

Info.displayName = 'Info';
