import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { LinkCarouselContext } from './link-carousel-context';

export type LinkCarouselContentProps = PropsWithChildren<{
  /** Additional classes to apply to the link carousel content container. */
  className?: string;
}>;

export function LinkCarouselContent({ children, className }: LinkCarouselContentProps) {
  const context = useContext(LinkCarouselContext);

  const linkCarouselContent = tv({
    base: 'tw:relative tw:h-full tw:hidden tw:md:block',
    variants: {
      stack: {
        true: 'tw:w-full',
        false: 'tw:flex-1',
      },
    },
  });

  return (
    <div className={`uofg-link-carousel-content ${twMerge(linkCarouselContent({ stack: context?.stack }), className)}`}>
      {children}
    </div>
  );
}
