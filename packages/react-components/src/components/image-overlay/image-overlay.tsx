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
      base: 'uog:min-h-[50rem] uog:relative uog:flex uog:h-fit uog:w-full uog:flex-col',
      imageWrapper: 'uog:absolute uog:z-10 uog:h-full uog:w-full',
      image: 'uog:h-full uog:w-full uog:object-cover',
      overlay: 'uog:absolute uog:top-0 uog:left-0 uog:h-full uog:w-full',
      container: 'uog:relative uog:z-20 uog:flex uog:flex-1 uog:flex-col uog:p-0',
    },
    variants: {
      blurred: {
        true: {
          image: 'uog:blur-sm',
        },
      },
      overlay: {
        'dark': {
          overlay: 'uog:bg-black/60',
        },
        'light': {
          overlay: 'uog:bg-white/60',
        },
        'dark-gradient': {
          overlay: 'uog:from-black/50 uog:via-30% uog:via-black/20 uog:to-transparent',
        },
        'light-gradient': {
          overlay: 'uog:from-white/50 uog:via-30% uog:via-white/20 uog:to-transparent',
        },
        'none': {
          overlay: 'uog:hidden',
        },
      },
      verticalAlignment: {
        top: {
          container: 'uog:justify-start',
        },
        center: {
          container: 'uog:justify-center',
        },
        bottom: {
          container: 'uog:justify-end',
        },
      },
      horizontalAlignment: {
        left: {
          container: 'uog:items-start',
        },
        center: {
          container: 'uog:items-center',
        },
        right: {
          container: 'uog:items-end',
        },
      },
    },
    compoundVariants: [
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'bottom',
        horizontalAlignment: ['left', 'center', 'right'],
        class: {
          overlay: 'uog:bg-gradient-to-t',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'top',
        horizontalAlignment: ['left', 'center', 'right'],
        class: {
          overlay: 'uog:bg-gradient-to-b',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'center',
        horizontalAlignment: 'center',
        class: {
          overlay: 'uog:bg-radial',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'center',
        horizontalAlignment: 'left',
        class: {
          overlay: 'uog:bg-gradient-to-r',
        },
      },
      {
        overlay: ['dark-gradient', 'light-gradient'],
        verticalAlignment: 'center',
        horizontalAlignment: 'right',
        class: {
          overlay: 'uog:bg-gradient-to-l',
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
