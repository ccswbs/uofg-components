import { ElementType, PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { LinkCarouselContext, LinkCarouselId } from './link-carousel-context';

const defaultElement = 'a';

export type LinkCarouselLinkElementType = ElementType<{ href?: string }, 'a'>;

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
    base: 'tw:w-full tw:flex-1 tw:text-xl tw:bg-black tw:flex tw:items-center tw:justify-center tw:text-black-contrast tw:p-6',
    variants: {
      stack: {
        true: 'tw:md:bg-black/70',
      },
    },
  });

  return (
    <Component
      {...rest}
      href={href}
      className={twMerge(linkCarouselLink({ stack: context?.stack }), className)}
      onMouseEnter={() => {
        context?.setActiveId(id);
      }}
    >
      {children}
    </Component>
  );
}

LinkCarouselLink.displayName = 'LinkCarouselLink';
