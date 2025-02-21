import { ComponentPropsWithoutRef, ElementType, ReactNode, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultImageElement = 'img';

type LinkCarouselImageElementType = ElementType<
  { src: string; alt: string; height?: number; width?: number; className?: string },
  'img'
>;

const defaultLinkElement = 'a';

type LinkCarouselLinkElementType = ElementType<{ href?: string }, 'a'>;

type LinkCarouselPropImageAs<T extends LinkCarouselImageElementType> = {
  imageAs?: T;
};

type LinkCarouselPropLinkAs<T extends ElementType> = {
  linkAs?: T;
};

export type LinkCarouselProps<
  I extends LinkCarouselImageElementType = typeof defaultImageElement,
  L extends LinkCarouselLinkElementType = typeof defaultLinkElement,
> = LinkCarouselPropImageAs<I> &
  LinkCarouselPropLinkAs<L> & {
    links: {
      url: string;
      title: string;
      caption?: ReactNode;
      image: {
        src: string;
        height?: number;
        width?: number;
        alt: string;
        className?: string;
        props?: ComponentPropsWithoutRef<I>;
      };
      props?: ComponentPropsWithoutRef<L>;
    }[];
  };

export function LinkCarousel<
  I extends LinkCarouselImageElementType = typeof defaultImageElement,
  L extends LinkCarouselLinkElementType = typeof defaultLinkElement,
>({ imageAs, linkAs, links }: LinkCarouselProps<I, L>) {
  const Image = imageAs ?? defaultImageElement;
  const Link = linkAs ?? defaultLinkElement;

  type LinkType = (typeof links)[0];

  const [activeLink, setActiveLink] = useState(links[0]);
  const previousActiveLink = useRef<LinkType>(null);

  const updateActiveLink = (link: LinkType) => {
    setActiveLink(previous => {
      previousActiveLink.current = previous;
      return link;
    });
  };

  const linkCarousel = tv({
    slots: {
      base: 'tw:relative tw:w-full',
      imageWrapper: 'tw:absolute tw:top-0 tw:left-0 tw:z-0 tw:h-full tw:w-full',
      image: 'tw:absolute tw:top-0 tw:left-0 tw:hidden tw:h-full tw:w-full tw:object-cover tw:object-left',
      caption:
        'tw:md:block tw:absolute tw:bottom-0 tw:left-0 tw:z-10 tw:hidden tw:w-full tw:px-4 tw:py-4 tw:text-white',
      gradient:
        'tw:md:block tw:absolute tw:bottom-0 tw:left-0 tw:z-0 tw:hidden tw:h-1/2 tw:w-full tw:bg-gradient-to-t tw:from-black/60 tw:to-black/0',
      linkContainer: 'tw:md:w-1/3 tw:relative tw:z-10 tw:ml-auto tw:flex tw:w-full tw:flex-col tw:gap-2',
      link: 'tw:backdrop-blur tw:flex tw:flex-1 tw:items-center tw:justify-between tw:bg-black/60 tw:p-7 tw:text-[2.2rem] tw:text-white tw:transition-colors tw:hover:bg-yellow tw:hover:text-black tw:focus:bg-yellow tw:focus:text-black tw:focus-visible:outline-none',
    },
  });

  const { base, imageWrapper, image, caption, gradient, linkContainer, link: linkClasses } = linkCarousel();

  return (
    <div className={base()}>
      <div className={imageWrapper()}>
        {links.map(link => (
          <Image
            {...link.image.props}
            key={link.url}
            className={twMerge(
              image(),
              link === activeLink && 'tw:animate-fade tw:md:block tw:z-10',
              link === previousActiveLink.current && 'tw:md:block tw:z-0',
              link.image?.className,
            )}
            src={link.image.src}
            width={link.image?.width}
            height={link.image?.height}
            alt={link.image.alt}
          />
        ))}
      </div>

      {activeLink?.caption && (
        <>
          <div className={caption()}>{activeLink.caption}</div>

          <div className={gradient()}></div>
        </>
      )}

      <div className={linkContainer()}>
        {links.map((link, index) => (
          <Link
            {...link.props}
            onMouseEnter={() => {
              updateActiveLink(link);
            }}
            onFocus={() => {
              updateActiveLink(link);
            }}
            key={index}
            href={link.url}
            className={linkClasses()}
          >
            {link.title}
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        ))}
      </div>
    </div>
  );
}

LinkCarousel.displayName = 'LinkCarousel';
