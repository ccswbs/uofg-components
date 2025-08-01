'use client';

import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { CardContext } from './card-context';

export type CardTitleProps = PropsWithChildren<{
  /** Additional classes to apply to the card title */
  className?: string;
}>;

/** The CardTitle component is used to display a title for a card. */
export function CardTitle({ children, className }: CardTitleProps) {
  const context = useContext(CardContext);

  const cardTitle = tv({
    base: 'flex text-lg font-bold',
    variants: {
      centered: {
        true: 'items-center justify-center',
      },
    },
  });

  return (
    <div className={`uofg-card-title ${twMerge(cardTitle({ centered: context?.centered ?? false }), className)}`}>
      {children}
    </div>
  );
}

CardTitle.displayName = 'CardTitle';
