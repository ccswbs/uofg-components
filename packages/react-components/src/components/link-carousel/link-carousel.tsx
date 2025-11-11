'use client';

import { Children, isValidElement, PropsWithChildren, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { LinkCarouselContext, LinkCarouselId } from './link-carousel-context';
import { LinkCarouselLink } from './link-carousel-link';

function findFirstId(children: React.ReactNode): LinkCarouselId | null {
  let firstId: LinkCarouselId | null = null;

  function searchChildren(nodes: React.ReactNode) {
    Children.forEach(nodes, child => {
      if (firstId) return;

      const isElement = isValidElement(child);
      const isLink = isElement && child.type === LinkCarouselLink;

      if (isLink) {
        // @ts-expect-error figure out how to type this
        firstId = child.props.id;
        // @ts-expect-error figure out how to type this
      } else if (isElement && child.props.children) {
        // @ts-expect-error figure out how to type this
        searchChildren(child.props.children);
      }
    });
  }

  searchChildren(children);
  return firstId;
}

export type LinkCarouselProps = PropsWithChildren<{
  id?: string;
  /** Additional classes to apply to the link carousel. */
  className?: string;
  /** Whether the carousel links should stack on top of the content, rather than beside it. */
  stack?: boolean;
  /**
   * The side of the carousel that the links should be displayed on.
   *
   * @default 'left'
   */
  direction?: 'left' | 'right';
}>;

/**
 * The LinkCarousel component is used to display a column of links that change the content that is displayed once the
 * user hovers on a link. The content must have a defined height otherwise the component will not work as expected.
 * Content should be limited to purely decoration, as the link carousel does not display its content on mobile devices,
 * and is not focus friendly. If your content doesn't match this criteria, use the Carousel component instead, or find
 * another way to display your content.
 */
export function LinkCarousel({ id, children, className, stack = false, direction = 'left' }: LinkCarouselProps) {
  const firstId = useMemo(() => findFirstId(children), [children]);
  const [activeId, setActiveId] = useState<LinkCarouselId | null>(firstId);
  const previousActiveId = useRef<LinkCarouselId | null>(null);

  const updateActiveId = (id: LinkCarouselId) => {
    setActiveId(previous => {
      previousActiveId.current = previous;
      return id;
    });
  };

  const linkCarousel = tv({
    base: 'relative flex h-fit w-full overflow-hidden',
    variants: {
      direction: {
        left: 'flex-row',
        right: 'flex-row-reverse',
      },
    },
  });

  return (
    <div id={id} className={`uofg-link-carousel ${twMerge(linkCarousel({ direction }), className)}`}>
      <LinkCarouselContext.Provider
        value={{
          previousActiveId: previousActiveId.current,
          activeId,
          setActiveId: updateActiveId,
          stack: stack ?? false,
          direction,
          clearPreviousActiveId: () => {
            previousActiveId.current = null;
          },
        }}
      >
        {children}
      </LinkCarouselContext.Provider>
    </div>
  );
}

LinkCarousel.displayName = 'LinkCarousel';

export { LinkCarouselContent } from './link-carousel-content';
export { LinkCarouselItem } from './link-carousel-item';
export { LinkCarouselLink } from './link-carousel-link';
export { LinkCarouselLinks } from './link-carousel-links';
