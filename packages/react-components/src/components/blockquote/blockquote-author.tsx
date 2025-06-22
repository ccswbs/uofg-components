'use client';

import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { BlockquoteContext } from './blockquote-context';

export type BlockquoteAuthorProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function BlockquoteAuthor({ className, children }: BlockquoteAuthorProps) {
  const context = useContext(BlockquoteContext);

  const classes = tv({
    base: 'uofg-blockquote-author uog:border-l-4 uog:pl-4 uog:flex uog:flex-col uog:gap-1 uog:items-start uog:font-light',
    variants: {
      color: {
        yellow: 'uog:border-yellow',
        blue: 'uog:border-blue',
      },
    },
  });

  return <div className={twMerge(classes({ color: context?.color ?? 'yellow' }), className)}>{children}</div>;
}
