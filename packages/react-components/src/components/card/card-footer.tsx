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
    base: 'uog:flex uog:gap-2 uog:bg-grey-light uog:px-5 uog:py-2 uog:text-grey-light-contrast uog:transition-colors',
    variants: {
      centered: {
        true: 'uog:justify-center',
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
