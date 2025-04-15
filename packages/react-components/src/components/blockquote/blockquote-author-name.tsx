import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type BlockquoteAuthorNameProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function BlockquoteAuthorName({ children, className, ...rest }: BlockquoteAuthorNameProps) {
  return (
    <span {...rest} className={twMerge('uofg-blockquote-author-name uog:not-italic uog:font-bold', className)}>
      {children}
    </span>
  );
}
