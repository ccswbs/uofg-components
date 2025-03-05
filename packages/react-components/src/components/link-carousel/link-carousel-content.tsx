import { PropsWithChildren, useContext } from 'react';
import { LinkCarouselContext } from './link-carousel-context';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

export type LinkCarouselContentProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the link carousel content container.
   */
  className?: string;
}>;

export function LinkCarouselContent({ children, className }: LinkCarouselContentProps) {
  const context = useContext(LinkCarouselContext);

  const linkCarouselContent = tv({
    base: 'tw:relative',
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
