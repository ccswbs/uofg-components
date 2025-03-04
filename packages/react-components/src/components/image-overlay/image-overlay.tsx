import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'img';

type ImageOverlayElementType = ElementType<
  { src: string; alt: string; height?: number; width?: number; className?: string },
  'img'
>;

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
      base: 'tw:min-h-[50rem] tw:relative tw:flex tw:h-fit tw:w-full tw:flex-col',
      imageWrapper: 'tw:absolute tw:z-10 tw:h-full tw:w-full',
      image: 'tw:h-full tw:w-full tw:object-cover',
      overlay: 'tw:absolute tw:top-0 tw:left-0 tw:h-full tw:w-full',
      container: 'tw:relative tw:z-20 tw:flex tw:flex-1 tw:flex-col tw:p-0',
    },
    variants: {
      blurred: {
        true: {
          image: 'tw:blur-sm',
        },
      },
      overlay: {
        'dark': {
          overlay: 'tw:bg-black/60',
        },
        'light': {
          overlay: 'tw:bg-white/60',
        },
        'dark-gradient': {
          overlay: 'tw:from-black/50 tw:via-30% tw:via-black/20 tw:to-transparent',
        },
        'light-gradient': {
          overlay: 'tw:from-white/50 tw:via-30% tw:via-white/20 tw:to-transparent',
        },
        'none': {
          overlay: 'tw:hidden',
        },
      },
      verticalAlignment: {
        top: {
          container: 'tw:justify-start',
        },
        center: {
          container: 'tw:justify-center',
        },
        bottom: {
          container: 'tw:justify-end',
        },
      },
      horizontalAlignment: {
        left: {
          container: 'tw:items-start',
        },
        center: {
          container: 'tw:items-center',
        },
        right: {
          container: 'tw:items-end',
        },
      },
    },
    compoundVariants: [
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'bottom',
        horizontalAlignment: ['left', 'center', 'right'],
        class: {
          overlay: 'tw:bg-gradient-to-t',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'top',
        horizontalAlignment: ['left', 'center', 'right'],
        class: {
          overlay: 'tw:bg-gradient-to-b',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'center',
        horizontalAlignment: 'center',
        class: {
          overlay: 'tw:bg-radial',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'center',
        horizontalAlignment: 'left',
        class: {
          overlay: 'tw:bg-gradient-to-r',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'center',
        horizontalAlignment: 'right',
        class: {
          overlay: 'tw:bg-gradient-to-l',
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

        {overlay !== 'none' && <div className={overlayClasses()}></div>}
      </div>

      <div className={container()}>{children}</div>
    </div>
  );
}

ImageOverlay.displayName = 'ImageOverlay';
