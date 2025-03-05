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
    base: 'tw:w-full tw:hidden tw:bg-white',
    variants: {
      isActive: { true: 'tw:block tw:relative tw:animate-fade-in tw:z-10' },
      wasActive: { true: 'tw:block tw:absolute tw:z-0 tw:top-0 tw:left-0' },
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
