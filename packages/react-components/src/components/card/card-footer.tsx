'use client';

import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { CardContext } from './card-context';

export type CardFooterProps = PropsWithChildren<{
  /** Additional classes to apply to the card footer */
  className?: string;
}>;

/** The CardFooter component is used to display additional information or actions at the bottom of a card. */
export function CardFooter({ children, className }: CardFooterProps) {
  const context = useContext(CardContext);

  const cardFooter = tv({
    base: 'flex gap-2 bg-grey-light px-5 py-2 text-grey-light-contrast transition-colors',
    variants: {
      centered: {
        true: 'justify-center',
      },
    },
  });

  return (
    <div className={`uofg-card-footer ${twMerge(cardFooter({ centered: context?.centered ?? false }), className)}`}>
      {children}
    </div>
  );
}

CardFooter.displayName = 'CardFooter';
