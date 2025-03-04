import { twMerge } from 'tailwind-merge';
import { Container } from '../container/container';
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const defaultElement = 'img';

type ImageOverlayElementType = ElementType<
  { src: string; alt: string; height?: number; width?: number; className?: string },
  'img'
>;

type ImageOverlayPropsAs<T extends ImageOverlayElementType> = {
  as?: T;
};

type ImageOverlayPropsBase = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  alignment: 'top' | 'center' | 'bottom';
  overlay: 'dark' | 'light' | 'none';
  blurred: boolean;
};

export type ImageOverlayProps<T extends ImageOverlayElementType = typeof defaultElement> = PropsWithChildren<
  ImageOverlayPropsAs<T> & ComponentPropsWithoutRef<T> & ImageOverlayPropsBase
>;

export function ImageOverlay<T extends ImageOverlayElementType = typeof defaultElement>({
  as,
  src,
  width,
  height,
  alt,
  children,
  className,
  alignment = 'center',
  overlay = 'none',
  blurred = false,
  ...rest
}: ImageOverlayProps<T>) {
  const Image = as ?? defaultElement;

  const imageOverlay = tv({
    slots: {
      base: 'tw:min-h-[50rem] tw:relative tw:flex tw:h-fit tw:w-full tw:flex-col',
      imageWrapper: 'tw:absolute tw:z-10 tw:h-full tw:w-full',
      image: 'tw:h-full tw:w-full tw:object-cover',
      overlay: 'tw:absolute tw:top-0 tw:left-0 tw:h-full tw:w-full',
      container: 'tw:relative tw:z-20 tw:flex tw:flex-1 tw:flex-col tw:py-20',
    },
    variants: {
      blurred: {
        true: {
          image: 'tw:blur-sm',
        },
      },
      overlay: {
        dark: {
          overlay: 'tw:bg-black/60',
        },
        light: {
          overlay: 'tw:bg-white/60',
        },
        none: {
          overlay: 'tw:hidden',
        },
      },
      alignment: {
        top: {
          container: 'tw:items-center tw:justify-start',
        },
        center: {
          container: 'tw:items-center tw:justify-center',
        },
        bottom: {
          container: 'tw:items-center tw:justify-end',
        },
      },
    },
  });

  const {
    base,
    imageWrapper,
    image,
    overlay: overlayClasses,
    container,
  } = imageOverlay({ blurred, overlay, alignment });

  return (
    <div className={base()}>
      <div className={imageWrapper()}>
        <Image
          {...rest}
          className={twMerge(image(), className)}
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes="100vw"
        />

        {(overlay === 'dark' || overlay === 'light') && <div className={overlayClasses()}></div>}
      </div>

      <Container centered className={container()}>
        {children}
      </Container>
    </div>
  );
}

ImageOverlay.displayName = 'ImageOverlay';
