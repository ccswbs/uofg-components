import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type FigureCaptionProps = PropsWithChildren<
  {
    className?: string;
    textAlignment?: 'left' | 'center' | 'justify';
  } & ComponentPropsWithoutRef<'span'>
>;

export function FigureCaption({ textAlignment = 'center', children, className, ...rest }: FigureCaptionProps) {
  const figureCaption = tv({
    base: 'w-full bg-grey-light-bg p-2 text-base text-grey-light-contrast dark:bg-grey-dark-bg dark:text-grey-dark-contrast light:bg-white light:text-body-copy',
    variants: {
      textAlignment: {
        left: 'text-left',
        center: 'text-center',
        justify: 'text-justify',
      },
    },
  });

  const classes = twJoin(figureCaption({ textAlignment: textAlignment ?? 'center' }), className);

  return (
    <figcaption className={twMerge('uofg-figure-caption', classes, className)} {...rest}>
      {children}
    </figcaption>
  );
}
