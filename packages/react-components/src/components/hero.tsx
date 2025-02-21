import { Button } from './button';
import { Heading } from './heading';
import { Container } from './container';
import { EmbeddedVideo } from './embedded-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { ComponentPropsWithoutRef, ElementType } from 'react';
import { tv } from 'tailwind-variants';

const defaultElement = 'img';

type HeroElementType = ElementType<
  { src: string; alt: string; height?: number; width?: number; className?: string },
  'img'
>;

type HeroPropsAs<T extends HeroElementType> = {
  as?: T;
};

type HeroPropsBase = {
  variant: 'spotlight' | 'basic';
  src: string;
  alt: string;
  width?: number;
  height?: number;
  title: string;
  caption?: string;
  alignment?: 'left' | 'center' | 'right' | 'fullWidth';
  video?: {
    src: string;
    title: string;
    transcript?: string;
  };
  link?: {
    href: string;
    text: string;
  };
};

export type HeroProps<T extends HeroElementType = typeof defaultElement> = HeroPropsAs<T> &
  ComponentPropsWithoutRef<T> &
  HeroPropsBase;

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

export function Hero<T extends HeroElementType = typeof defaultElement>({
  as,
  variant = 'basic',
  src,
  alt,
  width,
  height,
  title,
  caption,
  alignment = 'left',
  video,
  link,
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

      {variant === 'spotlight' && (
        <SpotlightHero title={title} caption={caption} alignment={alignment} video={video} link={link} />
      )}
      {variant === 'basic' && <BasicHero title={title} video={video} />}
    </div>
  );
}

Hero.displayName = 'Hero';
