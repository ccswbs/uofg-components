import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type FigureProps = PropsWithChildren<{
  align: 'left' | 'right';
}> &
  ComponentPropsWithoutRef<'figure'>;

/**
 * The Figure component provides a way to display images with captions while allowing text to wrap around the image. A
 * common use case is with news articles where images are used to enhance the content and provide visual context.
 */

export function Figure({ align = 'left', className, ...rest }: FigureProps) {
  const figure = tv({
    base: 'inline-flex w-[var(--uofg-figure-image-width)] flex-col items-center gap-0',
    variants: {
      align: {
        left: 'float-start pr-3',
        right: 'float-end pl-3',
      },
    },
  });

  const classes = figure({ align: align ?? 'left' });

  return <figure className={twMerge('uofg-figure', classes, className)} {...rest}></figure>;
}

export { FigureCaption } from './figure-caption';
export { FigureImage } from './figure-image';
