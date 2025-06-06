import { ComponentPropsWithoutRef, ElementType, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { CardContext } from './card-context';

const defaultCardImageElement = 'img';

type CardImageElementType = ElementType;

export type CardImageProps<T extends CardImageElementType = typeof defaultCardImageElement> = {
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

/** The CardImage component is used to display an image within a card. */
export function CardImage<T extends CardImageElementType = typeof defaultCardImageElement>({
  as,
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: CardImageProps<T>) {
  const Component = as ?? defaultCardImageElement;
  const context = useContext(CardContext);

  const cardImage = tv({
    slots: {
      container: 'uog:w-full uog:overflow-hidden',
      wrapper: 'uog:w-full uog:overflow-hidden',
      image: 'uog:w-full',
    },
    variants: {
      isLink: {
        true: {
          wrapper: 'uog:ease-in-out uog:transition-transform uog:duration-200 uog:group-hover:scale-110',
        },
      },
    },
  });

  const { container, wrapper, image } = cardImage({ isLink: context?.isLink ?? false });

  return (
    <div className={`uofg-card-image-container ${container()}`}>
      <div className={`uofg-card-image-wrapper ${wrapper()}`}>
        <Component
          {...rest}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`uofg-card-image ${twMerge(image(), className)}`}
        />
      </div>
    </div>
  );
}

CardImage.displayName = 'CardImage';
