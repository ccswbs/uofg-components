import { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'img';

type StoryForegroundImageElementType = ElementType;

export type StoryForegroundImageProps<T extends StoryForegroundImageElementType = typeof defaultElement> = {
  /**
   * The element to render the image as
   *
   * @default 'img'
   */
  as?: T;
  /** The source URL of the image */
  src: string;
  /** An accessible description of the image, used primarily for screen readers */
  alt: string;
  /** The width of the image in pixels */
  width?: string;
  /** The height of the image in pixels */
  height?: string;
  /** Additional classes to apply to the component. */
  className?: string;
} & ComponentPropsWithoutRef<T>;

export function StoryForegroundImage<T extends StoryForegroundImageElementType = typeof defaultElement>({
  as,
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: StoryForegroundImageProps<T>) {
  const Component = as ?? defaultElement;

  const classes = tv({
    slots: {
      base: 'flex w-full justify-center lg:mt-auto lg:w-1/2',
      image: 'h-full w-full',
    },
  });

  const { base, image } = classes();

  return (
    <div className={`uofg-story-foreground-image-container ${base()}`}>
      <Component
        {...rest}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`uofg-story-foreground-image ${twMerge(image(), className)}`}
      />
    </div>
  );
}

StoryForegroundImage.displayName = 'StoryForegroundImage';
