import { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'img';

type StatisticsItemImageElementType = ElementType<{ src: string; alt: string; width?: string; height?: string }, 'img'>;

export type StatisticsItemImageProps<T extends StatisticsItemImageElementType = typeof defaultElement> = {
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
  /** Additional classes to apply to the image */
  className?: string;
} & ComponentPropsWithoutRef<T>;

export function StatisticsItemImage<T extends StatisticsItemImageElementType = typeof defaultElement>({
  as,
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: StatisticsItemImageProps<T>) {
  const Component = as ?? defaultElement;
  const classes = tv({
    slots: {
      base: 'uog:contents',
      image: 'uog:w-full',
    },
  });

  const { base, image } = classes();

  return (
    <dd className={base()}>
      <Component
        {...rest}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`uofg-statistics-item-image ${twMerge(image(), className)}`}
      />
    </dd>
  );
}
