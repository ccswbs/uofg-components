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

  const { base, icons } = classes({ color: context?.color ?? 'yellow' });

  return (
    <blockquote className={`uofg-blockquote-content ${twMerge(base(), className)}`}>
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className={`uofg-blockquote-content-left-quote ${icons({ direction: 'left' })}`}
      />
      <span className="uofg-blockquote-content-text">{children}</span>
      <FontAwesomeIcon
        icon={faQuoteRight}
        className={`uofg-blockquote-content-right-quote ${icons({ direction: 'right' })}`}
      />
    </blockquote>
  );
}
BlockquoteContent.displayName = 'BlockquoteContent';
