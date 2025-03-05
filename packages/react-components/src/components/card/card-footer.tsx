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
