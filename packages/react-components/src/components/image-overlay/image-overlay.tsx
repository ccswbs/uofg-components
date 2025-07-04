import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'img';

type ImageOverlayElementType = ElementType;

export type ImageOverlayProps<T extends ImageOverlayElementType = typeof defaultElement> = PropsWithChildren<
  {
    /**
     * The element type to render as.
     *
     * @default 'img'
     */
    as?: T;
    /** The image source. */
    src: string;
    /** The image alt text. */
    alt: string;
    /** The image width in pixels. */
    width?: number;
    /** The image height in pixels. */
    height?: number;
    /** Additional classes to apply to the image. */
    className?: string;
    /**
     * The vertical alignment of the content in the overlay.
     *
     * @default 'center'
     */
    verticalAlignment: 'top' | 'center' | 'bottom';
    /**
     * The horizontal alignment of the content in the overlay.
     *
     * @default 'center'
     */
    horizontalAlignment: 'left' | 'center' | 'right';
    /**
     * A color overlay to apply to the image.
     *
     * @default 'none'
     */
    overlay: 'dark' | 'light' | 'dark-gradient' | 'light-gradient' | 'none';
    /**
     * Whether the image should be blurred.
     *
     * @default false
     */
    blurred: boolean;
  } & ComponentPropsWithoutRef<T>
>;

/** A component to display content over an image. */
export function ImageOverlay<T extends ImageOverlayElementType = typeof defaultElement>({
  as,
  src,
  width,
  height,
  alt,
  children,
  className,
  verticalAlignment = 'center',
  horizontalAlignment = 'center',
  overlay = 'none',
  blurred = false,
  ...rest
}: ImageOverlayProps<T>) {
  const Image = as ?? defaultElement;

  const imageOverlay = tv({
    slots: {
      base: 'relative flex h-fit min-h-[50rem] w-full flex-col',
      imageWrapper: 'absolute z-10 h-full w-full',
      image: 'h-full w-full object-cover',
      overlay: 'absolute top-0 left-0 h-full w-full',
      container: 'relative z-20 flex flex-1 flex-col p-0',
    },
    variants: {
      blurred: {
        true: {
          image: 'blur-sm',
        },
      },
      overlay: {
        'dark': {
          base: 'dark',
          overlay: 'bg-black/60',
        },
        'light': {
          overlay: 'bg-white/60',
        },
        'dark-gradient': {
          base: 'dark',
          overlay: 'from-black/50 via-black/20 via-30% to-transparent',
        },
        'light-gradient': {
          overlay: 'from-white/50 via-white/20 via-30% to-transparent',
        },
        'none': {
          overlay: 'hidden',
        },
      },
      verticalAlignment: {
        top: {
          container: 'justify-start',
        },
        center: {
          container: 'justify-center',
        },
        bottom: {
          container: 'justify-end',
        },
      },
      horizontalAlignment: {
        left: {
          container: 'items-start',
        },
        center: {
          container: 'items-center',
        },
        right: {
          container: 'items-end',
        },
      },
    },
    compoundVariants: [
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'bottom',
        horizontalAlignment: ['left', 'center', 'right'],
        class: {
          overlay: 'bg-gradient-to-t',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'top',
        horizontalAlignment: ['left', 'center', 'right'],
        class: {
          overlay: 'bg-gradient-to-b',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'center',
        horizontalAlignment: 'center',
        class: {
          overlay: 'bg-radial',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'center',
        horizontalAlignment: 'left',
        class: {
          overlay: 'bg-gradient-to-r',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'center',
        horizontalAlignment: 'right',
        class: {
          overlay: 'bg-gradient-to-l',
        },
      },
    ],
  });

  const {
    base,
    imageWrapper,
    image,
    overlay: overlayClasses,
    container,
  } = imageOverlay({ blurred, overlay, verticalAlignment, horizontalAlignment });

  return (
    <div className={`uofg-image-overlay ${base()}`}>
      <div className={`uofg-image-overlay-wrapper ${imageWrapper()}`}>
        <Image
          {...rest}
          className={`uofg-image-overlay-image ${twMerge(image(), className)}`}
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes="100vw"
        />

        {overlay !== 'none' && <div className={`uofg-image-overlay-overlay ${overlayClasses()}`}></div>}
      </div>

      <div className={`uofg-image-overlay-content ${container()}`}>{children}</div>
    </div>
  );
}

ImageOverlay.displayName = 'ImageOverlay';
