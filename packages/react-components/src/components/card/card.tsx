'use client';

import { Children, ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { CardContent } from './card-content';
import { CardContext } from './card-context';
import { CardFooter } from './card-footer';
import { CardImage } from './card-image';
import { CardTitle } from './card-title';

const defaultElement = 'div';

type CardElementType = ElementType | 'div' | 'article';

export type CardProps<T extends CardElementType = typeof defaultElement> = PropsWithChildren<
  {
    /** The element to render the card as */
    as?: T;
    /** Additional classes to apply to the card */
    className?: string;
    /**
     * Whether the card content should be centered
     *
     * @default false
     */
    centered?: boolean;
  } & ComponentPropsWithoutRef<T>
>;

/**
 * The Card component is a container used to group related content like text, images, and actions in a styled, organized
 * layout
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
    base: 'group focus-visible:ring-light-blue flex flex-col justify-center transition duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
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
        class: 'transition-colors group-hover:bg-yellow',
      },
    ],
  });

  const isLink = 'href' in rest;
  const hasImage = Children.toArray(children).some(child => (child as ReactElement).type === CardImage);

  return (
    <Component {...rest} className={`uofg-card ${twMerge(card({ isLink, hasImage }), className)}`}>
      <CardContext.Provider value={{ isLink, centered: centered ?? false }}>{children}</CardContext.Provider>
    </Component>
  );
}

Card.displayName = 'Card';

export { CardContent, CardFooter, CardImage, CardTitle };
