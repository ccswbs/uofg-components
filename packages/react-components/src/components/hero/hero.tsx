import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';
import { HeroCaption } from './hero-caption';
import { HeroContent } from './hero-content';
import { HeroContext } from './hero-context';
import { HeroLink } from './hero-link';
import { HeroTitle } from './hero-title';
import { HeroVideo } from './hero-video';

const defaultElement = 'img';

type HeroElementType = ElementType<
  { src: string; alt: string; height?: number; width?: number; className?: string },
  'img'
>;

export type HeroProps<T extends HeroElementType = typeof defaultElement> = PropsWithChildren<
  {
    /**
     * The element type to render the hero image as
     *
     * @default 'img'
     */
    as?: T;
    /**
     * The variant of the hero
     *
     * @default 'basic'
     */
    variant: 'spotlight' | 'basic';
    /** The URL of the image to display */
    src: string;
    /** The alt text for the image */
    alt: string;
    /** The width of the image in pixels */
    width?: number;
    /** The height of the image in pixels */
    height?: number;
    /**
     * The alignment of the hero content, only applies to the spotlight variant
     *
     * @default 'left'
     */
    alignment?: 'left' | 'center' | 'right' | 'fullWidth';
  } & ComponentPropsWithoutRef<T>
>;

/** The Hero component is a layout component that displays a large image with accompanying content. */
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

export { HeroCaption, HeroContent, HeroLink, HeroTitle, HeroVideo };
