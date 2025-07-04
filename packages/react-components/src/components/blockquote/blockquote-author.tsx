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
    base: 'uofg-blockquote-author flex flex-col items-start gap-1 border-l-4 pl-4 font-light',
    variants: {
      color: {
        yellow: 'border-yellow',
        blue: 'border-blue',
      },
    },
  });

  return <div className={twMerge(classes({ color: context?.color ?? 'yellow' }), className)}>{children}</div>;
}
