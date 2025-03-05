import { PropsWithChildren, useContext } from 'react';
import { LinkCarouselContext, LinkCarouselId } from './link-carousel-context';
import { tv } from 'tailwind-variants';
import { twJoin, twMerge } from 'tailwind-merge';
import { Transition } from '@headlessui/react';

export type LinkCarouselItemProps = PropsWithChildren<{
  /**
   * The unique identifier for the link carousel item.
   */
  id: LinkCarouselId;
  /**
   * Additional classes to apply to the link carousel item
   */
  className?: string;
}>;

export function LinkCarouselItem({ id, children, className }: LinkCarouselItemProps) {
  const context = useContext(LinkCarouselContext);

  const linkCarouselItem = tv({
    base: 'tw:w-full tw:hidden',
    variants: {
      isActive: { true: 'tw:relative tw:block tw:animate-pulse tw:z-10' },
      wasActive: { true: 'tw:block tw:absolute' },
    },
  });

  const classes = twMerge(
    linkCarouselItem({ isActive: context?.activeId === id, wasActive: context?.previousActiveId === id }),
    className,
  );

  return <div className={`uofg-link-carousel-item ${classes}`}>{children}</div>;
}
