import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type FigureProps = PropsWithChildren<{
  align: 'left' | 'right' | 'center';
}> &
  ComponentPropsWithoutRef<'figure'>;

/**
 * The Figure component provides a way to display images with captions while allowing text to wrap around the image. A
 * common use case is with news articles where images are used to enhance the content and provide visual context.
 */

export function Figure({ align = 'left', className, ...rest }: FigureProps) {
  const figure = tv({
    base: 'block w-full flex-col items-center gap-0 sm:inline-flex sm:w-[var(--uofg-figure-image-width)]',
    variants: {
      align: {
        left: 'py-1 pr-3 sm:float-start',
        right: 'py-1 pl-3 sm:float-end',
        center: 'mx-auto block! py-3',
      },
    },
  });

  const classes = figure({ align: align ?? 'left' });

  return <figure className={twMerge('uofg-figure', classes, className)} {...rest}></figure>;
}

export { FigureCaption } from './figure-caption';
export { FigureImage } from './figure-image';
