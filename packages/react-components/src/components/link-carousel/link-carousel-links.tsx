import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { LinkCarouselContext } from './link-carousel-context';

export type LinkCarouselLinksProps = PropsWithChildren<{
  /** Additional classes to apply to the link carousel links. */
  className?: string;
}>;

export function LinkCarouselLinks({ children, className }: LinkCarouselLinksProps) {
  const context = useContext(LinkCarouselContext);

  const linkCarouselLinks = tv({
    base: 'uog:flex uog:flex-col uog:gap-2 uog:w-full uog:top-0 uog:md:w-1/3 uog:md:z-20',
    variants: {
      stack: {
        true: 'uog:md:absolute uog:h-full',
        false: 'uog:h-auto',
      },
      direction: {
        left: 'uog:left-0',
        right: 'uog:right-0',
      },
    },
  });

  const classes = linkCarouselLinks({ stack: context?.stack, direction: context?.direction });

  return <div className={`uofg-link-carousel-links ${twMerge(classes, className)}`}>{children}</div>;
}
