import type { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type BlockquoteProps = {
  className?: string;
  children: ReactNode;
  color?: 'yellow' | 'red' | 'blue';
};

export const Blockquote: FC<BlockquoteProps> = ({ className, children, color = 'yellow' }) => {
  const blockquote = tv({
    slots: {
      base: twMerge('font-light block w-full text-center text-3xl italic', className),
      icons: 'inline-block h-[1em]',
    },
    variants: {
      color: {
        red: {
          icons: 'text-red',
        },
        yellow: {
          icons: 'text-yellow',
        },
        blue: {
          icons: 'text-blue',
        },
      },
      direction: {
        left: {
          icons: 'mr-[0.3em]',
        },
        right: {
          icons: 'ml-[0.25em]',
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
};

Blockquote.displayName = 'Blockquote';
