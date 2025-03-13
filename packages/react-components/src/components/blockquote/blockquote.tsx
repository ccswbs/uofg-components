import { faQuoteLeft, faQuoteRight } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type BlockquoteProps = PropsWithChildren<{
  /** Additional classes to apply to the blockquote */
  className?: string;
  /**
   * The color of the blockquote quotation marks
   *
   * @default 'yellow'
   */
  color?: 'yellow' | 'red' | 'blue';
}>;
/** The Blockquote component is used to highlight a quote or excerpt from another source. */
export function Blockquote({ className, children, color = 'yellow' }: BlockquoteProps) {
  const blockquote = tv({
    slots: {
      base: twMerge('uog:font-light uog:block uog:w-full uog:text-center uog:text-3xl uog:italic', className),
      icons: 'uog:inline-block uog:h-[1em]',
    },
    variants: {
      color: {
        red: {
          icons: 'uog:text-red',
        },
        yellow: {
          icons: 'uog:text-yellow',
        },
        blue: {
          icons: 'uog:text-blue',
        },
      },
      direction: {
        left: {
          icons: 'uog:mr-[0.3em]',
        },
        right: {
          icons: 'uog:ml-[0.25em]',
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
