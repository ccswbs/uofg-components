'use client';

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
    base: 'top-0 flex w-full flex-col gap-2 md:z-20 md:w-1/3',
    variants: {
      stack: {
        true: 'h-full md:absolute',
        false: 'h-auto',
      },
      direction: {
        left: 'left-0',
        right: 'right-0',
      },
    },
  });

  const classes = linkCarouselLinks({ stack: context?.stack, direction: context?.direction });

  return <div className={`uofg-link-carousel-links ${twMerge(classes, className)}`}>{children}</div>;
}
