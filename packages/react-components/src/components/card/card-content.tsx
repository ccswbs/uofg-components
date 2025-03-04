import { PropsWithChildren, useContext } from 'react';
import { CardContext } from './card-context';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type CardContentProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the card content
   */
  className?: string;
}>;
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
