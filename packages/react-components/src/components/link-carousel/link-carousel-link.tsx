'use client';

import { faChevronRight } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ElementType, PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { LinkCarouselContext, LinkCarouselId } from './link-carousel-context';

const defaultElement = 'a';

export type LinkCarouselLinkElementType = ElementType;

export type LinkCarouselLinkProps<T extends LinkCarouselLinkElementType = typeof defaultElement> = PropsWithChildren<{
  /**
   * The element-type to render as.
   *
   * @default 'a'
   */
  as?: T;
  /** The id of the link, this is used to determine which carousel item is controlled by this link. */
  id: LinkCarouselId;
  /** The URL this links to. */
  href: string;
  /** Additional classes to apply to the link. */
  className?: string;
}>;

export function LinkCarouselLink<T extends LinkCarouselLinkElementType = typeof defaultElement>({
  as,
  id,
  children,
  className,
  href,
  ...rest
}: LinkCarouselLinkProps<T>) {
  const Component = as ?? defaultElement;
  const context = useContext(LinkCarouselContext);

  const linkCarouselLink = tv({
    base: 'flex w-full flex-1 items-center justify-between bg-black p-6 text-2xl text-black-contrast transition-colors hocus:bg-yellow hocus:text-black',
    variants: {
      stack: {
        true: 'md:bg-black/70',
      },
    },
  });

  return (
    <Component
      {...rest}
      href={href}
      className={`uofg-link-carousel-link ${twMerge(linkCarouselLink({ stack: context?.stack }), className)}`}
      onMouseEnter={() => {
        context?.setActiveId(id);
      }}
      onFocus={() => {
        context?.setActiveId(id);
      }}
    >
      {children}
      <FontAwesomeIcon icon={faChevronRight} />
    </Component>
  );
}

LinkCarouselLink.displayName = 'LinkCarouselLink';
