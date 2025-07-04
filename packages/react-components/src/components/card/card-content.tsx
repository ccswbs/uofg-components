'use client';

import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { CardContext } from './card-context';

export type CardContentProps = PropsWithChildren<{
  /** Additional classes to apply to the card content */
  className?: string;
}>;
export function CardContent({ children, className }: CardContentProps) {
  const context = useContext(CardContext);

  const cardContent = tv({
    base: 'flex flex-1 flex-col gap-2 bg-grey-light-bg p-5 text-grey-light-contrast',
    variants: {
      isLink: {
        true: 'transition-colors group-hocus-visible:bg-yellow group-hocus-visible:text-yellow-contrast',
      },
    },
  });

  return (
    <div className={`uofg-card-content ${twMerge(cardContent({ isLink: context?.isLink ?? false }), className)}`}>
      {children}
    </div>
  );
}
CardContent.displayName = 'CardContent';
