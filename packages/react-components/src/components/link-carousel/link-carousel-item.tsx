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
  const isActive = context?.activeId === id;
  const wasActive = context?.previousActiveId === id;

  const linkCarouselItem = tv({
    base: 'hidden w-full bg-white',
    variants: {
      isActive: { true: 'relative z-10 block animate-fade-in' },
      wasActive: { true: 'absolute top-0 left-0 z-0 block' },
    },
  });

  const classes = twMerge(linkCarouselItem({ isActive, wasActive }), className);

  return (
    <>
      <div className={`uofg-link-carousel-item ${classes}`} inert={wasActive}>
        {children}
      </div>
    </>
  );
}
