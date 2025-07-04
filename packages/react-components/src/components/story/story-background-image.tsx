import { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultElement = 'img';

type StoryBackgroundImageElementType = ElementType;

export type StoryBackgroundImageProps<T extends StoryBackgroundImageElementType = typeof defaultElement> = {
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

export function StoryBackgroundImage<T extends StoryBackgroundImageElementType = typeof defaultElement>({
  as,
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: StoryBackgroundImageProps<T>) {
  const Component = as ?? defaultElement;

  const classes = twMerge('h-full w-full brightness-50', className);

  return (
    <Component
      {...rest}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`uofg-story-background-image ${classes}`}
    />
  );
}

StoryBackgroundImage.displayName = 'StoryBackgroundImage';
