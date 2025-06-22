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
    base: 'uog:flex uog:flex-col uog:flex-1 uog:gap-2 uog:bg-grey-light-bg uog:p-5 uog:text-grey-light-contrast',
    variants: {
      isLink: {
        true: 'uog:transition-colors uog:group-hocus-visible:bg-yellow uog:group-hocus-visible:text-yellow-contrast',
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
