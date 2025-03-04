import { Button } from './button';
import { Container } from './container';
import { EmbeddedVideo, EmbeddedVideoModalButton } from './embedded-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { ComponentPropsWithoutRef, createContext, ElementType, PropsWithChildren, use, useContext } from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

/*
function SpotlightHero({
  title,
  caption,
  alignment,
  link,
  video,
}: Pick<HeroProps, 'title' | 'caption' | 'alignment' | 'link' | 'video'>) {
  const spotlightHero = tv({
    slots: {
      main: 'tw:lg:container tw:lg:absolute tw:lg:bottom-0 tw:lg:left-1/2 tw:lg:max-w-max-content tw:lg:-translate-x-1/2 tw:lg:p-4 tw:flex tw:items-center',
      wrapper: 'tw:lg:bg-black/80 tw:lg:backdrop-blur tw:flex tw:w-full tw:bg-black tw:p-7 tw:text-white',
      container: 'tw:container tw:mx-auto tw:flex tw:flex-col tw:gap-5',
      title: 'tw:font-serif tw:font-bold tw:text-3xl',
      caption: 'tw:text-xl',
      link: 'tw:w-fit tw:p-3 tw:text-lg tw:hocus-visible:bg-red tw:hocus-visible:text-white',
      modalVideo: 'tw:w-fit tw:gap-2 tw:p-3',
    },
    variants: {
      alignment: {
        left: {
          wrapper: 'tw:mr-auto tw:lg:max-w-[50%]',
        },
        center: {
          wrapper: 'tw:mx-auto tw:lg:max-w-[50%]',
          container: 'tw:lg:text-center',
          link: 'tw:lg:mx-auto',
        },
        right: {
          wrapper: 'tw:ml-auto tw:lg:max-w-[50%]',
          container: 'tw:lg:text-right',
          link: 'tw:lg:ml-auto',
        },
        fullWidth: {
          wrapper: 'tw:mx-auto',
        },
      },
    },
  });

  const {
    main,
    wrapper,
    container,
    title: titleClasses,
    caption: captionClasses,
    link: linkClasses,
    modalVideo,
  } = spotlightHero({ alignment });

  return (
    <div className={main()}>
      <div className={wrapper()}>
        <div className={container()}>
          <h2 className={titleClasses()}>{title}</h2>

          {caption && <span className={captionClasses()}>{caption}</span>}
          {link && (
            <Button as="a" color="yellow" href={link?.href} className={linkClasses()}>
              {link?.text}
            </Button>
          )}
          {video && (
            <EmbeddedVideo
              src={video.src}
              title={video.title}
              transcript={video.transcript}
              modal={{
                button: (
                  <>
                    <FontAwesomeIcon icon={faPlay} />
                    <span>Watch Video</span>
                  </>
                ),
                type: 'yellow',
                className: modalVideo(),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function BasicHero({ title, video }: Pick<HeroProps, 'title' | 'video'>) {
  const basicHero = tv({
    slots: {
      base: 'tw:absolute tw:bottom-0 tw:left-1/2 tw:h-fit tw:w-full tw:-translate-x-1/2 tw:p-0',
      heading: 'tw:md:text-4xl tw:mb-0 tw:w-fit tw:bg-yellow tw:p-1 tw:text-3xl tw:text-black',
      videoModal: 'tw:absolute tw:top-1/2 tw:left-1/2 tw:-translate-x-1/2 tw:-translate-y-1/2',
    },
  });

  const { base, heading, videoModal } = basicHero();

  return (
    <>
      <Container centered className={base()}>
        <Heading level={1} className={heading()}>
          {title}
        </Heading>
      </Container>

      {video && (
        <EmbeddedVideo
          src={video.src}
          title={video.title}
          transcript={video.transcript}
          modal={{ type: 'play-button', className: videoModal() }}
        />
      )}
    </>
  );
}
*/

export type HeroContextType = {
  variant: 'spotlight' | 'basic';
};
const HeroContext = createContext<HeroContextType | null>(null);

export type HeroTitleElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
export type HeroTitleProps<T extends HeroTitleElementType = 'h1'> = PropsWithChildren<{
  as?: T;
  className?: string;
}>;
export function HeroTitle<T extends HeroTitleElementType = 'h1'>({
  as,
  children,
  className,
  ...rest
}: HeroTitleProps<T>) {
  const context = useContext(HeroContext);
  const Component = as ?? 'h1';

  const heroTitle = tv({
    base: 'tw:font-serif tw:font-bold tw:text-3xl tw:w-fit',
    variants: {
      variant: {
        spotlight: 'tw:text-white',
        basic: 'tw:bg-yellow tw:md:text-4xl tw:text-yellow-contrast tw:p-1',
      },
    },
  });

  const classes = `uofg-hero-title ${twMerge(heroTitle({ variant: context?.variant }), className)}`;

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
}
HeroTitle.displayName = 'HeroTitle';

export type HeroCaptionProps = PropsWithChildren<{
  className?: string;
}>;
export function HeroCaption({ children, className }: HeroCaptionProps) {
  return <p className={`uofg-hero-caption tw:text-xl ${className}`}>{children}</p>;
}

export type HeroLinkElementType = ElementType<{ href?: string }, 'a'>;
export type HeroLinkProps<T extends HeroLinkElementType = 'a'> = PropsWithChildren<{
  as?: T;
  href: string;
  className?: string;
}>;
export function HeroLink<T extends HeroLinkElementType = 'a'>({
  as,
  href,
  children,
  className,
  ...rest
}: HeroLinkProps<T>) {
  const Component = as ?? 'a';

  return (
    <Button
      {...rest}
      as={Component}
      color="yellow"
      href={href}
      className={`uofg-hero-link ${twMerge('tw:p-3 tw:w-fit', className)}`}
    >
      {children}
    </Button>
  );
}

export type HeroVideo = PropsWithChildren<{
  src: string;
  title: string;
  transcript?: string;
  className?: string;
}>;
export function HeroVideo({ src, title, transcript, children }: HeroVideo) {
  const context = useContext(HeroContext);
  const heroVideo = tv({
    base: '',
    variants: {
      variant: {
        basic: 'tw:absolute tw:top-1/2 tw:left-1/2 tw:-translate-x-1/2 tw:-translate-y-1/2',
        spotlight: 'tw:w-fit tw:gap-2 tw:p-3',
      },
    },
  });

  const classes = `uofg-hero-video ${heroVideo({ variant: context?.variant })}`;

  if (context?.variant === 'spotlight') {
    return (
      <EmbeddedVideo src={src} title={title} transcript={transcript}>
        <EmbeddedVideoModalButton type="yellow" className={classes}>
          <FontAwesomeIcon icon={faPlay} />
          <span>{children}</span>
        </EmbeddedVideoModalButton>
      </EmbeddedVideo>
    );
  }

  return (
    <EmbeddedVideo src={src} title={title} transcript={transcript}>
      <EmbeddedVideoModalButton type="play-button" className={classes} />
    </EmbeddedVideo>
  );
}
HeroVideo.displayName = 'HeroVideo';

export type HeroContentProps = PropsWithChildren<{
  alignment?: HeroProps['alignment'];
}>;
function HeroContent({ children, alignment = 'left' }: HeroContentProps) {
  const context = useContext(HeroContext);

  const heroContent = tv({
    slots: {
      base: '',
      wrapper: 'tw:lg:bg-black/80 tw:lg:backdrop-blur tw:flex tw:w-full tw:bg-black tw:p-7 tw:text-white',
      container: 'tw:container tw:mx-auto tw:flex tw:flex-col tw:gap-5',
    },
    variants: {
      variant: {
        spotlight: {
          base: 'tw:lg:container tw:lg:absolute tw:lg:bottom-0 tw:lg:left-1/2 tw:lg:max-w-max-content tw:lg:-translate-x-1/2 tw:lg:p-4 tw:flex tw:items-center',
        },
        basic: {
          base: 'tw:absolute tw:bottom-0 tw:left-1/2 tw:w-full tw:-translate-x-1/2 tw:p-0 tw:flex tw:h-full tw:items-end',
        },
      },
      alignment: {
        left: {
          wrapper: 'tw:mr-auto tw:lg:max-w-[50%]',
        },
        center: {
          wrapper: 'tw:mx-auto tw:lg:max-w-[50%]',
          container: 'tw:lg:text-center tw:lg:items-center',
          link: 'tw:lg:mx-auto',
        },
        right: {
          wrapper: 'tw:ml-auto tw:lg:max-w-[50%]',
          container: 'tw:lg:text-right tw:lg:items-end',
          link: 'tw:lg:ml-auto',
        },
        fullWidth: {
          wrapper: 'tw:mx-auto',
        },
      },
    },
  });

  const { base, wrapper, container } = heroContent({ alignment, variant: context?.variant });

  if (context?.variant === 'spotlight') {
    return (
      <div className={`uofg-hero-content ${base()}`}>
        <div className={`uofg-hero-content-wrapper ${wrapper()}`}>
          <div className={`uofg-hero-content-container ${container()}`}>{children}</div>
        </div>
      </div>
    );
  }

  return (
    <Container centered className={`uofg-hero-content ${base()}`}>
      {children}
    </Container>
  );
}
HeroContent.displayName = 'HeroContent';

const defaultElement = 'img';
type HeroElementType = ElementType<
  { src: string; alt: string; height?: number; width?: number; className?: string },
  'img'
>;
export type HeroProps<T extends HeroElementType = typeof defaultElement> = PropsWithChildren<
  {
    as?: T;
    variant: 'spotlight' | 'basic';
    src: string;
    alt: string;
    width?: number;
    height?: number;
    alignment?: 'left' | 'center' | 'right' | 'fullWidth';
  } & ComponentPropsWithoutRef<T>
>;
export function Hero<T extends HeroElementType = typeof defaultElement>({
  as,
  variant = 'basic',
  src,
  alt,
  width,
  height,
  alignment,
  children,
  ...rest
}: HeroProps<T>) {
  const Image = as ?? defaultElement;

  const hero = tv({
    slots: {
      base: 'tw:relative tw:flex tw:w-full tw:flex-col tw:overflow-hidden',
      image: 'tw:aspect-[16/9] tw:w-full tw:object-cover tw:md:aspect-[2.625]',
    },
    variants: {
      variant: {
        basic: {
          base: 'tw:h-fit',
          image: 'tw:max-h-[calc(85vh-14rem)]',
        },
        spotlight: {
          base: '',
          image: 'tw:max-h-[80vh]',
        },
      },
    },
  });

  const { base, image } = hero({ variant });

  return (
    <div className={base()}>
      <Image {...rest} src={src} alt={alt} width={width} height={height} className={image()} />

      <HeroContext.Provider value={{ variant }}>
        <HeroContent alignment={alignment}>{children}</HeroContent>
      </HeroContext.Provider>
    </div>
  );
}
Hero.displayName = 'Hero';
