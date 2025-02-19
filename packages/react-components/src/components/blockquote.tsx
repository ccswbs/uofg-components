import type { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type BlockquoteProps = PropsWithChildren<{
  className?: string;
  color?: 'yellow' | 'red' | 'blue';
}>;

export function Blockquote({ className, children, color = 'yellow' }: BlockquoteProps) {
  const blockquote = tv({
    slots: {
      base: twMerge('tw:font-light tw:block tw:w-full tw:text-center tw:text-3xl tw:italic', className),
      icons: 'tw:inline-block tw:h-[1em]',
    },
    variants: {
      color: {
        red: {
          icons: 'tw:text-red',
        },
        yellow: {
          icons: 'tw:text-yellow',
        },
        blue: {
          icons: 'tw:text-blue',
        },
      },
      direction: {
        left: {
          icons: 'tw:mr-[0.3em]',
        },
        right: {
          icons: 'tw:ml-[0.25em]',
        },
      },
    },
  });

  const { base, icons } = blockquote({ color });

  return (
    <blockquote className={base()}>
      <FontAwesomeIcon icon={faQuoteLeft} className={icons({ direction: 'left' })} />
      <span>{children}</span>
      <FontAwesomeIcon icon={faQuoteRight} className={icons({ direction: 'right' })} />
    </blockquote>
  );
}

Blockquote.displayName = 'Blockquote';
