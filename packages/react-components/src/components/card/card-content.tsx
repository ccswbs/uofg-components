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
    base: 'uog:flex uog:flex-col uog:gap-2 uog:bg-light-grey-bg uog:p-5 uog:text-light-grey-contrast',
    variants: {
      isLink: {
        true: 'uog:transition-colors uog:group-hocus-visible:bg-yellow uog:group-hocus-visible:text-yellow-contrast',
      },
    },
  });

  return <div className={twMerge(cardContent({ isLink: context?.isLink ?? false }), className)}>{children}</div>;
}
CardContent.displayName = 'CardContent';
