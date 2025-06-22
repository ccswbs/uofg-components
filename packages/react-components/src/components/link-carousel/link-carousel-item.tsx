'use client';

import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { LinkCarouselContext, LinkCarouselId } from './link-carousel-context';

export type LinkCarouselItemProps = PropsWithChildren<{
  /** The unique identifier for the link carousel item. */
  id: LinkCarouselId;
  /** Additional classes to apply to the link carousel item */
  className?: string;
}>;

export function LinkCarouselItem({ id, children, className }: LinkCarouselItemProps) {
  const context = useContext(LinkCarouselContext);

  const linkCarouselItem = tv({
    base: 'uog:w-full uog:hidden uog:bg-white',
    variants: {
      isActive: { true: 'uog:block uog:relative uog:animate-fade-in uog:z-10' },
      wasActive: { true: 'uog:block uog:absolute uog:z-0 uog:top-0 uog:left-0' },
    },
  });

  const classes = twMerge(
    linkCarouselItem({ isActive: context?.activeId === id, wasActive: context?.previousActiveId === id }),
    className,
  );

  return (
    <>
      <div className={`uofg-link-carousel-item ${classes}`}>{children}</div>
    </>
  );
}
