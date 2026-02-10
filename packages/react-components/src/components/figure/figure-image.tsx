import { ComponentPropsWithoutRef, ElementType, PropsWithChildren, useEffect, useRef } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

const defaultElement = 'img';

type FigureImageElementType = ElementType;

export type FigureImageProps<T extends FigureImageElementType = typeof defaultElement> = PropsWithChildren<
  {
    /**
     * The element type to render the figure image as
     *
     * @default 'img'
     */
    as?: T;
    /** The URL of the image to display */
    src: string;
    /** The alt text for the image */
    alt: string;
    /** The width of the image in pixels */
    width?: `${number}` | number;
    /** The height of the image in pixels */
    height?: `${number}` | number;
    /** Additional classes to apply to the component */
    className?: string;
  } & ComponentPropsWithoutRef<T>
>;

export function FigureImage<T extends FigureImageElementType = typeof defaultElement>({
  as,
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: FigureImageProps<T>) {
  const Component = as ?? defaultElement;
  const classes = twJoin('');

  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ref.current === null) return;

    let parent = ref.current.parentElement;

    while (parent !== null && parent.tagName !== 'FIGURE') {
      parent = parent.parentElement;
    }

    if (parent === null) return;

    parent.style.setProperty('--uofg-figure-image-width', `${width}px`);
  }, [width, height]);

  return (
    <Component
      {...rest}
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={twMerge('uofg-figure-image', classes, className)}
    />
  );
}
