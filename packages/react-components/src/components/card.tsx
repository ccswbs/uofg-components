import { twMerge } from 'tailwind-merge';
import {
  Children,
  ComponentPropsWithoutRef,
  createContext,
  ElementType,
  PropsWithChildren,
  ReactElement,
  useContext,
} from 'react';
import { tv } from 'tailwind-variants';

/* Card Context */
type CardContextValue = {
  isLink: boolean;
  centered: boolean;
};
const CardContext = createContext<CardContextValue | null>(null);

/* Card Image */
const defaultCardImageElement = 'img';
type CardImageElementType = ElementType<{ src: string; alt: string; width?: string; height?: string }, 'img'>;
export type CardImageProps<T extends CardImageElementType = typeof defaultCardImageElement> = {
  as?: T;
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
} & ComponentPropsWithoutRef<T>;
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
      container: 'tw:w-full tw:overflow-hidden',
      wrapper: 'tw:w-full tw:overflow-hidden',
      image: 'tw:w-full',
    },
    variants: {
      isLink: {
        true: {
          wrapper: 'tw:ease-in-out tw:transition-transform tw:duration-200 tw:group-hover:scale-110',
        },
      },
    },
  });

  const { container, wrapper, image } = cardImage({ isLink: context?.isLink ?? false });

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <Component
          {...rest}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={twMerge(image(), className)}
        />
      </div>
    </div>
  );
}
CardImage.displayName = 'CardImage';

/* Card Content */
type CardContentProps = PropsWithChildren<{ className?: string }>;
export function CardContent({ children, className }: CardContentProps) {
  const context = useContext(CardContext);

  const cardContent = tv({
    base: 'tw:flex tw:flex-col tw:gap-2 tw:bg-light-grey-bg tw:p-5 tw:text-light-grey-contrast',
    variants: {
      isLink: {
        true: 'tw:transition-colors tw:group-hocus-visible:bg-yellow tw:group-hocus-visible:text-yellow-contrast',
      },
    },
  });

  return <div className={twMerge(cardContent({ isLink: context?.isLink ?? false }), className)}>{children}</div>;
}
CardContent.displayName = 'CardContent';

/* Card Title */
type CardTitleProps = PropsWithChildren<{ className?: string }>;
export function CardTitle({ children, className }: CardTitleProps) {
  const context = useContext(CardContext);

  const cardTitle = tv({
    base: 'tw:flex tw:flex-1 tw:font-bold tw:text-lg',
    variants: {
      centered: {
        true: 'tw:items-center tw:justify-center',
      },
    },
  });

  return <div className={twMerge(cardTitle({ centered: context?.centered ?? false }), className)}>{children}</div>;
}
CardTitle.displayName = 'CardTitle';

/* Card Footer */
type CardFooterProps = PropsWithChildren<{ className?: string }>;
export function CardFooter({ children, className }: CardFooterProps) {
  const context = useContext(CardContext);

  const cardFooter = tv({
    base: 'tw:flex tw:gap-2 tw:bg-light-grey tw:px-5 tw:py-2 tw:text-light-grey-contrast tw:transition-colors',
    variants: {
      centered: {
        true: 'tw:justify-center',
      },
    },
  });

  return <div className={twMerge(cardFooter({ centered: context?.centered ?? false }), className)}>{children}</div>;
}
CardFooter.displayName = 'CardFooter';

/* Card */
const defaultElement = 'div';
type CardElementType = ElementType<{ href?: string }, 'a'> | 'div' | 'article';
export type CardProps<T extends CardElementType = typeof defaultElement> = PropsWithChildren<
  {
    as?: T;
    className?: string;
    centered?: boolean;
  } & ComponentPropsWithoutRef<T>
>;

export function Card<T extends CardElementType = typeof defaultElement>({
  as,
  className,
  centered,
  children,
  ...rest
}: CardProps<T>) {
  const Component = as ?? defaultElement;

  const card = tv({
    base: 'tw:group tw:ease-in-out tw:focus-visible:ring-light-blue tw:flex tw:flex-col tw:justify-center tw:transition tw:duration-200 tw:focus-visible:ring-2 tw:focus-visible:ring-offset-2 tw:focus-visible:outline-none',
    variants: {
      isLink: {
        true: '',
      },
      hasImage: {
        true: '',
      },
    },
    compoundVariants: [
      {
        isLink: true,
        hasImage: false,
        class: 'tw:transition-colors tw:group-hover:bg-yellow',
      },
    ],
  });

  const isLink = 'href' in rest;
  const hasImage = Children.toArray(children).some(child => (child as ReactElement).type === CardImage);

  return (
    <Component {...rest} className={twMerge(card({ isLink, hasImage }), className)}>
      <CardContext.Provider value={{ isLink, centered: centered ?? false }}>{children}</CardContext.Provider>
    </Component>
  );
}
Card.displayName = 'Card';
