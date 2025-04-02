import { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'img';

type StoryForegroundImageElementType = ElementType<
  { src: string; alt: string; width?: string; height?: string },
  'img'
>;

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
      base: 'uofg-story-foreground-image-container uog:flex uog:w-full uog:justify-center uog:lg:mt-auto uog:lg:w-1/2',
      image: 'uofg-story-foreground-image uog:w-full uog:h-full',
    },
  });

  const { base, image } = classes();

  return (
    <div className={base()}>
      <Component {...rest} src={src} alt={alt} width={width} height={height} className={twMerge(image(), className)} />
    </div>
  );
}
