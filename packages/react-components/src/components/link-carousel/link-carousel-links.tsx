import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { LinkCarouselContext } from './link-carousel-context';

export type LinkCarouselLinksProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the link carousel links.
   */
  className?: string;
}>;

export function LinkCarouselLinks({ children, className }: LinkCarouselLinksProps) {
  const context = useContext(LinkCarouselContext);

  const linkCarouselLinks = tv({
    base: 'tw:flex tw:flex-col tw:gap-2 tw:w-full tw:top-0 tw:md:w-1/3 tw:md:z-20 tw:h-full',
    variants: {
      stack: {
        true: 'tw:md:absolute',
      },
      direction: {
        left: 'tw:left-0',
        right: 'tw:right-0',
      },
    },
  });

  const classes = linkCarouselLinks({ stack: context?.stack, direction: context?.direction });

  return <div className={`uofg-link-carousel-links ${twMerge(classes, className)}`}>{children}</div>;
}
