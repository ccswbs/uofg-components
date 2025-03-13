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
    base: 'uog:relative uog:h-full uog:hidden uog:md:block',
    variants: {
      stack: {
        true: 'uog:w-full',
        false: 'uog:flex-1',
      },
    },
  });

  return (
    <div className={`uofg-link-carousel-content ${twMerge(linkCarouselContent({ stack: context?.stack }), className)}`}>
      {children}
    </div>
  );
}
