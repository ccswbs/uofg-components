import { faQuoteLeft, faQuoteRight } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type BlockquoteProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the blockquote
   */
  className?: string;
  /**
   * The color of the blockquote quotation marks
   * @default 'yellow'
   */
  color?: 'yellow' | 'red' | 'blue';
}>;
/**
 * The Blockquote component is used to highlight a quote or excerpt from another source.
 */
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
    <blockquote className={`uofg-blockquote ${base()}`}>
      <FontAwesomeIcon icon={faQuoteLeft} className={`uofg-blockquote-left-quote ${icons({ direction: 'left' })}`} />
      <span className="uofg-blockquote-content">{children}</span>
      <FontAwesomeIcon icon={faQuoteRight} className={`uofg-blockquote-right-quote ${icons({ direction: 'right' })}`} />
    </blockquote>
  );
}
Blockquote.displayName = 'Blockquote';
