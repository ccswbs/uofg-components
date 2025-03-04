import { twMerge } from 'tailwind-merge';
import { Children, ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactElement } from 'react';
import { tv } from 'tailwind-variants';
import { CardContext } from './card-context';
import { CardImage } from './card-image';
import { CardContent } from './card-content';
import { CardTitle } from './card-title';
import { CardFooter } from './card-footer';

const defaultElement = 'div';

type CardElementType = ElementType<{ href?: string }, 'a'> | 'div' | 'article';

export type CardProps<T extends CardElementType = typeof defaultElement> = PropsWithChildren<
  {
    /**
     * The element to render the card as
     */
    as?: T;
    /**
     * Additional classes to apply to the card
     */
    className?: string;
    /**
     * Whether the card content should be centered
     * @default false
     */
    centered?: boolean;
  } & ComponentPropsWithoutRef<T>
>;

/**
 * The Card component is a container used to group related content like text, images, and actions in a styled, organized layout
 */
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

export { CardImage, CardContent, CardTitle, CardFooter };
