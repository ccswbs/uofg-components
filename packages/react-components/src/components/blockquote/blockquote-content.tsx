'use client';

import { faQuoteLeft, faQuoteRight } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { BlockquoteContext } from './blockquote-context';

export type BlockquoteContentProps = PropsWithChildren<{
  /** Additional classes to apply to the blockquote */
  className?: string;
}>;
/** The Blockquote component is used to highlight a quote or excerpt from another source. */
export function BlockquoteContent({ className, children }: BlockquoteContentProps) {
  const context = useContext(BlockquoteContext);

  const classes = tv({
    slots: {
      base: 'uog:font-light uog:block uog:w-full uog:text-center uog:text-3xl uog:italic',
      icons: 'uog:inline-block uog:h-[1em]',
    },
    variants: {
      color: {
        yellow: {
          icons: 'uog:text-yellow',
        },
        blue: {
          icons: 'uog:text-blue',
        },
      },
    },
  });

  const { base, icons } = classes({ color: context?.color ?? 'yellow' });

  return (
    <blockquote className={`uofg-blockquote-content ${twMerge(base(), className)}`}>
      {!context?.hideQuotationMarks && (
        <>
          <FontAwesomeIcon icon={faQuoteLeft} className={`uofg-blockquote-content-left-quote ${icons()}`} />{' '}
        </>
      )}
      <span className="uofg-blockquote-content-text">{children}</span>{' '}
      {!context?.hideQuotationMarks && (
        <>
          {' '}
          <FontAwesomeIcon icon={faQuoteRight} className={`uofg-blockquote-content-right-quote ${icons()}`} />
        </>
      )}
    </blockquote>
  );
}
BlockquoteContent.displayName = 'BlockquoteContent';
